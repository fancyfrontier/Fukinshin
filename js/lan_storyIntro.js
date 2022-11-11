$(window).on('load', function() {

	if(getCookie("intro") == "Sunday"){
		$(".STORY_INTRO_top").load("../Section/StoryIntro/StoryIntro_Sunday/storyIntro_top.html");
		$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Sunday/storyIntro_intro.html");
		$(".STORY_INTRO_content_main").load("../Section/StoryIntro/StoryIntro_Sunday/storyIntro_content_main.html");

	}else if(getCookie("intro") == "Tatari"){
		$(".STORY_INTRO_top").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_top.html");
		$(".STORY_INTRO_chpList").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_chpList.html");
		$(".STORY_INTRO_content_main").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_content_main.html");

		if(getCookie("chp_Tatari") == "chp"){
			$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_intro_chp.html");
			$(".STORY_INTRO_content_other").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_content_chp.html");

		}else if(getCookie("chp_Tatari") == "chp1"){
			$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_intro_chp1.html");
			$(".STORY_INTRO_content_other").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_content_chp1.html");

		}else{

		}

	}else if(getCookie("intro") == "Star"){
		$(".STORY_INTRO_top").load("../Section/StoryIntro/StoryIntro_Star/storyIntro_top.html");
		$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Star/storyIntro_intro.html");
		$(".STORY_INTRO_content_main").load("../Section/StoryIntro/StoryIntro_Star/storyIntro_content_main.html");
	}

	
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#featureTextFC").hide();
	$("#featureTextSC").hide();
	$("#storyIntro_topTextFC").hide();
	$("#storyIntro_topTextSC").hide();
	$("#storyIntro_chpListTextFC").hide();
	$("#storyIntro_chpListTextSC").hide();
	$("#storyIntro_introTextFC").hide();
	$("#storyIntro_introTextSC").hide();
	$("#storyIntro_contentMainTextFC").hide();
	$("#storyIntro_contentMainTextSC").hide();
	$("#storyIntro_contentOtherTextFC").hide();
	$("#storyIntro_contentOtherTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#featureTextFC").show();
		$("#storyIntro_topTextFC").show();
		$("#storyIntro_chpListTextFC").show();
		$("#storyIntro_introTextFC").show();
		$("#storyIntro_contentMainTextFC").show();
		$("#storyIntro_contentOtherTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#featureTextSC").show();
		$("#storyIntro_topTextSC").show();
		$("#storyIntro_chpListTextSC").show();
		$("#storyIntro_introTextSC").show();
		$("#storyIntro_contentMainTextSC").show();
		$("#storyIntro_contentOtherTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#featureTextFC").show();
		$("#storyIntro_topTextFC").show();
		$("#storyIntro_chpListTextFC").show();
		$("#storyIntro_introTextFC").show();
		$("#storyIntro_contentMainTextFC").show();
		$("#storyIntro_contentOtherTextFC").show();
	}

	/*------------------
		Chapter Set
	--------------------*/
	$('.chp_Tatari').click(function(){
		clearCookie("chp_Tatari");
		setCookie("chp_Tatari", "chp", 3)
		location.reload();
	});

	$('.chp_Tatari_Chp1').click(function(){
		clearCookie("chp_Tatari");
		setCookie("chp_Tatari", "chp1", 3)
		location.reload();
	});

})(jQuery);




