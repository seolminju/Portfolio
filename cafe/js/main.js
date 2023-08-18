$(function () {

    const slider = $("#slider");
    const sec1 = $(".sec1");
    const sec4 = $(".sec4 .imgBox div");
    const sec6 = $(".sec6 .imgBox");

    let scrollH = $(window).scrollTop();
    let totalH = $("body").innerHeight();
    let winH = $(window).innerHeight();


    sec1.addClass("ani");
    slider.slick({
        arrows:true,
        prevArrow: slider.siblings(".prevArrow"),
        nextArrow: slider.siblings(".nextArrow"),

        centerMode:true,
        slidesToShow:1,
        // centerPadding: "100px",
        variableWidth: true,
    });

    slider.on("beforeChange", function (event, slick, current, next) {

        if (current !== next) {
            $(".slick-current + .slick-cloned").each(function(index, item) {
                const $item = $(item);

                setTimeout(function (){
                    $item.addClass("slick-current");
                    $item.addClass("slick-center");
                });
            });
        }
    });


    function scrollAni() {
        // if (scrollH + winH > sec1.offset().top) {
        //     sec1.addClass("ani");
        // } else {
        //     sec1.removeClass("ani");
        // }

        for (let i = 0; i < sec4.length; i++) {
            if (scrollH + winH/1.2 > sec4.offset().top) {
                sec4.eq(i).addClass("ani");
            } else {
                sec4.eq(i).removeClass("ani");
            }
        }

        if (scrollH + winH > sec6.offset().top) {
            sec6.addClass("ani");
        } else {
            sec6.removeClass("ani");
        }
    }

    scrollAni();

    $(window).on("scroll", function () {
       scrollH = $(this).scrollTop();

       scrollAni();
    });
});