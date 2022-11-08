$(window).on('load', function() {

	$(".TEAM_top").load("Section/Team/team_top.html");
    $(".TEAM_intro").load("Section/Team/team_intro.html");
});

(function($) {

    /*------------------
		Language
	--------------------*/
	$("#team_introTextFC").hide();
	$("#team_introTextSC").hide();
	$("#team_topTextFC").hide();
	$("#team_topTextSC").hide();

	if(getCookie("lan") == "fc"){
		$("#team_introTextFC").show();
		$("#team_topTextFC").show();

	}else if(getCookie("lan") == "sc"){
		$("#team_introTextSC").show();
		$("#team_topTextSC").show();

	}else if(getCookie("lan") == "jp"){

	}else{
		$("#team_introTextFC").show();
		$("#team_topTextFC").show();
	}
    
})(jQuery);




