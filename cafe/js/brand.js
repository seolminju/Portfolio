$(function () {

    const infoBox = $(".infoTextBox .item");
    const contents = $(".contents ul li");
    const videoBox = $(".brand .videoBox");
    const video = videoBox.find("video").get(0);

    let scrollH = $(window).scrollTop();
    let winH = $(window).innerHeight();

    videoBox.find("button").on("click", function () {
        if (video.paused) { // 정지된 상태
            video.play();
            $(this).find("img").attr("src", "images/ico-video-stop.png");
        } else {
            video.pause();
            $(this).find("img").attr("src", "images/ico-video-play.png");
        }
    });


    function scrollAni() {
        for (let i = 0; i < infoBox.length; i++) {
            if (scrollH + winH > infoBox.eq(i).offset().top) {
                infoBox.eq(i).addClass("ani");
            } else {
                infoBox.eq(i).removeClass("ani");
            }
        }

        for (let i = 0; i < contents.length; i++) {
            if (scrollH + winH/1.5 > contents.eq(i).offset().top) {
                contents.eq(i).addClass("on");
            } else {
                contents.eq(i).removeClass("on");
            }
        }
    }

    scrollAni();


    $(window).on("scroll", function () {
        scrollH = $(this).scrollTop();

        scrollAni();
    });

});