
(function(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ---------- Lead magnet opt-in ---------- */
function handleOptIn(e){
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim().split(' ')[0] || 'there';
  const email = (data.get('email') || '').toString().trim();
  const goal = (data.get('goal') || '').toString().trim();

  // Store lead locally
  const lead = {
    name, email, goal,
    createdAt: new Date().toISOString(),
    source: "landing_page_optin"
  };

  const leads = JSON.parse(localStorage.getItem('nyf_leads') || '[]');
  leads.push(lead);
  localStorage.setItem('nyf_leads', JSON.stringify(leads));

  const msg = document.getElementById('optInMessage');
  msg.classList.remove('hidden');
  msg.textContent = `Thanks, ${name}. Your plan is ready. Download it in the popup, then book your free call below.`;

  openModal();
  form.reset();

  return false;
}

/* ---------- Modal ---------- */
function openModal(){
  const m = document.getElementById('modal');
  m.classList.remove('hidden');
  m.classList.add('show');
}
function closeModal(){
  const m = document.getElementById('modal');
  m.classList.add('hidden');
  m.classList.remove('show');
}


/* ---------- Calendar booking grid ---------- */
const calState = {
  weekOffset: 0,
  selected: null,
  lead: null
};

function startOfDay(d){
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}
function addDays(d, n){
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function fmtDayLabel(d){
  return d.toLocaleDateString(undefined, { weekday:'short', day:'numeric', month:'short' });
}
function fmtISO(d){
  return d.toISOString().slice(0,10);
}
function timeToMinutes(t){
  const [hh, mm] = t.split(':').map(Number);
  return hh*60 + mm;
}
function minutesToTime(m){
  const hh = String(Math.floor(m/60)).padStart(2,'0');
  const mm = String(m%60).padStart(2,'0');
  return `${hh}:${mm}`;
}
function seededRand(seed){
  // deterministic 0..1
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function(){
    s = s * 16807 % 2147483647;
    return (s - 1) / 2147483646;
  }
}

function loadLatestLead(){
  const leads = JSON.parse(localStorage.getItem('nyf_leads') || '[]');
  calState.lead = leads.length ? leads[leads.length - 1] : null;

  const el = document.getElementById('linkLead');
  if (!el) return;

  if (!calState.lead){
    el.innerHTML = 'Tip: opt in above to attach your details automatically.';
    return;
  }
  el.innerHTML = `Attached: <strong>${calState.lead.name}</strong> (${calState.lead.email})`;
}

function buildWeekDays(){
  const today = startOfDay(new Date());
  const start = addDays(today, calState.weekOffset * 7);
  return Array.from({length:7}).map((_,i) => addDays(start, i));
}

function buildTimeRows(){
  // 8:00 to 18:00 every 60 mins, with a couple of premium slots
  const times = [];
  for (let m = 8*60; m <= 18*60; m += 60) times.push(minutesToTime(m));
  // Add 19:00 as an evening slot
  times.push("19:00");
  return times;
}

function isSlotAvailable(dayISO, time){
  // deterministic availability per cell
  const seed = parseInt(dayISO.replaceAll('-',''), 10) + timeToMinutes(time) + (calState.weekOffset*999);
  const rnd = seededRand(seed)();
  // ~70% availability, but avoid making it too full
  return rnd > 0.30;
}

function renderCalendarGrid(){
  const grid = document.getElementById('calendarGrid');
  if (!grid) return;

  const days = buildWeekDays();
  const times = buildTimeRows();

  grid.innerHTML = "";

  // top-left corner
  const corner = document.createElement('div');
  corner.className = "cal-head";
  corner.innerHTML = '<span class="cal-pill">15 min call</span>';
  grid.appendChild(corner);

  // day headers
  days.forEach(d => {
    const hd = document.createElement('div');
    hd.className = "cal-head";
    hd.textContent = fmtDayLabel(d);
    grid.appendChild(hd);
  });

  // rows
  times.forEach(time => {
    const timeCell = document.createElement('div');
    timeCell.className = "cal-time";
    timeCell.textContent = time;
    grid.appendChild(timeCell);

    days.forEach(d => {
      const dayISO = fmtISO(d);
      const available = isSlotAvailable(dayISO, time);

      const cell = document.createElement('div');
      cell.className = "cal-cell";
      cell.setAttribute("role", "button");
      cell.setAttribute("tabindex", available ? "0" : "-1");
      cell.setAttribute("aria-disabled", available ? "false" : "true");
      cell.dataset.day = dayISO;
      cell.dataset.time = time;
      cell.textContent = available ? "Available" : "Booked";

      if (!available){
        cell.style.background = "rgba(255,255,255,0.55)";
      } else {
        cell.addEventListener('click', () => selectGridSlot(dayISO, time));
        cell.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectGridSlot(dayISO, time);
          }
        });
      }

      grid.appendChild(cell);
    });
  });

  // re-apply selection highlight after rerender
  if (calState.selected){
    highlightSelected();
  }
}

