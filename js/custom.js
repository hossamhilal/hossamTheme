/*global $ */
(function($) {
    "use strict";

    // OPEN SIDE  MENU 
    $('.mainMenuBtn').on('click', function(){
        $('.mainMenu').toggleClass('opend');
        $('.navOverlay').addClass('opend');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('opend');
        $('.mainMenu').removeClass('opend');  
        $('body').removeClass('stopScroll');  
    });

    // SEARCH MODAL
    $('.searchBtn').on('click', function(){
        $('.searchModal').addClass('opend');
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200);    
    });

    $('.closeSearch').on('click', function(){
        $('.searchModal').removeClass('opend');
        $('body').removeClass('stopScroll');  
    });

    
    // TESTIMONIAL OWL 
    $('.testimonialOwl').owlCarousel({
        // rtl:true ,
        items:30,
        margin: 30,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        center : true ,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });


    // SUPPONSERS OWL 
    $('.supponsersOwl').owlCarousel({
        // rtl: true,
        items:30,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // TEAM OWL 
    $('.teamOwl').owlCarousel({
        // rtl: true,
        items:30,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    //RELATED POSTS OWL 
    $('.relatedOwl').owlCarousel({
        // rtl: true,
        items:30,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    //RELATED POSTS OWL 
    $('.workOwl').owlCarousel({
        // rtl: true,
        items:30,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots:true,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2 ,
                dotsEach:2
            },
            1000: {
                items: 4,
                dotsEach: 1
            }
        }
    });

    $('.product-owl').owlCarousel({
        items:1,
        nav:true,
        rtl:true,
        margin:0,
        dots: true,
        smartSpeed: 2500,
        autoplay: true ,
        loop: true,
        navText: ["<i class='icofont-block-right'></i>", "<i class='icofont-block-left'></i>"],

    });


    // INPUT FOCUS ANIMATION 
    $('.inputField input').focus(function(){
        $(this).parent('.inputField').addClass('focused');
    });

    $('.inputField input').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.inputField').addClass('focused');   
        }
    });

    $('.inputField input').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.inputField').removeClass('focused');
    });

    $('.inputField textarea').focus(function(){
        $(this).parent('.inputField').addClass('focused');
    });

    $('.inputField textarea').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.inputField').addClass('focused');   
        }
    });

    $('.inputField textarea').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.inputField').removeClass('focused');
    });

    // SOCIAL HEIGHT EQUAL TO WIDTH 
    $('.socialFollow .followBox li').each(function() {
        $(this).height($(this).width());
    });

    // SHOW ALL CATEGORIES 
    $('.catPageAllCats .showAllCats').on('click', function(){
        $('.catPageAllCats .allCatsContent').toggleClass('show');
        $('.catPageAllCats .catsOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // HIDE ALL CATEGORIES 
    $('.catPageAllCats .catsOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.catPageAllCats .allCatsContent').toggleClass('show'); 
        $('body').removeClass('stopScroll');  
    });
    

    // MACY GALLERY
    var macy = Macy({
        container: '.galleryPage',
        trueOrder: false,
        waitForImages: false,
        margin: 5,
        columns: 4,
        breakAt: {
            1200: 4,
            940: 3,
            520: 2,
            400: 1
        }
    });

    // SIDE BAR CALENDER 
    $('.calenderBox').datepicker();

    $('.ui-state-default').each(function() {
        $(this).height($(this).width());
    });

    // SIDE GALLERY IMAGE HEIGHT EQUAL TO WIDTH 
    $('.gallerImage').each(function() {
        $(this).height($(this).width());
    });
    

    // STOP DEFULT FOR MIXITUP FILTER ANCHOR  
    $('.portfolioFilterList a').click(function(e){
        e.preventDefault();
    });

    // MIX IT UP FILTER 
    var mixer = mixitup('.portfolioFilterContent', {
        selectors: {
            target: '.col-12'
        },
        animation: {
            duration: 400
        }
    });

   
})(jQuery);

