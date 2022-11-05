/* =================================
------------------------------------
	EndGam - Gaming Magazine Template
	Version: 1.0
 ------------------------------------
 ====================================*/


$('#ScBtn').click(function(){
	alert("In!!");
	Cookies.set('name', 'value');
	alert(Cookies.get('name'));
	alert("Out!!");
});


