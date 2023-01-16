// Resy popup
$('[resy-pop]').on('click', function() {
    $('.body').addClass('no-scrollito');
    $('.resy-pop-wrap').addClass('show');
});
$('[resy-close]').on('click', function() {
    $('.body').removeClass('no-scrollito');
    $('.resy-pop-wrap').removeClass('show');
});
// Parking
$('.pop-close').on('click', function() {
    $('.popup-wrapper').css('display', 'none');
});
$('[parkingback]').on('click', function() {
    $('.parking-info').removeClass('active');
    $('.body').removeClass('no-scrollito');
});
$('.p-language-button').on('click', function() {
    $('.parking-text, .p-copy-swap div, .p-copy-2').toggleClass('active');
});
$('[parking-info]').on('click', function() {
    $('.parking-info').addClass('active');
    $('.body').addClass('no-scrollito');
});
// Back Custom
$('[backerito]').attr('onclick', 'history.back(-1)');
//