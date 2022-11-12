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
	
	var story = "";

	if(getCookie("intro") == "Sunday"){
		story = "Sunday";

	}else if(getCookie("intro") == "Tatari"){
		
		if(getCookie("chp_Tatari") == "all"){
			story = "Tatari/all";

		}else if(getCookie("chp_Tatari") == "chp"){
			story = "Tatari/chp1";

		}else if(getCookie("chp_Tatari") == "chp1"){
			story = "Tatari/chp1";

		}else{

		}

	}else if(getCookie("intro") == "Star"){
		story = "Star";
	}

	$(".img_main01").attr("src","/img/StoryIntroImg/" + story + "/Charactor/main01.png");
	$(".img_main02").attr("src","/img/StoryIntroImg/" + story + "/Charactor/main02.png");
	$(".img_main03").attr("src","/img/StoryIntroImg/" + story + "/Charactor/main03.png");
	$(".img_main04").attr("src","/img/StoryIntroImg/" + story + "/Charactor/main04.png");
	$(".img_main05").attr("src","/img/StoryIntroImg/" + story + "/Charactor/main05.png");

	$(".img_other01").attr("src","/img/StoryIntroImg/" + story + "/Charactor/other01.png");
	$(".img_other02").attr("src","/img/StoryIntroImg/" + story + "/Charactor/other02.png");
	$(".img_other03").attr("src","/img/StoryIntroImg/" + story + "/Charactor/other03.png");
	$(".img_other04").attr("src","/img/StoryIntroImg/" + story + "/Charactor/other04.png");
	$(".img_other05").attr("src","/img/StoryIntroImg/" + story + "/Charactor/other05.png");

})(jQuery);