function selectGridSlot(dayISO, time){
  calState.selected = {
    id: `${dayISO}_${time}`,
    dayISO, time,
    label: `${new Date(dayISO).toLocaleDateString(undefined, { weekday:'short', day:'numeric', month:'short' })} at ${time}`,
    duration: "15 min"
  };

  const out = document.getElementById('selectedSlot');
  const confirm = document.getElementById('confirmBooking');
  if (out) out.textContent = `${calState.selected.label} (${calState.selected.duration})`;
  if (confirm) confirm.disabled = false;

  const msg = document.getElementById('bookingMessage');
  if (msg) msg.classList.add('hidden');

  highlightSelected();
}

function highlightSelected(){
  document.querySelectorAll('.cal-cell').forEach(c => {
    c.classList.remove('is-selected');
  });
  if (!calState.selected) return;
  const active = [...document.querySelectorAll('.cal-cell')].find(c => c.dataset.day === calState.selected.dayISO && c.dataset.time === calState.selected.time);
  if (active) active.classList.add('is-selected');
}

function confirmBooking(){
  if (!calState.selected) return;

  const bookings = JSON.parse(localStorage.getItem('nyf_bookings') || '[]');
  const booking = {
    slot: calState.selected,
    lead: calState.lead ? { name: calState.lead.name, email: calState.lead.email, goal: calState.lead.goal } : null,
    createdAt: new Date().toISOString(),
    status: "confirmed"
  };
  bookings.push(booking);
  localStorage.setItem('nyf_bookings', JSON.stringify(bookings));

  const msg = document.getElementById('bookingMessage');
  msg.classList.remove('hidden');
  msg.innerHTML = `
    <div class="font-bold">Booking confirmed</div>
    <div class="text-sm mt-1">
      You chose <strong>${calState.selected.label}</strong>.
      ${booking.lead ? ` Attached to <strong>${booking.lead.name}</strong> (${booking.lead.email}).` : ""}
      We'll send you a confirmation email with all the details.
    </div>
  `;
}

function clearBooking(){
  calState.selected = null;
  const out = document.getElementById('selectedSlot');
  const confirm = document.getElementById('confirmBooking');
  const msg = document.getElementById('bookingMessage');

  if (out) out.textContent = "Pick a slot to continue.";
  if (confirm) confirm.disabled = true;
  if (msg) msg.classList.add('hidden');

  document.querySelectorAll('.cal-cell').forEach(c => c.classList.remove('is-selected'));
}

function bindCalendarGrid(){
  const prev = document.getElementById('prevWeek');
  const next = document.getElementById('nextWeek');
  const confirm = document.getElementById('confirmBooking');
  const clear = document.getElementById('clearBooking');

  if (prev) prev.addEventListener('click', () => {
    calState.weekOffset -= 1;
    clearBooking();
    renderCalendarGrid();
  });

  if (next) next.addEventListener('click', () => {
    calState.weekOffset += 1;
    clearBooking();
    renderCalendarGrid();
  });

  if (confirm) confirm.addEventListener('click', confirmBooking);
  if (clear) clear.addEventListener('click', clearBooking);

  loadLatestLead();
  renderCalendarGrid();

  // Update "attached lead" display if a new lead is added
  window.addEventListener('storage', loadLatestLead);
}

document.addEventListener('DOMContentLoaded', bindCalendarGrid);
