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
// var inTwoMins = new Date(new Date().getTime() + 2 * 60 * 1000);
//cookie setter
if (!($.urlParam('utm_source') == null) && !($.urlParam('utm_source') == "") && !($.urlParam('utm_source') == undefined) ) {
var source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
// source, exist
if (!($.urlParam('utm_medium') == null) && !($.urlParam('utm_medium') == "")  && !($.urlParam('utm_medium') == undefined) ) {
var medium = $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
} else { var medium = "⠀"}
if (!($.urlParam('utm_campaign') == null) && !($.urlParam('utm_campaign') == "") && !($.urlParam('utm_campaign') == undefined)  ) {
var campaign = $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
} else {var campaign = "⠀"}
if (!($.urlParam('utm_term') == null) && !($.urlParam('utm_term') == "") && !($.urlParam('utm_term') == undefined)  ) {
var term = $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
} else {var term = "⠀"}
var utm_id = source+' / '+medium+' / '+campaign
var utm = {
    "source": source,
    "medium": medium,
    "campaign": campaign,
    "term": term,
    "id": utm_id
}
Cookies.set("utm", JSON.stringify(utm) , {expires:30})
};

if (!(Cookies.get('utm') == null) || !(Cookies.get('utm') == undefined)) { // UTM NOT EMPTY
$("input[name='utm_id']").val(JSON.parse(Cookies.get('utm')).id);
$("input[name='utm_source']").val(JSON.parse(Cookies.get('utm')).source);
$("input[name='utm_medium']").val(JSON.parse(Cookies.get('utm')).medium);
$("input[name='utm_campaign']").val(JSON.parse(Cookies.get('utm')).campaign);
$("input[name='utm_term']").val(JSON.parse(Cookies.get('utm')).term);
} else {}