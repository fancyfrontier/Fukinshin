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
		
		if(getCookie("chp_Tatari") == "chp"){
			story = "Tatari/chp";

		}else if(getCookie("chp_Tatari") == "chp1"){
			story = "Tatari/chp1";

		}else{

		}

	}else if(getCookie("intro") == "Star"){
		
	}

	$(".img_main01").attr("src","/img/StoryIntroImg/Charactor/" + story + "/main01.jpg");
	

})(jQuery);

