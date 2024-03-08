$(function () {
   
    const id = "minju";
    const password = "010907";

    const body = $("body");
    const popup = $(".popupArea");
    const login = $("header .subGnb .login");
    const loginArea = $(".loginArea");
    const userId = $("#userId");
    const userPw = $("#userPw");



    login.on("click", function () {
        body.addClass("popupOn");
        popup.show();
    });

    loginArea.find(".close").on("click", function () {
        body.removeClass("popupOn");
        popup.hide();
    });


    $("#loginForm").on("submit", function (event) {

        event.preventDefault();

        const valueId = userId.val();
        const valuePw = userPw.val();

        if (id === valueId && password === valuePw) {
            alert(`${id}님 방문해주셔서 감사합니다`);
            $("body").removeClass("popupOn");
            popup.hide();
        } else {
            if (id === valueId) {
                alert("비밀번호가 일치하지않습니다");
                $userPw.focus();
            } else {
                alert("아이디를 다시 입력해주세요");
                $userId.focus();
            }
        }

    });
    
});