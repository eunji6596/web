/* main.js */
$(document).ready(function(){
    // 윈도우 시작하면 화면 맨 위로 이동
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    // 브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);
    });

    var start = setTimeout(function(){
        $("#content1 > section").addClass("on");
    },500);

    $(window).scroll(function(){
        var scroll = $(this).scrollTop(); // 현재 scroll
        var ht = $(window).height();

        // content1
        if(scroll >= 0*ht && scroll < 1*ht){
            // 내용물 움직임 시작
            $("#W3C > section").addClass("on");
        }else{
            // 움직임 취소
            $("#W3C > section").removeClass("on");
        }


        // content2
        if(scroll >= 1*ht && scroll < 2*ht){
            // 내용물 움직임 시작
            $("#web > section").addClass("on");
        }else{
            // 움직임 취소
            $("#web > section").removeClass("on");
        }


        // content3
        if(scroll >= 2*ht && scroll < 3*ht){
            // 내용물 움직임 시작
            $("#cross > section").addClass("on");
        }else{
            // 움직임 취소
            $("#cross > section").removeClass("on");
        }


    }); // scroll

});