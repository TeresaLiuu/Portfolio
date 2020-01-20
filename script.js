//smooth scroll

$("#project").click(function () {
    $('html, body').animate({
        scrollTop: $("#project2").offset().top
    }, 1000);
});

$("#contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact2").offset().top
    }, 1000);
});
