$(".arrow").click(function () {
    $('html,body').animate({
            scrollTop: $(".down").offset().top
        },
        'slow');
});