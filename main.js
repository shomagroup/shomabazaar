
$(document).ready(function() {

function walldown(target) {
    target.closest('popup-subscribe').addClass('wall-down');
}
function wallup() {
    $('[data-popup-sms]').removeClass('wall-down');
}
$('[popup-close]').on('click', function{
    walldown($(this));
});
$('[data-popup-sms-trigger]').on('click', function{
    wallup();
});


});// end