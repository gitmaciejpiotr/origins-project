// SMOOTH SCROLL
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

// SCROLL TO TOP BUTTON
$(window).scroll(function () {
    if ($(this).scrollTop() >= 800) {    // If page is scrolled more than 50px
        $('.scroll-to-top').addClass('visible');       // Fade in the arrow
    } else {
        $('.scroll-to-top').removeClass('visible');      // Else fade out the arrow
    }
});
