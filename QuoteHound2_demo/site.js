// Set to null when in production
var logging = null;

// Debug logging
function log(message) {
    if (logging === true) {
        console.log(message);
    }
}

// enter your theme javascript here
function trackProgress(progress) {
    $('.form-progress-value-value').text(progress);
    $('.form-progress-bar-width').css({
        'width': progress + '%',
    });
}

$(function () {
    //grab source
    var source = sb.URI.getQueryParameterByName('source')
    $('input[name="F_166_SOURCE"]').val(source).trigger('change');
    // Pre-select 1970 on load
    var defaultYear;
    $('label.imageRadioButton').click(function () {
        log('input clicked');
        if (defaultYear !== 1) {
            $('select[name="_F_5_DOB"] option:contains("1970")').prop('selected', true);
            defaultYear = 1;
            log('year changed');
        }
    });

    // DOB validation
    function checkDob() {
        var isValid = 1;
        $('div[data-field="F_5_DOB"] select').each(function () {
            // Log values
            log($(this).val());

            // if empty, turn boolean off
            if ($(this).val() == "" | $(this).val() == null) {
                isValid = 0;
            }
        });

        // If all valid
        if (isValid === 0) {
            return false;
        }
        return true;
    }

    // DOB styling with error
    function dobError(switchType) {
        $('div[data-field="F_5_DOB"]').find('.error-message').text('Please enter your full date of birth');
        if (switchType === 'button') {
            $('div[data-field="F_5_DOB"]').addClass('has-error');
        }
    }

    // Add ignore validate class to DOB
    $('div[data-field="F_5_DOB"]').addClass('ignore-validator-style');

    // Remove validator style if all fields have a value
    $('div[data-field="F_5_DOB"] select').each(function () {
        $(this).on('change', function () {
            log('DOB item changed');
            if (checkDob()) {
                $('div[data-field="F_5_DOB"]').removeClass('ignore-validator-style');
            } else {
                $('div[data-field="F_5_DOB"]').addClass('ignore-validator-style');
            }
        });
    });


    //hide this on doc load
    $('#form-footer-last-step').hide();

    var currentPage = 1;

    var dobPage = 6;
    //  actual maxPage = 6 as using an array to display different progress based on what page
    var maxPage = 9;
    //used this instead of the previously made trackProgress function
    var percents = ['0%', '20', '30', '40', '60', '70', '80', '90'];

    //get sbf form
    var form = sbf.getForm('form-1');

    //add postcode value as text in #town span

    $("input[name='F_11_POSTCODE']").change(function () {
        var town = $(this).val();
        $('#town').text(town);
    })
    $("form#form-1 input, form#form-1 select").each(function () {
        var input = $(this); // This is the jquery object of the input, do what you will

        // alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
    });

    //
    //TO DO: 
    //"Great news, we specialise in affordable cover for over 70 - 80 year olds!"
    // but this age changes dependent on what they inputted: 
    //50 - 60 / 60 - 70 / 70 - 80 / 80+
    // After postcode: "Brilliant, we have local agents in Manchester ready to help"
    // We'll need to turn on PAF and drag the city in - can we do that?

    // function next() {
    //     console.log("Current page", currentPage);
    // }

    // next == radio button
    // continue == clickable button
    $(".next, .continue").click(function (e) {
        console.log(currentPage, "currentPage");

        // Ensure that all fields are valid on this
        var step = $('#step' + currentPage);
        var canProgress = true;
        var switchType;

        if (!$(this).hasClass('imageRadioButton')) {
            switchType = 'button';
        } else {
            switchType = 'radio';
        }

        if (currentPage === dobPage) {
            log('dob page');
            if (!checkDob()) {
                log('DOB isn\'t Complete. Make it ugly');
                dobError(switchType);
                return;
            } else {
                log('DOB looks fine, let\'s proceed');
            }
        }

        $('div[data-field]', step).each(function () {

            // Check the field for being valid - marking it as changed, which should force validation to run
            sbf.getForm('form-1').getField($(this).data('field')).handleValueChanged();

            if (!$(this).hasClass('field-valid')) {
                log("doesn't have field valid");
                $('input', this).blur();

                if (!$(this).hasClass('field-valid')) {
                    canProgress = false;

                }

            }

        });

        if (!canProgress) {
            return;
        }

        if (currentPage < maxPage) {
            var nextPage = currentPage + 1;
        } else {
            $('.continue').show();
            return; //if already at max page
        }

        trackProgress(percents[nextPage]);

        $("#step" + currentPage).fadeOut(300);
        $("#step" + nextPage).delay(300).fadeIn();
        $("#previous").delay(300).fadeIn();
        currentPage = nextPage;

        if (currentPage >= 5 && currentPage < maxPage) {
            $('.continue').delay(300).fadeIn();
        }


        if (currentPage === maxPage) {
            $('.continue').fadeOut(300);
            $('button[type="submit"],#form-footer-last-step').delay(300).fadeIn(); // Show submit button
        }

        //note e.stopPropagation stops radio buttons from registering a value
        //if the simple validator doesn't have 'Required' set
        e.stopPropagation();
        e.preventDefault();
    });
    // $(".next, .continue").click(next);
    $("a#previous").click(function () {

        if (currentPage === 4) {
            $('.continue').fadeOut(300);
        }
        if (currentPage > 5 && currentPage <= maxPage) {
            $('.continue').delay(300).fadeIn();
        }

        $('#form-footer-last-step').fadeOut(300);
        if (currentPage !== 0) {
            var prevPage = currentPage - 1;
        } else {
            return;
        }

        trackProgress(percents[prevPage]);

        $("#step" + currentPage).fadeOut(300);
        $("#step" + prevPage).delay(300).fadeIn();
        $('input[type="submit"]').fadeOut(300);

        currentPage = prevPage;

        if (currentPage === 1) {
            $('#previous,#alertBox').fadeOut(); //set progress bar width to 10% when going back to the first page (0 = 1 in an array)

            //BUG FIX 18/03/2020 removed incorrect ID, added in the below
            $('.form-progress-bar-width').css("width", "20%");
            $('.form-progress-value-value').text("20");

        }
    });
    $("form#form-1 input[name='F_11_POSTCODE']").change(function () {
        var p = $(this).val();
        var wrapper = $("#postcode");
        $("input[name='F_11_POSTCODE']").html(p)

        $("input[name='F_11_POSTCODE']").html(isValidPostcode(p))
        if (isValidPostcode(p)) {
            // there is a mismatch, hence show the error message
            wrapper.removeClass('has-error');
            $('.continue').prop("disabled", false);
            $('button').css("opacity", "1");
            wrapper.find(".error-message").html("");
            console.log("passed check")
        }
        else {
            // else, do not display message
            wrapper.removeClass('field-valid');
            $('.continue').prop("disabled", true);
            $('button:disabled').css("opacity", "0.75");
            wrapper.addClass('has-error');
            wrapper.find(".error-message").html("Please enter a valid postcode");
            console.log("failed check")
        }
    });
    var formdata = sbf.getForm('form-1').data;

    function isValidPostcode(p) {
        var postcodeRegEx = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/gim;
        return postcodeRegEx.test(p);
    }

    // BUGFIX: Prevent user from submitting with enter key on any page except the last
    $(window).keydown(function (event) {
        if (event.keyCode == 13 || event.keyCode == 10) {
            log('current Page = ' + currentPage + '\n');
            log('max Page = ' + maxPage + '\n');
            if (currentPage !== maxPage) {
                event.preventDefault();
                log('User cannot submit using keyboard on this page');
                return false;
            }
        }
    });


});