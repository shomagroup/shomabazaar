// Initial Setting
$('.show').removeClass('show');
$(".contact-form-sect, [next='1']").addClass('show');
$('.le-mod').removeClass('le-mod');
$('.se-mod').removeClass('se-mod');
$('[le-mod], .sauce').removeClass('active');

// no please
$('.form-field-div').on('input', function() {
    $(this).find('.please-fill').removeClass('please-fill');
    $('.warning-txt').removeClass('show');
});
// UPDATE CHECK 
// $('.event-heading').text('UPDATE-CHECK');

// ATTEMPT Form [SHADOW FORM]
$("[step='1']").on('input', function() {
    $("#h-name").val($("[name='Name']").val());
    $("#h-compn").val($("[name='Company']").val());
    $("#h-phone").val($("[name='Phone']").val());
    $("#h-email").val($("[name='Email']").val());
});
$('[event]').on('click', function() {
    $("#h-event").val($(this).val());
});

// STEP-1 NEXT BUTTON --------------------------------------
$(".event-next-button[next='1']").on('click', function() {
    // var update
    $(".contact-form-sect input[step='1'][required]").each(function() {
        if ($(this).val() == '' || $(this).val() == ' ') {
            $(this).addClass('please-fill');
            $('.warning-txt').text('Please fill missing fields in red');

        } else if ($("[phoneaddr]").val() != '') {
            if (!$.isNumeric($('[phoneaddr]').val())) {
                $('[phoneaddr]').addClass('please-fill');
                $('.warning-txt').text('Please enter a valid phone number');
            } else if ($("[emailaddr]").val() != '') {
                if (!$('[emailaddr]').val().includes('@')) {
                    $('[emailaddr]').addClass('please-fill');
                    $('.warning-txt').text('Please enter a valid email address');
                }
            }
        }
    });

    if ($(".please-fill[step='1']").length) {
        $('.warning-txt').addClass('show');
    } else {
        if (!$('*[event]').is(':checked')) {
            $('.warning-txt').addClass('show');
            $('.warning-txt').text('Please select a Booking Type');
        } else {
            // fields are filled ---------
            $('.contact-form-sect').removeClass('show');
            $('.warning-txt').removeClass('show');
            $(".back-button-gal[back='2']").addClass('show');
            $(".event-next-button[next='2']").addClass('show');
            $(".event-next-button[next='1']").removeClass('show');
            $('.desired-time').addClass('show');
            // Submit shadow form
            $('#attempt').trigger('click')
                // selection  adjustment for small event
            if ($("[event='small-event']").is(':checked')) {
                $('.event-heading').text('Small Event');
                $('#inquiry-type').val('Small Event');
                $('[event-inquiry]').text('Small Event');
                $('[guest-info]').text('* 10 - 20 people for Small Events');
                $("[name='Guests']").attr('min', '10');
                $("[name='Guests']").attr('max', '20');
                $('.beverage-selection').addClass('se-mod');
                $('[drinkerito]').text('Beverage Selection');
                $('.drink-pack').addClass('show');
                $('[se]').attr('required', '1');
                // selection  adjustment for small event
            } else if ($("[event='large-event']").is(':checked')) {
                $('.event-heading').text('Large Event');
                $('#inquiry-type').val('Large Event');
                $('[event-inquiry]').text('Large Event');
                $('[guest-info]').text('* Minimum of 21 people for private events');
                $("[name='Guests']").attr('min', '21');
                $("[name='Guests']").attr('max', '150');
                $('.beverage-selection, [le-mod]').addClass('le-mod');
                $('.bar-pack').addClass('show');
                $('[le]').attr('required', '1');
                $('[drinkerito]').text('Bar Package');
                $('[le-mod]').addClass('active');
            }
        }
    }
});


// STEP-1 END ---------------------------

// BACK STEP-2
$(".back-button-gal[back='2']").on('click', function() {
    $('.event-heading').text('Private Events');
    $('.desired-time').removeClass('show');
    $('.contact-form-sect').addClass('show');
    $('.warning-txt').removeClass('show');
    $(".event-next-button[next='1']").addClass('show');
    $(".event-next-button[next='2']").removeClass('show');
    $(".back-button-gal[back='2']").removeClass('show');
    $(".please-fill[step='2']").removeClass('please-fill');
    $('.drink-pack, .bar-pack').removeClass('show');
    $('.le-mod').removeClass('le-mod');
    $('.se-mod').removeClass('se-mod');
    $('[se], [le]').removeAttr('required');
    $('[le-mod]').removeClass('active');
});

