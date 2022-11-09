$(window).on('load', function() {

	$(".STORY_INTRO_LIST_top").load("../Section/StoryIntroList/storyIntroList_top.html");
    $(".STORY_INTRO_LIST_list").load("../Section/StoryIntroList/storyIntroList_list.html");
    $(".COMMON_feature").load("../Section/Common/common_feature.html");
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#featureTextFC").hide();
	$("#featureTextSC").hide();
	$("#storyIntroList_listTextFC").hide();
	$("#storyIntroList_listTextSC").hide();
	$("#storyIntroList_topTextFC").hide();
	$("#storyIntroList_topTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#featureTextFC").show();
		$("#storyIntroList_listTextFC").show();
		$("#storyIntroList_topTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#featureTextSC").show();
		$("#storyIntroList_listTextSC").show();
		$("#storyIntroList_topTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#featureTextFC").show();
		$("#storyIntroList_listTextFC").show();
		$("#storyIntroList_topTextFC").show();
	}
    
})(jQuery);




