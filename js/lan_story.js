$(window).on('load', function() {

	if(getCookie("story") == "Sunday"){
		$(".STORY_top").load("../Section/Story/Story_Sunday/story_top.html");
		$(".STORY_content").load("../Section/Story/Story_Sunday/story_content.html");
		$(".STORY_author").load("../Section/Story/Story_Sunday/story_author.html");

	}else if(getCookie("story") == "Tatari"){
		$(".STORY_top").load("../Section/Story/Story_Tatari/story_top.html");
		$(".STORY_INTRO_chpList").load("../Section/Story/Story_Tatari/story_chpList.html");
		$(".STORY_author").load("../Section/Story/Story_Tatari/story_author.html");

		if(getCookie("chp_Tatari") == "chp"){
			$(".STORY_content").load("../Section/Story/Story_Tatari/story_content_chp.html");

		}else if(getCookie("chp_Tatari") == "chp1"){
			$(".STORY_content").load("../Section/Story/Story_Tatari/story_content_chp1.html");

		}else if(getCookie("chp_Tatari") == "chp2"){
			$(".STORY_content").load("../Section/Story/Story_Tatari/story_content_chp2.html");

		}else{
			$(".STORY_content").load("../Section/Story/Story_Tatari/story_content_chp.html");
		}

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
	$("#story_chpListTextFC").hide();
	$("#story_chpListTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#story_chpListTextFC").show();
		$("#story_contentTextFC").show();
		$("#story_topTextFC").show();
		$("#story_authorTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#story_chpListTextSC").show();
		$("#story_contentTextSC").show();
		$("#story_topTextSC").show();
		$("#story_authorTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#story_chpListTextFC").show();
		$("#story_contentTextFC").show();
		$("#story_topTextFC").show();
		$("#story_authorTextFC").show();
	}
    
})(jQuery);




