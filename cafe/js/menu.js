$(function () {

    const menuItem = $(".menuArea .menuWrap li");
    const subCate = $(".menuArea .subCate a");
    const bestItem = $(".menuArea .menuWrap li.best");
    const newItem = $(".menuArea .menuWrap li.new");
    const iceItem = $(".menuArea .menuWrap li.ice");
    const hotItem = $(".menuArea .menuWrap li.hot");

    let scrollH = $(window).scrollTop();
    let winH = $(window).innerHeight();

    $(".menuArea button").on("click", function () {
       $(".menuArea .menuWrap").css("height", "100%");
       $(this).hide();
    });

    $(".recommend").find(".rightContents div").on("click", function () {
        const imageSrc = $(this).find("img").attr("src");
        $(".recommend").find(".image img").attr("src", imageSrc);
    })



    $(window).on("scroll", function () {
        scrollH = $(this).scrollTop();

        scrollAni();
    });

    for (let i = 0; i < subCate.length; i++) {
        subCate.eq(i).on("click", function () {
            $(".menuArea .menuWrap").css("height", "100%");
            $(".menuArea .moreBtn").css("display", "none");
        });
        subCate.eq(i+1).on("click", function () {
            menuItem.css("display", "none");
        });
    }


    subCate.eq(0).on("click", function () {
        menuItem.css("display", "block");
        $(".menuArea .menuWrap").css("height", "1470px");
        $(".menuArea .moreBtn").css("display", "block");
    });
    subCate.eq(1).on("click", function () {
        bestItem.css("display", "block");
    });

    subCate.eq(2).on("click", function () {
        newItem.css("display", "block");
    });

    subCate.eq(3).on("click", function () {
        iceItem.css("display", "block");
    });

    subCate.eq(4).on("click", function () {
        hotItem.css("display", "block");
    });

    function scrollAni() {
        for (let i = 0; i < menuItem.length; i++) {
            if (scrollH + winH > menuItem.eq(i).offset().top) {
                menuItem.eq(i).addClass("on");
            } else {
                menuItem.eq(i).removeClass("on");
            }
        }
    }
    scrollAni();

});