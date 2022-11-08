$(window).on('load', function() {

	$(".HOME_mainText").load("Section/Home/home_mainText.html");
    $(".HOME_intro").load("Section/Home/home_intro.html");
    $(".HOME_news").load("Section/Home/home_news.html");
    $(".COMMON_feature").load("Section/Common/common_feature.html");

	/*------------------
		Video
	--------------------*/
	if(getCookie("lan") == "fc"){
		$("#HOME_video").append("<div class=" + '"home_videoFC"' + "></div>");

	}else if(getCookie("lan") == "sc"){
		$("#HOME_video").append("<div class=" + '"home_videoSC"' + "></div>");
		
	}else if(getCookie("lan") == "jp"){

	}else{
		$("#HOME_video").append("<div class=" + '"home_videoFC"' + "></div>");
	}

	$(".home_videoFC").load("Section/Home/home_videoFC.html");
	$(".home_videoSC").load("Section/Home/home_videoSC.html");
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#home_mainTextFC").hide();
	$("#home_mainTextSC").hide();
	$("#featureTextFC").hide();
	$("#featureTextSC").hide();
	$("#home_introTextFC").hide();
	$("#home_introTextSC").hide();
	$("#home_newsTextFC").hide();
	$("#home_newsTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#home_mainTextFC").show();
		$("#featureTextFC").show();
		$("#home_introTextFC").show();
		$("#home_newsTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#home_mainTextSC").show();
		$("#featureTextSC").show();
		$("#home_introTextSC").show();
		$("#home_newsTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#home_mainTextFC").show();
		$("#featureTextFC").show();
		$("#home_introTextFC").show();
		$("#home_newsTextFC").show();
	}
    
})(jQuery);




