$(document).ready(function() {
    "use strict";

    /* ----------------------------------------------------------------------
        Flickr
    ---------------------------------------------------------------------- */

    $(".flickr-cbox").jflickrfeed({
        limit: 8,
        qstrings: {
            id: "52617155@N08"
        },
        itemTemplate: '<li>' + '<a href="{{image}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
    }, function(data) {

        $(".flickr-cbox a").nivoLightbox({
            effect: "fadeScale"
        });

    });

    /* ----------------------------------------------------------------------
        Typed String
    ---------------------------------------------------------------------- */

    $(".typed").typed({
        strings: ["Responsive", "Multipurpose", "Clean", "Modern"],
        typeSpeed: 100,
        backDelay: 500,
        loop: true
    });

    $(".typed2").typed({
        strings: ["First sentence", "Second sentence", "Third sentence"],
        typeSpeed: 100,
        backDelay: 500,
        loop: true
    });

    $(".typed3").typed({
        strings: ["First sentence", "Second sentence", "Third sentence", "Fourth sentence"],
        typeSpeed: 100,
        backDelay: 500,
        loop: true
    });

    $(".typed4").typed({
        strings: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        typeSpeed: 100,
        backDelay: 500,
        loop: true
    });

    /* ----------------------------------------------------------------------
        Sticky
    ---------------------------------------------------------------------- */

    var header = $("#header");
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            header.sticky({ topSpacing: 0, zIndex: 300 });
            header.addClass("sticky-header sticky-slideInDown");
        } else {
            header.unstick();
            header.removeClass("sticky-header sticky-slideInDown");
        }
    });

    /* ----------------------------------------------------------------------
        Fake Loader
    ---------------------------------------------------------------------- */

    $("#fakeloader").fakeLoader({
        timeToHide: 1200,
        bgColor: "#cc2929",
        spinner: "spinner7",
        zIndex: "9999999"
    });

    /* ----------------------------------------------------------------------
        Bootstrap - submenu
    ---------------------------------------------------------------------- */

    $("[data-submenu]").submenupicker();

    /* ----------------------------------------------------------------------
        Bootstrap - Tooltip/popover
    ---------------------------------------------------------------------- */

    $("[data-toggle=tooltip]").tooltip();
    $("[data-toggle=popover]").popover();

    /* ----------------------------------------------------------------------
        Back to Top
    ---------------------------------------------------------------------- */

    var backtotop = $("#back-to-top");
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });
    backtotop.on("click", "a", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /* ----------------------------------------------------------------------
        Skill Bar
    ---------------------------------------------------------------------- */

    $(".skillbar-percent").each(function() {
        $(this).animate({
            width: $(this).attr("data-percent")
        }, 3000);
    });

    /* ----------------------------------------------------------------------
        Accordion
    ---------------------------------------------------------------------- */

    $(".accordion-content").hide();
    $(".accordion-content.opened").show();
    $(".accordion-container").on("click", "h4", function() {
        $(this).next().slideToggle(300).siblings("div:visible").slideUp(300);
        $(this).toggleClass("active");
        $(this).siblings("h4").removeClass("active");
        return false;
    });

    /* ----------------------------------------------------------------------
        Toggle
    ---------------------------------------------------------------------- */

    $(".toggle-content").hide();
    $(".toggle-content.opened").show();
    $(".toggle-container").on("click", "h4", function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass("active");
        return false;
    });

    /* ----------------------------------------------------------------------
        Easy Tabs
    ---------------------------------------------------------------------- */

    $(".tab-container").easytabs({
        updateHash: false,
        animate: false
    });

    $(".tab-side-container").easytabs({
        updateHash: false,
        animate: false,
        tabActiveClass: "selected-tab",
        panelActiveClass: "displayed"
    });

    /* ----------------------------------------------------------------------
        Nivo Lightbox
    ---------------------------------------------------------------------- */

    $(".nivo-lightbox").nivoLightbox({
        effect: "fadeScale"
    });

    $(".nivo-lightbox-video").nivoLightbox({
        effect: "fade"
    });

    /* ----------------------------------------------------------------------
        ContactForm
    ---------------------------------------------------------------------- */

    // Validation
    var commentform = $(".commentForm");
    var commentform2 = $(".commentForm2");
    var commentform3 = $(".commentForm3");
    var commentform4 = $(".commentForm4");
    commentform.validate();
    commentform2.validate();
    commentform3.validate();
    commentform4.validate();

    // Ajax Form
    var options = {
        target: ".message",
        url: "contact.php",
        resetForm: true
    };
    var options2 = {
        target: ".message2",
        url: "contact2.php",
        resetForm: true
    };
    var options3 = {
        target: ".message3",
        url: "contact3.php",
        resetForm: true
    };
    var options4 = {
        target: ".message4",
        url: "contact4.php",
        resetForm: true
    };
    commentform.ajaxForm(options);
    commentform2.ajaxForm(options2);
    commentform3.ajaxForm(options3);
    commentform4.ajaxForm(options4);

    /* ----------------------------------------------------------------------
        mb-YTPlayer
    ---------------------------------------------------------------------- */

    $(".mbyt-player").mb_YTPlayer();

    /* ----------------------------------------------------------------------
        Simple Placeholder
    ---------------------------------------------------------------------- */

    $("input[placeholder]").simplePlaceholder();
    $("textarea[placeholder]").simplePlaceholder();

    /* ----------------------------------------------------------------------
        Top Panel
    ---------------------------------------------------------------------- */

    $("#toppanel").on("click", ".toppanel-button, .toppanel-button2", function() {
        $(".toppanel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

    /* ----------------------------------------------------------------------
        Bottom Panel
    ---------------------------------------------------------------------- */

    $("#bottompanel").on("click", ".bottompanel-button, .bottompanel-button2", function() {
        $(".bottompanel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

    /* ----------------------------------------------------------------------
        Hover Effect Da Thumbs
    ---------------------------------------------------------------------- */

    $(".da-thumbs").each(function() {
        $(this).hoverdir();
    });

    /* ----------------------------------------------------------------------
        SmoothScroll
    ---------------------------------------------------------------------- */

    smoothScroll.init({
        speed: 1000,
        easing: "easeInOutCubic",
        offset: 0,
        updateURL: false
    });

    /* ----------------------------------------------------------------------
        Chart Waypoint
    ---------------------------------------------------------------------- */

    $(".chart").waypoint(function(direction) {
        $(this.element).easyPieChart({
            easing: "easeOutBounce",
            onStep: function(from, to, percent) {
                $(this.el).find(".percent").text(Math.round(percent));
            }
        });
    }, {
        offset: "90%"
    });

    /* ----------------------------------------------------------------------
        Animated Waypoint
    ---------------------------------------------------------------------- */

    var animated = $(".animated");
    animated.css("opacity", 0);
    animated.waypoint(function(direction) {
        $(this.element).css("opacity", 1);
    }, {
        offset: "90%"
    });

    animated.waypoint(function(direction) {
        $(this.element).addClass($(this.element).data("animation"));
    }, {
        offset: "90%"
    });

    /* ----------------------------------------------------------------------
        Owl Carousel
    ---------------------------------------------------------------------- */

    // slider
    $(".owl-slider").owlCarousel({
        pagination: true,
        navigation: true,
        autoPlay: 10000,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        transitionStyle: "fade",
        addClassActive: true,
        afterMove: previousslide,
        beforeMove: nextslide,
        singleItem: true
    });
    $(".owl-slider .active .owl-fadeInUp").addClass("animated fadeInUp");
    $(".owl-slider .active .owl-fadeInDown").addClass("animated fadeInDown");
    $(".owl-slider .active .owl-fadeInLeft").addClass("animated fadeInLeft");
    $(".owl-slider .active .owl-fadeInRight").addClass("animated fadeInRight");
    $(".owl-slider .active .owl-bounceIn").addClass("animated bounceIn");

    function previousslide() {
        $(".owl-slider .active .owl-fadeInUp").addClass("animated fadeInUp");
        $(".owl-slider .active .owl-fadeInDown").addClass("animated fadeInDown");
        $(".owl-slider .active .owl-fadeInLeft").addClass("animated fadeInLeft");
        $(".owl-slider .active .owl-fadeInRight").addClass("animated fadeInRight");
        $(".owl-slider .active .owl-bounceIn").addClass("animated bounceIn");
    }

    function nextslide() {
        $(".owl-slider .active .owl-fadeInUp").removeClass("animated fadeInUp");
        $(".owl-slider .active .owl-fadeInDown").removeClass("animated fadeInDown");
        $(".owl-slider .active .owl-fadeInLeft").removeClass("animated fadeInLeft");
        $(".owl-slider .active .owl-fadeInRight").removeClass("animated fadeInRight");
        $(".owl-slider .active .owl-bounceIn").removeClass("animated bounceIn");
    }

    // Five images
    $(".owl-image").owlCarousel({
        items: 5,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false
    });

    // Three images
    $(".owl-image3").owlCarousel({
        items: 3,
        autoPlay: true,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false
    });

    // single
    $(".owl-single").owlCarousel({
        pagination: true,
        navigation: false,
        transitionStyle: "backSlide",
        singleItem: true
    });

    // testimonial
    $(".owl-testimonial").owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        navigation: false,
        paginationSpeed: 1000,
        autoHeight: true,
        stopOnHover: true,
        goToFirstSpeed: 2000,
        transitionStyle: "fade"
    });

    // client
    $(".owl-client").owlCarousel({
        items: 7,
        autoPlay: true,
        navigation: false,
        pagination: false
    });

    // shop single
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });
    sync2.owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsMobile: [479, 3],
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        sync2
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if (sync2.data("owlCarousel") !== undefined) {
            center(current)
        }
    }
    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }

    /* ----------------------------------------------------------------------
        Flickity
    ---------------------------------------------------------------------- */

    // Flickity
    $('.flickity').flickity({
        autoPlay: false,
        prevNextButtons: true,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });

    // Flickity Team
    $('.flickity-team').flickity({
        autoPlay: false,
        prevNextButtons: false,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });

    // Flickity Testimonial
    $('.flickity-testimonial').flickity({
        autoPlay: false,
        prevNextButtons: false,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });

    // Flickity Client
    $('.flickity-client').flickity({
        autoPlay: true,
        prevNextButtons: false,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });

    // Flickity Lazy
    $('.flickity-lazyload').flickity({
        lazyLoad: true,
        autoPlay: true,
        prevNextButtons: true,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });

    // Flickity Sync
    $('.flickity-sync').flickity({
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        imagesLoaded: true,
        wrapAround: true
    });
    $('.flickity-nav').flickity({
        asNavFor: '.flickity-sync',
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        imagesLoaded: true,
        wrapAround: true
    });

    // Flickity Sync Vertical
    $('.flickity-vertical-sync').flickity({
        cellAlign: 'left',
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        imagesLoaded: true,
        wrapAround: true
    });
    var $syncVertical = $('.flickity-vertical-sync').flickity();
    var $syncVerticalNav = $('.flickity-vertical-nav');
    var $syncVerticalNavCells = $syncVerticalNav.find('.cell');
    $syncVerticalNav.on('click', '.cell', function(event) {
        var syncVerticalindex = $(event.currentTarget).index();
        $syncVertical.flickity('select', syncVerticalindex);
    });
    var flktySyncVertical = $syncVertical.data('flickity');
    var navCellHeight = $syncVerticalNavCells.height();
    var navHeight = $syncVerticalNav.height();
    $syncVertical.on('select.flickity', function() {
        $syncVerticalNav.find('.is-nav-selected').removeClass('is-nav-selected');
        var $selected = $syncVerticalNavCells.eq(flktySyncVertical.selectedIndex)
            .addClass('is-nav-selected');
        var scrollY = $selected.position().top +
            $syncVerticalNav.scrollTop() - (navHeight + navCellHeight) / 2;
        $syncVerticalNav.animate({
            scrollTop: scrollY
        });
    });

    // Flickity Parallax
    $('.flickity-parallax').flickity({
        percentPosition: false,
        autoPlay: true,
        prevNextButtons: false,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });
    var $flickityParallax = $('.flickity-parallax').flickity();
    var $imgs = $flickityParallax.find('.cell img');
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var flktyParallax = $flickityParallax.data('flickity');
    $flickityParallax.on('scroll.flickity', function() {
        flktyParallax.slides.forEach(function(slide, i) {
            var img = $imgs[i];
            var x = (slide.target + flktyParallax.x) * -1 / 3;
            img.style[transformProp] = 'translateX(' + x + 'px)';
        });
    });

    // Flickity MainSlider
    $('.flickity-static').flickity({
        draggable: false,
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: false,
        wrapAround: false
    });

    $('.flickity-mainslider').flickity({
        autoPlay: 9000,
        prevNextButtons: true,
        pageDots: true,
        imagesLoaded: true,
        wrapAround: true
    });

    $('.is-selected .flickity-fadeIn').addClass('animated fadeIn');
    $('.is-selected .flickity-fadeInUp').addClass('animated fadeInUp');
    $('.is-selected .flickity-fadeInDown').addClass('animated fadeInDown');
    $('.is-selected .flickity-fadeInLeft').addClass('animated fadeInLeft');
    $('.is-selected .flickity-fadeInRight').addClass('animated fadeInRight');
    $('.is-selected .flickity-bounceIn').addClass('animated bounceIn');
    $('.is-selected .flickity-bounceInUp').addClass('animated bounceInUp');
    $('.is-selected .flickity-bounceInDown').addClass('animated bounceInDown');
    $('.is-selected .flickity-bounceInLeft').addClass('animated bounceInLeft');
    $('.is-selected .flickity-bounceInRight').addClass('animated bounceInRight');

    $('.flickity-mainslider').on('scroll.flickity', function() {
        $('.is-selected .flickity-fadeIn').addClass('animated fadeIn');
        $('.is-selected .flickity-fadeInUp').addClass('animated fadeInUp');
        $('.is-selected .flickity-fadeInDown').addClass('animated fadeInDown');
        $('.is-selected .flickity-fadeInLeft').addClass('animated fadeInLeft');
        $('.is-selected .flickity-fadeInRight').addClass('animated fadeInRight');
        $('.is-selected .flickity-bounceIn').addClass('animated bounceIn');
        $('.is-selected .flickity-bounceInUp').addClass('animated bounceInUp');
        $('.is-selected .flickity-bounceInDown').addClass('animated bounceInDown');
        $('.is-selected .flickity-bounceInLeft').addClass('animated bounceInLeft');
        $('.is-selected .flickity-bounceInRight').addClass('animated bounceInRight');
    });

    $('.flickity-mainslider').on('select.flickity', function() {
        $('.flickity-fadeIn').removeClass('animated fadeIn');
        $('.flickity-fadeInUp').removeClass('animated fadeInUp');
        $('.flickity-fadeInDown').removeClass('animated fadeInDown');
        $('.flickity-fadeInLeft').removeClass('animated fadeInLeft');
        $('.flickity-fadeInRight').removeClass('animated fadeInRight');
        $('.flickity-bounceIn').removeClass('animated bounceIn');
        $('.flickity-bounceInUp').removeClass('animated bounceInUp');
        $('.flickity-bounceInDown').removeClass('animated bounceInDown');
        $('.flickity-bounceInLeft').removeClass('animated bounceInLeft');
        $('.flickity-bounceInRight').removeClass('animated bounceInRight');
    });

    /* ----------------------------------------------------------------------
        Infinite Scroll
    ---------------------------------------------------------------------- */

    $(window).on("load", function() {

        // Infinite Scroll
        $('.infinite-scroll').infiniteScroll({
            append: '.article',
            status: '.scroller-status',
            button: '.view-more-button',
            scrollThreshold: false,
            path: '.pagination-next',
            onInit: function() {
                this.on('append', function() {
                    $(".nivo-lightbox").nivoLightbox({
                        effect: "fadeScale"
                    });
                    $(".nivo-lightbox-video").nivoLightbox({
                        effect: "fade"
                    });
                })
            }
        });

        // Blog 3, 4 + Infinite Scroll
        var $bloginfinite = $('.blog-infinite').masonry({
            itemSelector: '.blog-grid-item'
        });
        var msnry1 = $bloginfinite.data('masonry');
        $bloginfinite.infiniteScroll({
            append: '.blog-grid-item',
            outlayer: msnry1,
            status: '.scroller-status',
            button: '.view-more-button',
            scrollThreshold: false,
            path: '.pagination-next',
            onInit: function() {
                this.on('append', function() {
                    $(".nivo-lightbox").nivoLightbox({
                        effect: "fadeScale"
                    });
                    $(".nivo-lightbox-video").nivoLightbox({
                        effect: "fade"
                    });
                })
            }
        });

        // Isotope FitRow + Infinite Scroll
        var $isotopeinfinite = $('.isotope-infinite').isotope({
            itemSelector: '.element-item',
            layoutMode: "fitRows"
        });
        var iso1 = $isotopeinfinite.data('isotope');
        $isotopeinfinite.infiniteScroll({
            append: '.element-item',
            outlayer: iso1,
            status: '.scroller-status',
            button: '.view-more-button',
            scrollThreshold: false,
            path: '.pagination-next',
            onInit: function() {
                this.on('append', function() {
                    $(".nivo-lightbox").nivoLightbox({
                        effect: "fadeScale"
                    });
                    $(".nivo-lightbox-video").nivoLightbox({
                        effect: "fade"
                    });
                })
            }
        });
        $(".filters-infinite").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $isotopeinfinite.isotope({
                filter: filterValue
            });
        });

        // Isotope Maronry Post + Infinite Scroll
        var $masonrypostinfinite = $('.masonrypost-infinite').isotope({
            itemSelector: '.element-item',
            layoutMode: "masonry"
        });
        var iso2 = $masonrypostinfinite.data('isotope');
        $masonrypostinfinite.infiniteScroll({
            append: '.element-item',
            outlayer: iso2,
            status: '.scroller-status',
            button: '.view-more-button',
            scrollThreshold: false,
            path: '.pagination-next',
            onInit: function() {
                this.on('append', function() {
                    $(".nivo-lightbox").nivoLightbox({
                        effect: "fadeScale"
                    });
                    $(".nivo-lightbox-video").nivoLightbox({
                        effect: "fade"
                    });
                })
            }
        });
        $(".filters-masonrypost-infinite").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $masonrypostinfinite.isotope({
                filter: filterValue
            });
        });

        // Isotope Masonry + Infinite Scroll
        var $masonryinfinite = $('.masonry-infinite').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
        var msnry2 = $masonryinfinite.data('masonry');
        $masonryinfinite.infiniteScroll({
            append: '.grid-item',
            outlayer: msnry2,
            status: '.scroller-status',
            hideNav: '.pagination-hide',
            path: '.pagination-next',
            onInit: function() {
                this.on('append', function() {
                    $(".nivo-lightbox").nivoLightbox({
                        effect: "fadeScale"
                    });
                    $(".nivo-lightbox-video").nivoLightbox({
                        effect: "fade"
                    });
                })
            }
        });
        $(".filters-masonry-infinite").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $masonryinfinite.isotope({
                filter: filterValue
            });
        });

        // Isotope Shop + Infinite Scroll
        var $shopinfinite = $('.shop-infinite').isotope({
            itemSelector: '.element-item',
            layoutMode: "fitRows"
        });
        var iso3 = $shopinfinite.data('isotope');
        $shopinfinite.infiniteScroll({
            append: '.element-item',
            outlayer: iso3,
            status: '.scroller-status',
            button: '.view-more-button',
            scrollThreshold: false,
            path: '.pagination-next',
            onInit: function() {
                this.on('append', function() {
                    $(".nivo-lightbox").nivoLightbox({
                        effect: "fadeScale"
                    });
                    $(".nivo-lightbox-video").nivoLightbox({
                        effect: "fade"
                    });
                })
            }
        });
        $(".filters-shop-infinite").on("change", function() {
            var filterValue = this.value;
            $shopinfinite.isotope({
                filter: filterValue
            });
        });

    });

    /* ----------------------------------------------------------------------
        Isotope
    ---------------------------------------------------------------------- */

    $(window).on("load", function() {

        // Isotope FitRows
        var $container = $(".isotope").isotope({
            itemSelector: ".element-item",
            layoutMode: "fitRows"
        });

        $(".filters").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $container.isotope({
                filter: filterValue
            });
        });

        $(".button-group").each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "button", function() {
                $buttonGroup.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });

        // Isotope Fullwidth
        var $container2 = $(".isotope-fullwidth").isotope({
            itemSelector: ".element-item",
            layoutMode: "fitRows"
        });

        $(".filters-fullwidth").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $container2.isotope({
                filter: filterValue
            });
        });

        $(".button-group2").each(function(i, buttonGroup2) {
            var $buttonGroup2 = $(buttonGroup2);
            $buttonGroup2.on("click", "button", function() {
                $buttonGroup2.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });

        // Isotope Masonry Post
        var $container3 = $(".isotope-masonry-post").isotope({
            itemSelector: ".element-item",
            layoutMode: "masonry"
        });

        $(".filters-masonry-post").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $container3.isotope({
                filter: filterValue
            });
        });

        $(".button-group3").each(function(i, buttonGroup3) {
            var $buttonGroup3 = $(buttonGroup3);
            $buttonGroup3.on("click", "button", function() {
                $buttonGroup3.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });

        // Isotope Masonry
        var $container4 = $(".isotope-masonry").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-sizer"
            }
        });

        $(".filters-masonry").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $container4.isotope({
                filter: filterValue
            });
        });

        $(".button-group4").each(function(i, buttonGroup4) {
            var $buttonGroup4 = $(buttonGroup4);
            $buttonGroup4.on("click", "button", function() {
                $buttonGroup4.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });

        // Isotope select menu
        var $container5 = $(".isotope-shop").isotope({
            itemSelector: ".element-item",
            layoutMode: "fitRows"
        });

        $(".filters-shop").on("change", function() {
            var filterValue = this.value;
            $container5.isotope({
                filter: filterValue
            });
        });

    });


});
