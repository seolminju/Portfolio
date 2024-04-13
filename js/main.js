$(function () {

    const bodyArea = $("body");
    const popup = $(".popupArea");
    const sns = $("#sec6 .sns .imgBox ul li button");
    const snsBox = $(".popupArea .snsImgBox");
    const img = $(".popupArea .snsImgBox img.snsBox");
    const styleBtn1 = $("#sec4 .txtBox .styleBtn button");
    const styleBtn2 = $("#sec5 .txtBox .styleBtn button");
    const styleGuide = $(".popupArea .styleGuideBox");
    const style = $(".popupArea .styleGuideBox img.styleGuide");

    const correctionBtn = $("#sec7 .correction .boxArea li button");
    const correctionBox = $(".popupArea .correctionBox");
    const correction = $(".popupArea .correctionBox img.correctionImg");


    // let scrollH = $(window).scrollTop();
    // let winH = $(window).innerHeight();


    function snsPopup() {
        for (let i = 0; i < sns.length; i++) {
            for (let i = 0; i < img.length; i++) {
                sns.eq(i).on("click", function () {
                    bodyArea.addClass("popupOn");
                    popup.show();
                    img.eq(i).show();
                    img.eq(i).siblings("img").hide();
                    snsBox.show();
                    styleGuide.hide();
                    correctionBox.hide();
                });
            }
        }
    }

    function stylePopup() {
        styleBtn1.on("click", function () {
            bodyArea.addClass("popupOn");
            popup.show();
            style.eq(0).show();
            style.eq(0).siblings("img").hide();
            styleGuide.show();
            snsBox.hide();
                    correctionBox.hide();
        });
        styleBtn2.on("click", function () {
            bodyArea.addClass("popupOn");
            popup.show();
            style.eq(1).show();
            style.eq(1).siblings("img").hide();
            styleGuide.show();
            snsBox.hide();
                    correctionBox.hide();
        });
    }


    function correctionPopup() {
        for (let i = 0; i < correctionBtn.length; i++) {
            for (let i = 0; i < correction.length; i++) {
                correctionBtn.eq(i).on("click", function () {
                    bodyArea.addClass("popupOn");
                    popup.show();
                    correction.eq(i).show();
                    correction.eq(i).siblings("img").hide();
                    correctionBox.show();
                    styleGuide.hide();
                    snsBox.hide();
                })
                $("#sec7 .correction .box7 button").on("click", function () {
                    bodyArea.addClass("popupOn");
                    popup.show();
                    correction.eq(6).show();
                    correction.eq(6).siblings("img").hide();
                    correctionBox.show();
                    styleGuide.hide();
                    snsBox.hide();
                })
            }
        }
    }

    snsPopup();
    stylePopup();
    correctionPopup();


    popup.find(".close").on("click", function () {
        bodyArea.removeClass("popupOn");
        popup.hide();
    });


    const menuIcon = $("header .menu button.menuIcon");
    const menuClose = $("header .menu button.menuClose");
    const menuList = $("header .menu ul");

    menuIcon.on("click", function () {
        menuIcon.hide();
        menuList.show();
        menuClose.show();
    })
    menuClose.on("click", function () {
        menuIcon.show();
        menuList.hide();
        menuClose.hide();
    })



    window.onload = function () {
        const elm = document.querySelectorAll("section");
        const elmCount = elm.length;
        elm.forEach(function (item, index) {
            item.addEventListener("mousewheel", function (event) {
                event.preventDefault();
                let delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail) delta = -event.detail / 3;

                let moveTop = window.scrollY;
                let elmSelector = elm[index];

                // wheel down : move to next section
                if (delta < 0) {
                    if (elmSelector !== elmCount - 1) {
                        try {
                            moveTop =
                                window.pageYOffset +
                                elmSelector.nextElementSibling.getBoundingClientRect().top;
                        } catch (e) {}
                    }
                }

                // wheel up : move to previous section
                else {
                    if (elmSelector !== 0 && elmSelector.id !== "home") {
                        try {
                            moveTop =
                                window.pageYOffset +
                                elmSelector.previousElementSibling.getBoundingClientRect().top;
                        } catch (e) {}
                    }
                }

                const body = document.querySelector("html");
                window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
            });
        });
    };

});