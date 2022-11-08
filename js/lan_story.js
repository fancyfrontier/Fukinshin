$(window).on('load', function() {

	if(getCookie("story") == "Sunday"){
		$(".STORY_top").load("../Section/Story/Story_Sunday/story_top.html");
		$(".STORY_content").load("../Section/Story/Story_Sunday/story_content.html");
		$(".STORY_author").load("../Section/Story/Story_Sunday/story_author.html");

	}else if(getCookie("story") == "Tatari"){
	$(".STORY_top").load("../Section/Story/Story_Tatari/story_top.html");
		$(".STORY_content").load("../Section/Story/Story_Tatari/story_content.html");
		$(".STORY_author").load("../Section/Story/Story_Tatari/story_author.html");

	}else if(getCookie("story") == "Tatari_Chp1"){
		$(".STORY_top").load("../Section/Story/Story_Tatari_Chp1/story_top.html");
		$(".STORY_content").load("../Section/Story/Story_Tatari_Chp1/story_content.html");
		$(".STORY_author").load("../Section/Story/Story_Tatari_Chp1/story_author.html");

	}else if(getCookie("story") == "Star"){
		$(".STORY_top").load("../Section/Story/Story_Star/story_top.html");
		$(".STORY_content").load("../Section/Story/Story_Star/story_content.html");
		$(".STORY_author").load("../Section/Story/Story_Star/story_author.html");
	}
	
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#story_topTextFC").hide();
	$("#story_topTextSC").hide();
	$("#story_contentTextFC").hide();
	$("#story_contentTextSC").hide();
	$("#story_authorTextFC").hide();
	$("#story_authorTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#story_contentTextFC").show();
		$("#story_topTextFC").show();
		$("#story_authorTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#story_contentTextSC").show();
		$("#story_topTextSC").show();
		$("#story_authorTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#story_contentTextFC").show();
		$("#story_topTextFC").show();
		$("#story_authorTextFC").show();
	}
    
})(jQuery);