// STEP-2 NEXT BUTTON
$(".event-next-button[next='2']").on('click', function() {
    $("input[step='2'][required]").each(function() {
        if ($('[datepicker]'))
            if ($("*[time][step='2'][required] :selected").is("[value='Time']")) {
                $("[time][step='2'][required]").addClass('please-fill');
                $('.warning-txt').text('Please Select a Time Slot');
            }
        if ($.isNumeric($('[GuestNum]').val())) {
            if ($("[event='small-event']").is(':checked')) {
                if ($("[name='Guests']").val() < 10) {
                    $("[name='Guests']").addClass('please-fill');
                    $('.warning-txt').text('10 Guests Minimum for Small Events');
                }
                if ($("[name='Guests']").val() > 20) {
                    $("[name='Guests']").addClass('please-fill');
                    $('.warning-txt').text('20 Guests Maximum for Small Events');
                }
            }
            if ($("[event='large-event']").is(':checked')) {
                if ($("[name='Guests']").val() < 21) {
                    $("[name='Guests']").addClass('please-fill');
                    $('.warning-txt').text('21 Guests Minimum for Private Events');
                }
                if ($("[name='Guests']").val() > 150) {
                    $("[name='Guests']").addClass('please-fill');
                    $('.warning-txt').text('150 Guests Maximum for Private Events');
                }
            }
        } else {
            $('[GuestNum]').addClass('please-fill');
            $('.warning-txt').text('Please add a Valid Guest Number');
        }
        if ($(this).val() == '') {
            $(this).addClass('please-fill');
            $('.warning-txt').text('Please fill missing fields in red');
        }
    });
    if ($(".please-fill[step='2']").length) {
        $('.warning-txt').addClass('show');
    } else {
        // fields are filled
        $('.warning-txt').removeClass('show');
        $('.desired-time').removeClass('show');
        $(".back-button-gal[back='3']").addClass('show');
        $(".event-next-button[next='3']").addClass('show');
        $(".event-next-button[next='2']").removeClass('show');
        $(".back-button-gal[back='2']").removeClass('show');
        $('.beverage-selection').addClass('show');
    }
});
// STEP-2 END ---------------------------
// BACK STEP-3
$(".back-button-gal[back='3']").on('click', function() {
    $('.beverage-selection').removeClass('show');
    $('.warning-txt').removeClass('show');
    $('.desired-time').addClass('show');
    $(".back-button-gal[back='3']").removeClass('show');
    $(".event-next-button[next='3']").removeClass('show');
    $(".event-next-button[next='2']").addClass('show');
    $(".back-button-gal[back='2']").addClass('show');
});
// STEP-3 NEXT BUTTON
$(".event-next-button[next='3']").on('click', function() {
    if (!$("*[step='3'][required]").is(':checked')) {
        $('.warning-txt').addClass('show');
        $('.warning-txt').text('Please Select a Beverage Package');
    } else {
        // FIELDS FILLED
        $('.beverage-selection').removeClass('show');
        $('.food-selection').addClass('show');
        $(".back-button-gal[back='3']").removeClass('show');
        $(".event-next-button[next='3']").removeClass('show');
        $(".event-next-button[next='4']").addClass('show');
        $(".back-button-gal[back='4']").addClass('show');
    }
});
// BACK STEP 4
$(".back-button-gal[back='4']").on('click', function() {
    $('.beverage-selection').addClass('show');
    $('.food-selection').removeClass('show');
    $(".back-button-gal[back='3']").addClass('show');
    $(".event-next-button[next='3']").addClass('show');
    $(".event-next-button[next='4']").removeClass('show');
    $(".back-button-gal[back='4']").removeClass('show');
});
// ADDING VENDOR REQUIREMENT
$('[vendor]').on('click', function() {
    $(this).toggleClass('checked');
    let vendors = $('[vendor]').filter('.checked').map((k, box) => box.name).toString().toArray().join(', ');
    $("#vendor-value").val(vendors);
    // VARS
    var bff = $(".checked[vendor='bff']").length;
    var doce = $(".checked[vendor='doce']").length;
    var dog = $(".checked[vendor='dog']").length;
    var poke = $(".checked[vendor='poke']").length;
    var sndw = $(".checked[vendor='sndw']").length;
    var shahs = $(".checked[vendor='shahs']").length;
    var plin = $(".checked[vendor='plin']").length;

    // CHECKED
    if ($(this).is('.checked')) {
        if ($(this).is("[vendor='ash']")) {
            if (ash === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='bff']")) {
            if (bff === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='doce']")) {
            if (doce === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='dog']")) {
            if (dog === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='poke']")) {
            if (poke === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='shahs']")) {
            if (shahs === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='sndw']")) {
            if (sndw === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[vendor='plin']")) {
            if (plin === 1) { $('#vendor-restriction1').val(function(i, val) { return +val + 1 }); }
        }
    }
    // UNCHECKED
    if ($(this).not('.checked')) {
        if ($(this).is("[vendor='bff']")) {
            if (bff === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[vendor='doce']")) {
            if (doce === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[vendor='dog']")) {
            if (dog === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[vendor='poke']")) {
            if (poke === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[vendor='shahs']")) {
            if (shahs === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[vendor='sndw']")) {
            if (sndw === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[vendor='plin']")) {
            if (plin === 0) { $('#vendor-restriction1').val(function(i, val) { return +val - 1 }); }
        }
    }

});

// When dessert is clicked
$('[dessert]').on('click', function() {
    $(this).toggleClass('checked');
    // written value
    let desserts = $('[dessert]').filter('.checked').map((k, box) => box.name).toArray().join(', ');
    $("#dessert-value").val(desserts);
    // Vendor Count for Restriction
    var dessertBff = $(".checked[dessert='bff']").length;
    var dessertTint = $(".checked[dessert='tint']").length;
    var dessertShahs = $(".checked[dessert='shahs']").length;
    var dessertSweet = $(".checked[dessert='sweet']").length;

    // CHECKED
    if ($(this).is('.checked')) {
        if ($(this).is("[dessert='bff']")) {
            if (dessertBff === 1) { $('#vendor-restriction2').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[dessert='tint']")) {
            if (dessertTint === 1) { $('#vendor-restriction2').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[dessert='shahs']")) {
            if (dessertShahs === 1) { $('#vendor-restriction2').val(function(i, val) { return +val + 1 }); }
        }
        if ($(this).is("[dessert='sweet']")) {
            if (dessertSweet === 1) { $('#vendor-restriction2').val(function(i, val) { return +val + 1 }); }
        }
    }
    // UNCHECKED
    if ($(this).not('.checked')) {
        if ($(this).is("[dessert='bff']")) {
            if (dessertBff === 0) { $('#vendor-restriction2').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[dessert='tint']")) {
            if (dessertTint === 0) { $('#vendor-restriction2').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[dessert='shahs']")) {
            if (dessertShahs === 0) { $('#vendor-restriction2').val(function(i, val) { return +val - 1 }); }
        }
        if ($(this).is("[dessert='sweet']")) {
            if (dessertSweet === 0) { $('#vendor-restriction2').val(function(i, val) { return +val - 1 }); }
        }
    }
});
// NEXT STEP 4
$(".event-next-button[next='4']").on('click', function() {
    if ($('#vendor-restriction1').val() < 2) {
        $('.warning-txt').addClass('show');
        $('.warning-txt').text('Please Select a Minimum of 2 Vendors');
    } else if ($('#vendor-restriction2').val() < 1) {
        $('.warning-txt').addClass('show');
        $('.warning-txt').text('Please Select a Minimum of 1 Dessert');
    } else {
        // FIELDS FILLED
        $('[flname]').text($("[name='Name']").val());
        $('[company]').text($("[name='Company']").val());
        $('[phonenumber]').text($("[name='Phone']").val());
        $('[emailaddress]').text($("[name='Email']").val());
        $('[desired-type]').text($("[name='Date']").val());
        $('[timeslot]').text($("[name='Time-Selction']").val());
        $('[adittionalhours]').text($("[name='Additional-Hours']").val());
        $('[drinkpackage]').text($(".w--redirected-checked ~ [step='3'][required]").val());
        $('[foodselection]').text($("#vendor-value").val() + ", " + $("#dessert-value").val());
        //
        $('.confirmation-sect').addClass('show');
        $('.food-selection').removeClass('show');
        $(".back-button-gal[back='5']").addClass('show');
        $('[confirrmbutton]').addClass('show');
        $(".event-next-button[next='4']").removeClass('show');
        $(".back-button-gal[back='4']").removeClass('show');
    }
});
// BACK STEP 4
$(".back-button-gal[back='5']").on('click', function() {
    $('.confirmation-sect').removeClass('show');
    $('.food-selection').addClass('show');
    $(".back-button-gal[back='5']").removeClass('show');
    $('[confirrmbutton]').removeClass('show');
    $(".event-next-button[next='4']").addClass('show');
    $(".back-button-gal[back='4']").addClass('show');
});
// DATE PICKER
$('[datepicker]').datepicker({
    format: 'mm/dd/yy',
    weekStart: 0,
    filter: function(date, view) {
        if (date.getDay() === 5 && view === 'day') {
            return false;
        }
        if (date.getDay() === 6 && view === 'day') {
            return false;
        }
        if (date.getDay() === 0 && view === 'day') {
            return false;
        }
    }
});

// LUXON
var DateTime = luxon.DateTime;
let subtime = document.querySelector('#subtime');
let hSubtime = document.querySelector('#h-subtime');
const timey = DateTime.now().setZone('America/New_York').toFormat("(HH:mm) ccc LLL dd yyyy");
subtime.value = timey;
hSubtime.value = timey;
const timer = setInterval(() => {
    const timey = DateTime.now().setZone('America/New_York').toFormat("(HH:mm) ccc LLL dd yyyy");
    subtime.value = timey;
    hSubtime.value = timey;
}, 1000);

// // TODAY
// let input3 = $('#today');
// const timey3 = DateTime.now().setZone('America/New_York').toFormat("LL/dd/yy");
// input3.value = timey3;