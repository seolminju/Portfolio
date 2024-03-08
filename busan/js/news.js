$(function () {

    const menu = $(".container .sideMenu .menuList .listTitle");
    const list = $(".container .sideMenu .menuList .mainList li a"); i
    const subBtn = $(".container .sideMenu .menuList .mainList li .subBtn ");
    const page = $(".container .contents .pageListArea ul li a");



    function slideToggle() {
        for (let i = 0; i < menu.length; i++) {
            menu.eq(i).on("click", function () {
                menu.eq(i).toggleClass("on");
                menu.eq(i).parent().siblings().children("button").removeClass("on");
                menu.eq(i).siblings().slideToggle();
                menu.eq(i).parent().siblings().children("ul").slideUp();
                menu.eq(i).toggleClass("btn");
                menu.eq(i).parent().siblings().children("button").removeClass("btn");
            })


        }
        for (let i = 0; i < list.length; i++) {
            list.eq(i).on("click", function () {
                list.eq(i).toggleClass("click");
                list.eq(i).parent().siblings().children("a").removeClass("click");
                list.eq(i).siblings("ul").slideToggle();
                list.eq(i).siblings("button").toggleClass("toggle");
            })

            menu.eq(0).addClass("on");
            menu.eq(0).siblings("ul").slideDown();
            menu.eq(0).addClass("btn");
            list.eq(0).toggleClass("click");
        }



        for (let i = 0; i < subBtn.length; i++) {
            subBtn.eq(i).on("click", function () {
                subBtn.eq(i).siblings("ul").slideToggle();
                subBtn.eq(i).siblings("a").toggleClass("click");
                subBtn.eq(i).toggleClass("toggle");
                subBtn.eq(i).parent().siblings().children("ul").slideUp();
                subBtn.eq(i).parent().siblings().children("a").removeClass("click");
                subBtn.eq(i).parent().siblings().children("button").removeClass("toggle");
            })
        }


    }

    function paging() {
        for (let i = 0; i < page.length; i++) {
            page.eq(i).on("click", function () {
                page.eq(i).addClass("paging");
                page.eq(i).parent("li").siblings().children("a").removeClass("paging");
            })
            page.eq(0).addClass("paging")
        }
    }

    slideToggle();
    paging();
});