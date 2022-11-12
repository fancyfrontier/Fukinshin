function b64_to_utf8(str) {
	return decodeURIComponent(escape(window.atob(str)));
}
	
function baseDecode() {
	var deStr = $("#decode").val();
	// alert(b64_to_utf8(deStr));
	$("#result").val(b64_to_utf8(deStr));
}

	
	