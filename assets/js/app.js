$(document).ready(function(){
    $(window).scroll(function () {
        var $nav = $(".navbar");
    $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    })
})