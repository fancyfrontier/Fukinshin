/* =================================
------------------------------------
	EndGam - Gaming Magazine Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';


$(window).on('load', function() {
	
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	/*------------------
		Header,Footer
	--------------------*/
	if(getCookie("lan") == "fc"){
		$("#chooseHeader").append("<div class=" + '"headerpageFC"' + "></div>");

	}else if(getCookie("lan") == "sc"){
		$("#chooseHeader").append("<div class=" + '"headerpageSC"' + "></div>");
		
	}else if(getCookie("lan") == "jp"){
		$("#chooseHeader").append("<div class=" + '"headerpageJP"' + "></div>");

	}else{
		$("#chooseHeader").append("<div class=" + '"headerpageFC"' + "></div>");
	}
	
	$(".headerpageFC").load("../Section/Common/common_headerFC.html");
	$(".headerpageSC").load("../Section/Common/common_headerSC.html");
	$(".headerpageJP").load("../Section/Common/common_headerJP.html");
	$(".footer").load("../Section/Common/common_footer.html");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.primary-menu').slicknav({
		appendTo:'.header-warp',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>'
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		navText: ['', '<img src="../img/icons/solid-right-arrow.png">'],
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,	
		//autoplay: true,
		autoplayTimeout: 10000,
	});

	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index + '.');
		}else{
			$(this).html(index + '.');
		}
	});


	/*------------------
		Video Popup
	--------------------*/
	$('.video-popup').magnificPopup({
  		type: 'iframe'
	});

	// $('#stickySidebar').stickySidebar({
	//     topSpacing: 60,
	//     bottomSpacing: 60
	// });

})(jQuery);