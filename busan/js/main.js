$(function () {

    const slider = $("#mainSlider");
    const $slide = $(".slideBox .slide");
    const $btn = $(".sec3 .btnBox .btn");
    const $menu = $(".sec3 .slideBox");

    let scrollH = $(window).scrollTop();
    let totalH = $("body").innerHeight();
    let winH = $(window).innerHeight();


    slider.slick({
        prevArrow: slider.siblings().children(".prev"),
        nextArrow: slider.siblings().children(".next"),
        autoplay:true,
    });

    slider.on("beforeChange", function (event, slick, current, next) {
        $(".pageCount").text(`${next+1} / ${slick.slideCount}`);
    });

    function slide() {
        for ( let i = 0; i < $slide.length; i++) {
            $slide.eq(i).slick({
                variableWidth: true,
                prevArrow: $slide.eq(i).siblings().children(".prevArrow"),
                nextArrow: $slide.eq(i).siblings().children(".nextArrow"),
            })
        }
    }

    function btnProgress() {
        for ( let i = 0; i < $btn.length; i++ ) {
            for (let i = 0; i < $menu.length; i++) {
                $btn.eq(i).on("click", function () {
                    $menu.css("display", "none");
                    $btn.removeClass("click");
                    $btn.eq(i).addClass("click");
                    $menu.eq(i).css("display", "block");
                });
            }
        }
    }

    slide();
    btnProgress();

    $("footer #office").on("click", function () {
        $("footer #office ul").toggle();
        $("footer #site ul").hide();
    });
    $("footer #site").on("click", function () {
        $("footer #site ul").toggle();
        $("footer #office ul").hide();
    });

    let scrollTop = 0;

    $(window).on("scroll", function() {
        // $(this).scrollTop(); // 스크롤 좌표를 px 단위로 알려준다.
        scrollTop = $(this).scrollTop();
        scrollHeaderEvent();
    });

    function scrollHeaderEvent() {
        if (scrollTop > 46) {
            $(".headerSubMenu").addClass("none");
            $(".headerMenuArea").addClass("fixed");
            $("header").addClass("scroll");
        } else {
            $(".headerSubMenu").removeClass("none");
            $(".headerMenuArea").removeClass("fixed");
            $("header").removeClass("scroll");
        }
    }

    scrollHeaderEvent();


});