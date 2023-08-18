$(function () {



// $("#textInput").focus(function() {
//     console.log("포커스 발생!");
// });


// $("#textInput").on("focus", function() {
//     console.log("포커스 발생!");
// });
//
// $("#textInput").on("blur", function() {
//     console.log("포커스 아웃!");
// });
//
// $("#chk").on("change", function() {
//     // console.log("체인지 이벤트 발생!");
//     if ( $(this).prop("checked") ) {
//
//         $("body").css("background", "red");
//
//     } else {
//
//         $("body").css("background", "blue");
//     }
// });


// const a = localStorage.getItem("id");
// console.log(a);
//
// if (a) {
//     alert(`${a}회원님 안녕하세요!`);
// }
//
// const loginInput = $("#textInput");
//
// $("label span").on("click", function() {
//
//     const userId = loginInput.val();
//
//     localStorage.setItem("id", userId);
//
// });



    const a = {
        fruit : "사과",
        movie : "어벤저스"
    }
    localStorage.setItem("name", a.movie);


    const userId = localStorage.getItem("id");
    console.log(userId);

    const movie = localStorage.getItem("name");
    console.log(movie);





});