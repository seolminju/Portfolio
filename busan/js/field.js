$(function () {

    const box = $(".sec2 .boxList .box");
    const button = $(".sec3 .list button");

    let winH = $(window).innerHeight();
    // let totalH = $("body").innerHeight();
    let scrollH = $(window).scrollTop();

    $(".sec3 .list1 button").addClass("click");
    $(".sec3 .list1 .listBox").addClass("active");

    function buttonList() {
        for (let i = 0; i < button.length; i++) {
            button.eq(i).on("click", function () {
                button.eq(i).addClass("click");
                button.eq(i).siblings(".listBox").addClass("active");
                button.eq(i).parent().siblings().children("button").removeClass("click");
                button.eq(i).parent().siblings().children("button").siblings().removeClass("active");
            });
        }
    }
    function scrollAnimation() {
        for (let i = 0; i < box.length; i++) {
            if (scrollH + winH > box.eq(i).offset().top) {
                box.eq(i).addClass("on");
            } else {
                box.eq(i).removeClass("on");
            }
        }
    }
    scrollAnimation();

    $(window).on("scroll", function () {
        scrollH = $(this).scrollTop();

        scrollAnimation();
    });


    buttonList();

});