(function($){
    $(document).ready(function () {

        // Add hover event handlers
        $('.dropdown').hover(
            function () {
                // On hover in
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
            },
            function () {
                // On hover out
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
            }
        );

        // fade down scroll
        var $navbar = $('header.fixed-top');
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop >= 50) {
            $navbar.addClass('bg_nav_white');
        }
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= 50) {
                $navbar.addClass('bg_nav_white');
            } else {
                $navbar.removeClass('bg_nav_white');
            }
        });

        // jumbotron carousel
        $('#carous').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            center:true,
            dots:false,
            autoplayTimeout: 10000,
            autoplay:true,
            fluidSpeed: true,
            autoplaySpeed: 6000,
            smartSpeed:3000,
            navText : ['<i class="bi bi-arrow-up fs-5"></i>','<i class="bi bi-arrow-down fs-5"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        // featured products
        $('#featured_prod_slide.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            center:true,
            dots:false,
            autoplayTimeout: 10000,
            autoplay:true,
            fluidSpeed: true,
            autoplaySpeed: 6000,
            navText : false,
            fluidSpeed:true,
            responsive:{
                0:{
                    items:1,
                    margin: 30
                },
                600:{
                    items:2
                },
                768:{
                    items:2,
                    center:false,
                },
                1200:{
                    items:3
                }
            }
        })

        var owl = $('#featured_prod_slide.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('#nextBtn').click(function() {
            owl.trigger('next.owl.carousel',[1500]);
        })
        // Go to the previous item
        $('#prevBtn').click(function() {
            // With optional speed parameter,
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [1500]);
        })

        // featured products
        $('#featured.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            center:true,
            dots:false,
            autoplayTimeout: 10000,
            autoplay:true,
            fluidSpeed: true,
            autoplaySpeed: 6000,
            navText : ['<i class="bi bi-arrow-left fs-5"></i>','<i class="bi bi-arrow-right fs-5"></i>'],
            responsive:{
                0:{
                    items:1,
                    margin: 30
                },
                600:{
                    items:2
                },
                768:{
                    items:2,
                    center:false,
                },
                1000:{
                    items:3
                }
            }
        })
    })
})(jQuery);