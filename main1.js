$(document).ready(function () {
    $(".facebook.icon").click(function (e) { 
        $(".in4").addClass("in4click");
        $(".content").addClass("contentclick");
        $(".frinsta").removeClass("frinstaclick");
        $(".tiktok2").removeClass("tiktok2click");
        $(".google").removeClass("googleclick");
        
    });

    $(".insta.icon").click(function (e) { 
        $(".in4").addClass("in4click");
        $(".content").removeClass("contentclick");
        $(".frinsta").addClass("frinstaclick");
        $(".tiktok2").removeClass("tiktok2click");
        $(".google").removeClass("googleclick");
    });

    $(".gg.icon").click(function (e) { 
        $(".in4").removeClass("in4click");
        $(".content").removeClass("contentclick");
        $(".frinsta").removeClass("frinstaclick");
        $(".tiktok2").removeClass("tiktok2click");
        $(".google").addClass("googleclick");
        
    });

    $(".tiktok.icon").click(function (e) { 
        $(".in4").removeClass("in4click");
        $(".content").removeClass("contentclick");
        $(".frinsta").removeClass("frinstaclick");
        $(".tiktok2").addClass("tiktok2click");
        $(".google").removeClass("googleclick");
        
    });







});