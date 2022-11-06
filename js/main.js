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
	$(".footer").load("footer.html");
	$(".feature").load("feature.html");

	/*------------------
		Language
	--------------------*/
	
	//Init
	$("#mainTextFC").hide();
	$("#mainTextSC").hide();
	$("#introTextFC").hide();
	$("#introTextSC").hide();
	

	if(getCookie("lan") == "fc"){
		$("#chooseHeader").append("<div class=" + '"headerpageFC"' + "></div>");
		$("#mainTextFC").show();
		$("#introTextFC").show();
		// $("#featureTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#chooseHeader").append("<div class=" + '"headerpageSC"' + "></div>");
		$("#mainTextSC").show();
		$("#introTextSC").show();
		// $("#featureTextSC").show();
		
	}else if(getCookie("lan") == "jp"){
		$("#chooseHeader").append("<div class=" + '"headerpageJP"' + "></div>");

	}else{
		$("#chooseHeader").append("<div class=" + '"headerpageFC"' + "></div>");
		$("#mainTextFC").show();
		$("#introTextFC").show();
		// $("#featureTextFC").show();
	}
	
	$(".headerpageFC").load("headerFC.html");
	$(".headerpageSC").load("headerSC.html");
	$(".headerpageJP").load("headerJP.html");


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
		navText: ['', '<img src="img/icons/solid-right-arrow.png">'],
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

	$('#stickySidebar').stickySidebar({
	    topSpacing: 60,
	    bottomSpacing: 60
	});

	
	/*------------------
		Language Section
	--------------------*/
	$("#featureTextFC").hide();
	$("#featureTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#featureTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#featureTextSC").show();
		
	}else if(getCookie("lan") == "jp"){

	}else{
		$("#featureTextFC").show();
	}




})(jQuery);