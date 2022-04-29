// for menu
$('.nav-link').on('click', function () {
    let target = this.hash;
    if (target === '#home') {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    }
    target = '.'+target.replace('#', '');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
})


// for portfolio slider
mixitup('.portfolio-items');

// for scroll to top
$(".scroll-btn").on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
})

// for scroll button show hide
$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if (scroll > 200) {
        $('.scroll-btn').css('opacity','0.8');
    } else {
        $('.scroll-btn').css('opacity','0');
    }
});