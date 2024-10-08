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
		Header Image
	--------------------*/
	$(".img_logo").attr("src","/img/CommonImg/logo.png");
	$(".img_bar").attr("data-setbg","/img/CommonImg/commonBar.jpg");
	$(".img_team01").attr("src","/img/CommonImg/team01.jpg");
	$(".img_team02").attr("src","/img/CommonImg/team02.jpg");
	$(".img_team03").attr("src","/img/CommonImg/team03.png");

	/*------------------
		Main Image
	--------------------*/
	$(".mainImg").attr("data-setbg","/img/CommonImg/main.gif");
	$(".featureImg").attr("data-setbg","/img/CommonImg/featureImg.jpg");
	$(".doubleArrow").attr("src","/img/CommonImg/doubleArrow.png");
	$(".VideoArrow").attr("src","/img/CommonImg/videoArrow.png");
	$(".videoImg").attr("data-setbg","/img/CommonImg/videoImg.jpg");
	
	/*------------------
		Story List Image
	--------------------*/
	$(".img_story_list01").attr("src","/img/StoryListImg/1.jpg");
	$(".img_story_list02").attr("src","/img/StoryListImg/2.jpg");
	$(".img_story_list03").attr("src","/img/StoryListImg/3.jpg");
	$(".img_story_list04").attr("src","/img/StoryListImg/4.jpg");
	$(".img_story_list05").attr("src","/img/StoryListImg/5.jpg");

	/*------------------
		News Image
	--------------------*/
	$(".img_news01").attr("src","../../img/NewsImg/1.jpg");
	$(".img_news02").attr("src","../../img/NewsImg/2.jpg");
	$(".img_news03").attr("src","../../img/NewsImg/3.jpg");


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
		// navText: ['', '<img src="../img/icons/solid-right-arrow.png">'],
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

	/*------------------
		Language
	--------------------*/
	$('.FcBtn').click(function(){
		clearCookie("lan");
		setCookie("lan", "fc", 3)
		location.reload();
	});
	
	$('.ScBtn').click(function(){
		clearCookie("lan");
		setCookie("lan", "sc", 3)
		location.reload();
	});
	
	$('.JpBtn').click(function(){
		clearCookie("lan");
		setCookie("lan", "jp", 3)
		location.reload();
	});

	/*------------------
		Diary
	--------------------*/
	$('.Diary_TC').click(function(){
		window.location.href = "../../Diary/TC/TcDiary.html";
	});
	$('.Diary_SC').click(function(){
		window.location.href = "../../Diary/SC/ScDiary.html";
	});
	$('.Diary_JC').click(function(){
		window.location.href = "../../Diary/JP/JpDiary.html";
	});

	/*------------------
		Story Set
	--------------------*/
	$('.story_Sunday').click(function(){
		resetCookie()
		setCookie("story", "Sunday", 3)
		window.location.href = "../../Main/story.html";
	});

	$('.story_Tatari').click(function(){
		resetCookie()
		clearCookie("chp_Tatari");
		setCookie("story", "Tatari", 3);
		setCookie("chp_Tatari", "chp", 3);
		window.location.href = "../../Main/story.html";
	});

	$('.story_Tatari_Chp1').click(function(){
		resetCookie()
		clearCookie("chp_Tatari");
		setCookie("story", "Tatari", 3);
		setCookie("chp_Tatari", "chp1", 3);
		window.location.href = "../../Main/story.html";
	});

	$('.story_Tatari_Chp2').click(function(){
		resetCookie()
		clearCookie("chp_Tatari");
		setCookie("story", "Tatari", 3);
		setCookie("chp_Tatari", "chp2", 3);
		window.location.href = "../../Main/story.html";
	});

	$('.story_Star').click(function(){
		resetCookie()
		setCookie("story", "Star", 3);
		window.location.href = "../../Main/story.html";
	});

	/*----------------------
		Main Home Intro Set
	------------------------*/
	$('.move_indexNews_TC').click(function(){
		$("html,body").animate({scrollTop:$(".news_pos_TC").offset().top},200);
	});
	$('.move_indexNews_SC').click(function(){
		$("html,body").animate({scrollTop:$(".news_pos_SC").offset().top},200);
	});

	/*------------------
		Intro Set
	--------------------*/
	$('.intro_Sunday').click(function(){
		resetCookie()
		setCookie("intro", "Sunday", 3);
		window.location.href = "../../Main/storyIntro.html";
	});

	$('.intro_Tatari').click(function(){
		resetCookie()
		clearCookie("chp_Tatari");
		setCookie("intro", "Tatari", 3);
		setCookie("chp_Tatari", "all", 3)
		window.location.href = "../../Main/storyIntro.html";
	});

	$('.intro_Star').click(function(){
		resetCookie()
		setCookie("intro", "Star", 3);
		window.location.href = "../../Main/storyIntro.html";
	});

	/*------------------
		News Set
	--------------------*/
	$('.news_1').click(function(){
		resetCookie()
		setCookie("news", "1", 3);
		window.location.href = "../../Main/news.html";
	});
	$('.news_2').click(function(){
		resetCookie()
		setCookie("news", "2", 3);
		window.location.href = "../../Main/news.html";
	});
	$('.news_3').click(function(){
		resetCookie()
		setCookie("news", "3", 3);
		window.location.href = "../../Main/news.html";
	});

	/*------------------
		OutSite Set
	--------------------*/
	$('.facebook').click(function(){
		window.open("https://www.facebook.com/profile.php?id=100063828969552")
	});
	$('.twitter').click(function(){
		window.open("https://twitter.com/tappu0901")
	});

	/*------------------
		Back Set
	--------------------*/
	$('.img_logo').click(function(){
		window.location.href = "../../Main/index.html";
	});
	$('.toStoryIntroList').click(function(){
		window.location.href = "../../Main/storyIntroList.html";
	});
	$('.toStoryList').click(function(){
		window.location.href = "../../Main/storyList.html";
	});

	/*------------------
		Download, Other Set
	--------------------*/
	$('.download_Star').click(function(){
		window.open("https://drive.google.com/file/d/1yP8su7v7wU8Oy5JCD-fNzzSIa24r_QfG/view")
	});
	$('.download_Sunday').click(function(){
		window.open("https://drive.google.com/file/d/1XpX6dK7WC_YVQFm5QR6zU39IuVHREaBF/view")
	});
	$('.download_Tatari').click(function(){
		window.open("https://drive.google.com/file/d/1YemdcoUKjrR3xsw-WlaEf6f7w04Rip1Q/view?usp=share_link")
	});
	$('.download_Tatari_Chp1').click(function(){
		window.open("https://drive.google.com/file/d/1UlyPehsUfMu02wviVzsFINIdvlqsyTQC/view?usp=sharing")
	});
	$('.download_Tatari_Chp2').click(function(){
		window.open("https://www.mediafire.com/file/63b76klrvflv2xt/%25E7%25A5%259F%25E3%2582%258A%25E3%2580%2580%25E7%25AC%25AC%25E4%25BA%258C%25E7%25AB%25A0%25EF%25BC%259A%25E9%259D%25A9%25E5%2591%25BD%25E5%2589%258D%25E5%25A4%259Cv1.3.zip/file")
	});

	$('.other_StarEvent').click(function(){
		window.open("https://forms.gle/7jrHhRtejJnM4ZFV9")
	});
	$('.other_TatariChp1_Freem').click(function(){
		window.open("https://www.freem.ne.jp/win/game/28993")
	});
	$('.other_TatariChp1_Yume').click(function(){
		window.open("https://freegame-mugen.jp/roleplaying/game_10514.html")
	});

})(jQuery);


	/*------------------
		Tool
	--------------------*/
	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
		}
		return "";
	}

	function clearCookie(name) {  
		setCookie(name, "", -1);  
	}  

	function resetCookie(){
		clearCookie("intro");
		clearCookie("story");
	}