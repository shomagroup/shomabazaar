let url = window.location.href;
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
if (window.location.href.indexOf("parking") > -1) {
    $('.parking-info').addClass('active');
    $('.body').addClass('no-scrollito');
}
$('.pop-close').on('click', function() {
    $('.popup-wrapper').css('display', 'none');
});
$('[parkingback]').on('click', function() {
    $('.parking-info').removeClass('active');
    $('.body').removeClass('no-scrollito');
});
$('.p-language-button').on('click', function() {
    $('.parking-text, .p-copy, .p-copy-2, .p-step-copy').toggleClass('active');
});
$('[parking-info]').on('click', function() {
    $('.parking-info').addClass('active');
    $('.body').addClass('no-scrollito');
});
// Back Custom
$('[backerito]').attr('onclick', 'history.back(-1)');


//

// === UTM TRACKER === //
$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results == null) { return null; } else { return results[1] || 0; }
}
//
var inTwoMins = new Date(new Date().getTime() + 2 * 60 * 1000);
//cookie setter
//
if (!$.urlParam('utm_source') == null || !$.urlParam('utm_source') == "") {
var source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
Cookies.set('source', source, { expires: 30 });
Cookies.set('utm_url', url, { expires: 30 });
}
//
if (!$.urlParam('utm_medium') == null || !$.urlParam('utm_medium') == "") {
var medium = $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
Cookies.set('medium', medium, { expires: 30 });
}
//
if (!$.urlParam('utm_campaign') == null || !$.urlParam('utm_campaign') == "") {
    var campaign = $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('campaign', campaign, { expires: 30 });
}
//
if (!$.urlParam('utm_term') == null || !$.urlParam('utm_term') == "") {
    var term = $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('term', term, { expires: 30 });
}
