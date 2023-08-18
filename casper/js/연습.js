$(function () {

    const $noticeModal = $(".layerPop .noticeModal");
    const $guideModal = $(".layerPop .guideModal");


    const saveChecked = JSON.parse(localStorage.getItem("checked"));
    if (saveChecked) { // 클릭이 되어있는 경우
        $("body").removeClass("popupOn");
        $noticeModal.hide();
    } else { // 클릭이 안되어있는 경우
        $("body").addClass("popupOn");
        $noticeModal.show();
    }


    const $video = $guideModal.find("video").get(0);

    const $noticeChk = $noticeModal.find("#chk");

    let isChecked = false;

// 메인 팝업 체크 이벤트 발생시 로컬스토리지에 true/false 전달 기능
//     $noticeChk.on("change", function() {
//
//         // $(this).prop("checked") <- 체크되어있으면 true 아니면 false
//         if ( $(this).prop("checked") ) { // 체크가 참
//             isChecked = true;
//         } else {  // 체크가 거짓
//             isChecked = false;
//         }
//
//         localStorage.setItem("checked", isChecked);
//     });

    $noticeChk.on("change", function() {
        isChecked = $(this).prop("checked");
        localStorage.setItem("checked", isChecked);
    });

    $noticeModal.find(".close").on("click", function() {
        $("body").removeClass("popupOn");
        $(".layerPop").hide();
    });

    $(".guide").find(".guideImg").on("click", function () {
        $("body").addClass("popupOn");
        $guideModal.show();

        $video.play();
        $video.muted = false;
    });

    $guideModal.find(".close").on("click", function () {
        $("body").removeClass("popupOn");
       $guideModal.hide();

       $video.pause();
       $video.currentTime = 0;
    });

    $guideModal.find(".sound").on("click", function () {
       if ($video.muted === true) {
           $video.muted = false;
           $(this).find("img").attr("src","video_icon/popup_icon_sound-on.png");
       } else {
           $video.muted = true;
           $(this).find("img").attr("src","video_icon/popup_icon_mute.png");
       }
    });

    $guideModal.find(".refresh").on("click", function () {
        $video.currentTime = 0;
        $video.play();
    });

    $guideModal.find(".play").on("click", function () {
        if ($video.paused) {
            $video.play();
            $(this).find("img").attr("src","video_icon/popup_icon_pause.png")
        } else {
            $video.pause();
            $(this).find("img").attr("src","video_icon/popup_icon_play.png")
        }
    });

    $guideModal.find(".fullscreen").on("click", function () {
        $video.requestFullscreen();
    });



    $noticeModal.find(".slider").slick({
        arrows: true,
        prevArrow: $noticeModal.find(".prevArrow"),
        nextArrow: $noticeModal.find(".nextArrow"),

        dots: true,
        appendDots: $noticeModal.find(".dots"),
        dotsClass: "customDots"
    });


    $(".best #slider").slick({
        centerMode: true,
        // variableWidth: true,
        centerPadding: "450px",
        arrows: true,
        prevArrow: $(".best").find(".prevArrow"),
        nextArrow: $(".best").find(".nextArrow"),

        dots: true,
        appendDots: $(".best").find(".dotsArea"),
        dotsClass: "customDots",

        responsive: [
            {
                breakpoint: 768,
            },
            {
                breakpoint: 490,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(".event #eventSlider").slick({
       dots: true,
       appendDots: $(".event").find(".dotsArea"),
       dotsClass: "customDots",

       arrows: true,
       prevArrow: $(".event").find(".prevArrow"),
       nextArrow: $(".event").find(".nextArrow"),
    });

    function showFloatingMenu() {
        const floatingTop = $(".floatingTop");
        const floatingBtm = $(".floatingBtm");

        const $header = $(".header");

        let scrollTop;

        $(window).on("scroll", function () {
            scrollTop = $(this).scrollTop();

            $(".pos").text( scrollTop );


            if (scrollTop > 200) {
                $header.addClass("on");
            } else {
                $header.removeClass("on")
            }


            // if (scrollTop > 1000) {
            //     floatingTop.addClass("on");
            //     floatingBtm.addClass("on");
            // } else {
            //     floatingTop.removeClass("on");
            //     floatingBtm.removeClass("on");
            // }

        });
    }

    showFloatingMenu();

    // const $video = $(".guideVideoArea video").get(0);
    //
    // $(".guide .guideImg").on("click", function () {
    //     $(".guide .guidePopup").show();
    //     $("body").addClass("videoOn");
    //     $video.play();
    // });
    //
    // $(".guideBtnWrap .sound").on("click", function () {
    //     $(this).find("img").eq(0).toggle();
    //
    //     if ($video.muted === false) {
    //         $video.muted = true;
    //     } else {
    //         $video.muted = false;
    //     }
    // });
    //
    // $(".guideBtnWrap .refresh").on("click", function () {
    //    $video.currentTime = 0;
    //    $video.play();
    // });
    //
    // $(".guideBtnWrap .center .play").on("click", function () {
    //
    // });
    //
    // $(".guideBtnWrap .fullscreen").on("click", function () {
    //    $video.requestFullscreen();
    // });
    //
    // $(".guideVideoArea .close").on("click", function () {
    //     $(".guidePopup").hide();
    //     $("body").removeClass("videoOn");
    // });




});