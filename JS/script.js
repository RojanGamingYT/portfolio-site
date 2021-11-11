$('.divodd').each(function () {
    var y = $(document).scrollTop();
    var t = $(this).parent().offset().top;
    if (y > t) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
});