//smooth scroll

$("#project").click(function () {
    $('html, body').animate({
        scrollTop: $("#project2").offset().top
    }, 1000);
});

$("#contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#contactme").offset().top
    }, 1000);
});
