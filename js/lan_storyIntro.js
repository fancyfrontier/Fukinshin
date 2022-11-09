$(window).on('load', function() {

	if(getCookie("intro") == "Sunday"){
		$(".STORY_INTRO_top").load("../Section/StoryIntro/StoryIntro_Sunday/storyIntro_top.html");
		$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Sunday/storyIntro_intro.html");
		$(".STORY_INTRO_content").load("../Section/StoryIntro/StoryIntro_Sunday/storyIntro_content.html");

	}else if(getCookie("intro") == "Tatari"){
		$(".STORY_INTRO_top").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_top.html");
    	$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_intro.html");
		$(".STORY_INTRO_content").load("../Section/StoryIntro/StoryIntro_Tatari/storyIntro_content.html");

	}else if(getCookie("intro") == "Star"){
		$(".STORY_INTRO_top").load("../Section/StoryIntro/StoryIntro_Star/storyIntro_top.html");
		$(".STORY_INTRO_intro").load("../Section/StoryIntro/StoryIntro_Star/storyIntro_intro.html");
		$(".STORY_INTRO_content").load("../Section/StoryIntro/StoryIntro_Star/storyIntro_content.html");
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
	$("#storyIntro_introTextFC").hide();
	$("#storyIntro_introTextSC").hide();
	$("#storyIntro_contentTextFC").hide();
	$("#storyIntro_contentTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#featureTextFC").show();
		$("#storyIntro_topTextFC").show();
		$("#storyIntro_introTextFC").show();
		$("#storyIntro_contentTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#featureTextSC").show();
		$("#storyIntro_topTextSC").show();
		$("#storyIntro_introTextSC").show();
		$("#storyIntro_contentTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#featureTextFC").show();
		$("#storyIntro_topTextFC").show();
		$("#storyIntro_introTextFC").show();
		$("#storyIntro_contentTextFC").show();
	}
    
})(jQuery);




