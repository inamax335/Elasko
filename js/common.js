$(function() {

    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });

    $('.owl_we_have').owlCarousel({
        items: 3,
        responsive : {
        0 : {
            items: 1,
            autoplay: true,
            loop: true,
        },
        768 : {
            items: 2,
            autoplay: true,
            loop: true,
        },
        992 : {
            items: 2,
            autoplay: true,
            loop: true,
        },

        1200 : {
            items: 3
        }
    }
    });

    var owl = $('.owl-discount');
    owl.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        dots: true,
        responsive : {
        0 : {
            items: 1,
            autoplay: true,
            loop: true,
            nav: false
        },
        768 : {
            items: 2,
            autoplay: true,
            loop: true,
        },
        992 : {
            items: 2,
            autoplay: true,
            loop: true,
        },

        1200 : {
            items: 3
        }
    }
    });

    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    new WOW().init();

    $(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".main-mnu").slideToggle();
      return false;
    });


    var owlPost = $('.post_img_slider');
    owlPost.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
    });

    $('.customPrevBtn').click(function() {
        owlPost.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customNextBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlPost.trigger('prev.owl.carousel', [300]);
    })

    var owlSlider = $('.slider');
    owlSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
    });

    $('.customPrevBtn').click(function() {
        owlSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customNextBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlSlider.trigger('prev.owl.carousel', [300]);
    })

    $('a').click(function(){
        var $this = $(this);
        $('html, body').stop().animate({
            scrollTop: $($this.attr('href')).offset().top
        }, 500);
        return false;
    });

    $(function(f) {
        var element = f('#fixed_nav_dots');
            f(window).scroll(function() {
            element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
        });
    });

});
