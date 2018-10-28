
(function() {

    $(".countup").countUp();

    $('.fa.fa-reorder').click(function () {
        $('.main-menu.header-block .nav').toggle();
    });

}());

$(document).ready(function () {
    new WOW().init();
    $(".main-menu li").on("click", ".scroll-nav", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),

            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(window).scroll(function () {
        if ( $(this).scrollTop() > 400 )
            $("#totop").fadeIn();
        else
            $("#totop").fadeOut();
    });

    $("#totop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 1500 );
        return false;
    });
});
$(window).on("throttledresize", function (event) {
    drawChartPREICO();
    drawChartICO();
});
