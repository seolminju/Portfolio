$(function () {

    const item = $(".processBox .item li");
    const itemBox = $(".processBox .item");
    const accordion = $(".inqAccordion li .inqTitle");

    let scrollH = $(window).scrollTop();
    let winH = $(window).innerHeight();


    $(".btnArea button").on("click", function () {
        $(this).toggleClass("border");
    });

    function scrollAni() {

        if (scrollH + winH > itemBox.offset().top) {
            itemBox.addClass("on");
        } else {
            itemBox.removeClass("on");
        }

        for (let i = 0; i < item.length; i++) {
            if (scrollH + winH/1.5 > item.offset().top) {
                item.eq(i).addClass("on");
            } else {
                item.eq(i).removeClass("on");
            }
        }
    }

    scrollAni();

    $(window).on("scroll", function () {
        scrollH = $(this).scrollTop();

        scrollAni();
    });

    accordion.on("click", function () {
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find(".inqDesc").slideUp();

        $(this).toggleClass("active");
        $(this).parent().siblings().find(".inqTitle").removeClass("active");
    });


});