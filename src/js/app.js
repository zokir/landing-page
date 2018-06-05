//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/owl.carousel2/dist/owl.carousel.min.js
//= ../../node_modules/izimodal/js/iziModal.min.js


$(function(){
    var win = $(window);
    var mainContainer = $('body');

	init();

    function init() {
        initCarousel();

        $("#modal, #privacy, #ownership, #monetization, #team-1, #team-2").iziModal();
    }

    function initCarousel() {
        $(".partners-carousel").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 70,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    dots: true
                },
                767: {
                    items: 3,
                    loop: false
                },
                980: {
                    items: 5,
                    loop: false
                }
            }
        });

        $(".posts-carousel").owlCarousel({
            center: true,
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                767: {
                    items: 3
                },
                980: {
                    items: 4
                }
            }
        });
    }

    $('.link-menu').on('click', function(e) {

        var scroll_el = $(this).attr('href');
        $('.link-menu').removeClass('active');
        $(this).addClass('active');

        if ($(scroll_el).length != 0 && (win.width() > 768)) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); 
            $(this).addClass('active');
        }

        mainContainer.removeClass('open-menu');
    });

});