$(window).on('load', function() {

	$(".STORY_LIST_top").load("../Section/StoryList/storyList_top.html");
    $(".STORY_LIST_list").load("../Section/StoryList/storyList_list.html");
    $(".COMMON_feature").load("../Section/Common/common_feature.html");
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#featureTextFC").hide();
	$("#featureTextSC").hide();
	$("#storyList_listTextFC").hide();
	$("#storyList_listTextSC").hide();
	$("#storyList_topTextFC").hide();
	$("#storyList_topTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#featureTextFC").show();
		$("#storyList_listTextFC").show();
		$("#storyList_topTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#featureTextSC").show();
		$("#storyList_listTextSC").show();
		$("#storyList_topTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#featureTextFC").show();
		$("#storyList_listTextFC").show();
		$("#storyList_topTextFC").show();
	}
    
})(jQuery);




