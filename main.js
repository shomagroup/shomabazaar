
$(document).ready(function() {


var newpop = 'promo240613';
if ( Cookies.get('popupseen') == newpop ) {
    walldown();
} else {
    wallup();
}
    

function walldown() {
    $('.popup-subscribe').addClass('wall-down');
    Cookies.set('popupseen', 'promo240613');
}
function wallup() {
    $('[data-popup-sms]').removeClass('wall-down');
}

$('[popup-close]').on('click', function() {
    walldown();
});
$('[data-popup-sms-trigger]').on('click', function() {
    wallup();
});


});// end