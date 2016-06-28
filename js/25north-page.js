/**************************************************************
* 25North Other pages Javascript 
**************************************************************/

(function($) {
    "use strict";

	/* Scroll to top */
	$(document).on('click', '.totop', function() {
    	$('html, body').animate({scrollTop: 0}, 600, 'swing');
    	return false;
	});

	/* Enable link hover with full menu */
	function hoverNavLinks() {
    	var winWidth = $(window).width();
    	if (winWidth >= 992) {
        	/* Hover navbar dropdowns */
        	$('.navbar [data-toggle="dropdown"]').bootstrapDropdownHover({
            	// see next for specifications
        	});

        	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
        	$('.dropdown').on('show.bs.dropdown', function(e){
            	$(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
        	});

        	// ADD SLIDEUP ANIMATION TO DROPDOWN //
        	$('.dropdown').on('hide.bs.dropdown', function(e){
            	$(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
        	});
    	}
	}

	/* Parallax banner */
	function scrollBanner() {
  		$(document).scroll(function(){
  			var scrollPos = $(this).scrollTop();
			var scrollingElem = $('.blog-header-inner', '#top-section');
			scrollingElem.css({
        		'top' : (scrollPos/3)+'px',
        		'opacity' : 1-(scrollPos/230)
    		});
			var winWidth = $(window).width();
    		if (winWidth >= 769) {
				scrollingElem.css({ 
      				'background-position' : 'center ' + (-scrollPos/2)+'px'
    			});
			}
  		});    
	}
	scrollBanner();

	$(document).ready(function() {

		/* Call NavLink hover function */
		hoverNavLinks();

		/* Agents Owl Carousel */
    	$('#owl-carousel-agents').owlCarousel ({
			responsive: {
				0: {
					items: 1,
					nav:false
				},
				500: {
					items: 2,
					nav:false
				},
				991:{
					items: 3,
					nav: true
				},
				1200:{
					items: 4,
					nav: true
				}
			},	
        	margin: 30,
        	loop: true,
        	smartSpeed: 450,
			nav: true,
			navText: ['<i class="icon-chevron-left"></i><i class="icon-chevron-left"></i>'
				,'<i class="icon-chevron-right"></i><i class="icon-chevron-right"></i>']
    	});
		/* Testimonial Carousel */
		$('#owl-carousel-testimonials').owlCarousel ({
			items: 1,
			smartSpeed: 450,
			nav: false,
			dots: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000
		});
	});

})(jQuery);
