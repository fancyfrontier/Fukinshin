/* =================================
------------------------------------
	EndGam - Gaming Magazine Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';


$(window).on('load', function() {


});

(function($) {
	
	
	if(getCookie("intro") != "" || getCookie("intro") != null){

		var introStory = "";

		if(getCookie("intro") == "Sunday"){
			introStory = "Sunday";
	
		}else if(getCookie("intro") == "Tatari"){
			
			if(getCookie("chp_Tatari") == "all"){
				introStory = "Tatari/all";
	
			}else if(getCookie("chp_Tatari") == "chp"){
				introStory = "Tatari/chp";
	
			}else if(getCookie("chp_Tatari") == "chp1"){
				introStory = "Tatari/chp1";
	
			}else if(getCookie("chp_Tatari") == "chp2"){
				introStory = "Tatari/chp2";
	
			}else{
	
			}
	
		}else if(getCookie("intro") == "Star"){
			introStory = "Star";
		}

		$(".img_intro").attr("src","/img/StoryIntroImg/" + introStory + "/Intro/intro.jpg");

		$(".img_main01").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main01.png");
		$(".img_main02").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main02.png");
		$(".img_main03").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main03.png");
		$(".img_main04").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main04.png");
		$(".img_main05").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main05.png");
		$(".img_main06").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main06.png");
		$(".img_main07").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main07.png");
		$(".img_main08").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/main08.png");
	
		$(".img_other01").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/other01.png");
		$(".img_other02").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/other02.png");
		$(".img_other03").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/other03.png");
		$(".img_other04").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/other04.png");
		$(".img_other05").attr("src","/img/StoryIntroImg/" + introStory + "/Charactor/other05.png");
	}


	if(getCookie("story") != "" || getCookie("story") != null){

		var story = "";

		if(getCookie("story") == "Sunday"){
			story = "Sunday";
	
		}else if(getCookie("story") == "Tatari"){
			
			if(getCookie("chp_Tatari") == "chp"){
				story = "Tatari/chp";
	
			}else if(getCookie("chp_Tatari") == "chp1"){
				story = "Tatari/chp1";
	
			}else if(getCookie("chp_Tatari") == "chp2"){
				story = "Tatari/chp2";
	
			}else{
	
			}
	
		}else if(getCookie("story") == "Star"){
			story = "Star";
		}

		$(".img_story_intro").attr("src","/img/StoryImg/" + story + "/Intro/intro.jpg");
		$(".img_content01").attr("src","/img/StoryImg/" + story + "/Content/content01.jpg");
		$(".img_content02").attr("src","/img/StoryImg/" + story + "/Content/content02.jpg");
	}


	

})(jQuery);

