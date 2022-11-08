$(window).on('load', function() {

	$(".GAMES_top").load("../Section/Games/games_top.html");
    $(".GAMES_list").load("../Section/Games/games_list.html");
    $(".COMMON_feature").load("../Section/Common/common_feature.html");
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#featureTextFC").hide();
	$("#featureTextSC").hide();
	$("#games_listTextFC").hide();
	$("#games_listTextSC").hide();
	$("#games_topTextFC").hide();
	$("#games_topTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#featureTextFC").show();
		$("#games_listTextFC").show();
		$("#games_topTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#featureTextSC").show();
		$("#games_listTextSC").show();
		$("#games_topTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#featureTextFC").show();
		$("#games_listTextFC").show();
		$("#games_topTextFC").show();
	}
    
})(jQuery);




