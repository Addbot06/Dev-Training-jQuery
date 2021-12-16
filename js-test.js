$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
    $("#hide-text").click(function() {
        $("#text").hide();
    });
    $("#show-text").click(function() {
        $("#text").show();
    });
    $("#toggle-text").click(function() {
       $("#text").toggle(); 
    });
    $(".fade-in").click(function () {
        $("#box").fadeIn();
    });
    $(".fade-out").click(function () {
        $("#box").fadeOut();
    });
    $(".fade-toggle").click(function() {
        $("#box").fadeToggle();
    });
    $(".fade-to").click(function () {
        $("#box").fadeTo("slow", 0.5);
    });
    $(".fade-back").click(function () {
        $("#box").fadeTo("slow", 1);
    });
    $(".flip").click(function 
    () {
        $(".panel").slideDown();
    });
    $(".panel").click(function 
        () {
            $(".panel").slideUp();
        });
    $(".slide-toggle").click(function() {
        $(".panel").slideToggle();
    });
    $(".btn-animate").click(function() {
        $(".box-animate").animate({
            left:"250px",
            opacity: "0.5",
            height: "150px",
            width: "150px",
        });
    })
    $(".btn-remove-animate").click(function 
        () {
        $(".box-animate").animate({
            left: "0",
            opacity: "1",
            height: "50px",
            width: "50px",
        });
    })
    $(".btn-toggle").click(function() {
        $(".box-toggle-animate").animate({
            height: "toggle"
        })
    })
    $(".btn-queue").click(function () {
        $(".box-queue").animate({
            height: "100px"
        }, "slow")
        $(".box-queue").animate({
            top: "100px",
            height: "50px",
            width: "100px"
        }, "slow")
        $(".box-queue").animate({
            top: "0",
            left: "50px",
            height: "100px",
            width: "50px"
        }, "slow")
        $(".box-queue").animate({
            top: "0",
            left: "0",
            height: "50px",
            width: "50px"
        }, "slow")
    })
    $(".btn-start").click(function () {
        $(".box-stop").animate({
            height: "500px"
        }
            ,5000);
    })
    $(".btn-stop").click(function () {
        $(".box-stop").stop();
    })
    $(".btn-callback").click(function () {
        $(".text-callback").toggle(function () {
            alert("Text has been toggled on/off")
        })
    })
    $('.btn-chain').click(function () {
        $(".text-chain")
        .css("color", "blue")
        .slideUp(2000)
        .slideDown(2000)
        .css("color", "red")
    })
});