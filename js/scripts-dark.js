/*
Author       : themes_master
Template Name: Nick Berg - Personal Portfolio Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
		
		/*START MENU JS*/		
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "+",
			closedSymbol: "-" 	
		});			

			if ($(window).scrollTop() > 200) {
			  $('.fixed-top').addClass('menu-bg');
		  } else {
			  $('.fixed-top').removeClass('menu-bg');
		  }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	
		/*END MENU JS*/	

		/*START SKILL JS*/
		$(function() {
			$(".skill-knob").knob({
				'min':0,
				'max':100,
				'width': 120,
				'height': 120,
				'readOnly': true,
				'lineCap': 'round',
				'displayPrevious': true,
				'angleOffset': 0,
				'bgColor': '#f9f9f9',
				'fgColor': '#2ca46d',
				'thickness': 0.15
			});
					
			/* Skill way point */
			$('.skill-item').waypoint(function(down){
				$('.skill-knob').each(function(){
				var $skill_knob = $(this);
					
					// Check knob value
					if($skill_knob.val() == 0){
						$({value: 0}).animate({value: $skill_knob.attr("data-end")}, {
							duration: 2000,
							easing:'swing',
							step: function() 
							{
								$skill_knob.val(Math.ceil(this.value)).trigger('change');
								$skill_knob.val($skill_knob.val() + '%');
							}
						})
					}
				});
			}, { offset: '90%' });
		});	
		/*END SKILL JS*/	

		$('.portfolio_item').mixItUp({
		
		});			

		/* START SERVICE JS */
		 $("#sp-slider").owlCarousel({
				items:3,
				itemsDesktop:[1199,3],
				itemsDesktopSmall:[979,2],
				itemsTablet:[768,2],
				itemsMobile:[600,1],
				pagination: false,
				navigation:true,
				navigationText:["",""],
				slideSpeed:1000,
				autoPlay:false
			});
		/* END SERVICE JS */

		/*START TESTIMONIAL*/
		$("#testimonial-slider").owlCarousel({
			items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			pagination:true,
			transitionStyle:"backSlide",
			autoPlay:true
		});
		/*END TESTIMONIAL*/				
			
	}); 			
		
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/		
			
})(jQuery);


  

