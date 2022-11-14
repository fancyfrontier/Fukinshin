$(window).on('load', function() {

	var newsTmp = "";

	if(getCookie("news") == "1"){
		newsTmp = 1
	}else if(getCookie("news") == "2"){
		newsTmp = 2
	}else if(getCookie("news") == "3"){
		newsTmp = 3
	}

	$(".NEWS_top").load("../Section/NEWS/" + newsTmp + "news_top.html");
	$(".NEWS_content").load("../Section/NEWS/" + newsTmp + "news_content.html");
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#news_topTextFC").hide();
	$("#news_topTextSC").hide();
	$("#news_contentTextFC").hide();
	$("#news_contentTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#news_contentTextFC").show();
		$("#news_topTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#news_contentTextSC").show();
		$("#news_topTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#news_contentTextFC").show();
		$("#news_topTextFC").show();
	}
    
})(jQuery);




