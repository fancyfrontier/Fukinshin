$(function () {
    $("#TCsendLastPwd").click(function () {
        if (btoa($("#TCinputLastPwd").val()) == "QURBQkFOQQ==") {
            $("#TCshowBlock").removeClass("disableLast");
            $("#TCinputBlock").addClass("disableLastInput");
            setTimeout("chgTcHintSite()", 4000);
        } else {
            alert("密碼錯誤，請重新輸入");
        }
    });

    $("#SCsendLastPwd").click(function () {
        if (btoa($("#SCinputLastPwd").val()) == "QURBQkFOQQ==") {
            $("#SCshowBlock").removeClass("disableLast");
            $("#SCinputBlock").addClass("disableLastInput");
            setTimeout("chgScHintSite()", 4000);
        } else {
            alert("密码错误，请重新输入");
        }
    });

    $("#JPsendLastPwd").click(function () {
        if (btoa($("#JPinputLastPwd").val()) == "QURBQkFOQQ==") {
            $("#JPshowBlock").removeClass("disableLast");
            $("#JPinputBlock").addClass("disableLastInput");
            setTimeout("chgJpHintSite()", 4000);
        } else {
            alert("パスワードが正しくありません");
        }
    });
});

var checkPwdInput, checkMsgInput;

$(document).ready(function () {

    //TC_Version

    //Global
    $("#Continue").on({
        mouseenter: function () { $(this).css("color", "red"); },
        mouseleave: function () { $(this).css("color", "white"); }
    });

    //TC_Version
    $("#TC_Home").on({
        mouseenter: function () { $(this).html("首頁") },
        mouseleave: function () { $(this).html("ホーム") },
        click: function () { $(window).attr('location', '../../Main/index.html'); }
    });
    $("#TC_Index").on({
        mouseenter: function () { $(this).css("color", "red"); },
        mouseleave: function () { $(this).css("color", "white"); }
    });

    $("#TC_Profile").on({
        mouseenter: function () { $(this).html("關於我") },
        mouseleave: function () { $(this).html("プロフィール") }
    });

    $("#TC_Message").on({
        mouseenter: function () { $(this).html("訊息") },
        mouseleave: function () { $(this).html("メッセージ") }
    });

    //SC_Version
    $("#SC_Home").on({
        mouseenter: function () { $(this).html("首页") },
        mouseleave: function () { $(this).html("ホーム") },
        click: function () { $(window).attr('location', '../../Main/index.html'); }
    });
    $("#SC_Index").on({
        mouseenter: function () { $(this).css("color", "red"); },
        mouseleave: function () { $(this).css("color", "white"); }
    });

    $("#SC_Profile").on({
        mouseenter: function () { $(this).html("关于我") },
        mouseleave: function () { $(this).html("プロフィール") }
    });

    $("#SC_Message").on({
        mouseenter: function () { $(this).html("讯息") },
        mouseleave: function () { $(this).html("メッセージ") }
    });

    //JP_Version
    $("#JP_Home").on({
        click: function () { $(window).attr('location', '../../Main/index.html'); }
    });
    $("#JP_Index").on({
        mouseenter: function () { $(this).css("color", "red"); },
        mouseleave: function () { $(this).css("color", "white"); }
    });

});


//Tools
var checkPwdInput, checkMsgInput;

function TC_ClickProfile() {
    $('#myModal').modal('show');
    $("#enter").on({
        click: function () { $(window).attr('location', 'TcTruth.html'); }
    });
}

function TC_ClickMessage() {
    if(getCookie("decode") == "true"){
        $(window).attr('location', 'TcEncode.html');
    }else{
        var msgPwd = prompt("這個功能被上鎖了");
        checkMsgInput = msgPwd;
        if (checkMsg(checkMsgInput) == "VGhhbmtZb3VGb3JQbGF5aW5n") {
            setCookie("decode", "true");
            $(window).attr('location', 'TcEncode.html');
        }
        else if (checkMsgInput == null) {
        }
        else {
            alert("密碼錯誤，請重新輸入");
        }
    }
}

function SC_ClickProfile() {
    var pwd = prompt("这个功能被上锁了");
    checkPwdInput = pwd;
    if (checkPwd(checkPwdInput) == true) {
        alert("密码错误，请重新输入");
    }
    else if (checkPwdInput == null) {
    }
    else {
        alert("密码错误，请重新输入");
    }
}

function SC_ClickMessage(){
    if(getCookie("decode") == "true"){
        $(window).attr('location', 'ScEncode.html');
    }else{
        var msgPwd = prompt("这个功能被上锁了");
        checkMsgInput = msgPwd;
        if (checkMsg(checkMsgInput) == "VGhhbmtZb3VGb3JQbGF5aW5n") {
            setCookie("decode", "true");
            $(window).attr('location', 'ScEncode.html');
        }
        else if (checkMsgInput == null) {
        }
        else {
            alert("密码错误，请重新输入");
        }
    }
}

function JP_ClickProfile() {
    var pwd = prompt("パスワードを入力してください");
    checkPwdInput = pwd;
    if (checkPwd(checkPwdInput) == true) {
        alert("パスワードが正しくありません");
    }
    else if (checkPwdInput == null) {
    }
    else {
        alert("パスワードが正しくありません");
    }
}

function JP_ClickMessage() {
    if(getCookie("decode") == "true"){
        $(window).attr('location', 'JpEncode.html');
    }else{
        var msgPwd = prompt("パスワードを入力してください");
        checkMsgInput = msgPwd;
        if (checkMsg(checkMsgInput) == "VGhhbmtZb3VGb3JQbGF5aW5n") {
            setCookie("decode", "true");
            $(window).attr('location', 'JpEncode.html');
        }
        else if (checkMsgInput == null) {
        }
        else {
            alert("パスワードが正しくありません");
        }
    }
}

function checkPwd(input) {
    return checkPoint = btoa(input);
}

function checkMsg(input) {
    return checkMsgPoint = btoa(input);
}

var timeCount = 15;

function kill() {

    if (timeCount == 15) {
        $('#navbar').hide();
    } else if (timeCount == 14) {
        $('#userPhoto').hide();
    } else if (timeCount == 13) {
        $('#post1').hide();
    } else if (timeCount == 12) {
        $('#post2').hide();
    } else if (timeCount == 11) {
        $('#post3').hide();
    } else if (timeCount == 10) {
        $('#post4').hide();
    } else if (timeCount == 9) {
        $('#post5').hide();
    } else if (timeCount == 8) {
        $('#post6').hide();
    } else if (timeCount == 7) {
        $('#post7').hide();
    } else if (timeCount == 6) {
        $('#post8').hide();
    } else if (timeCount == 5) {
        $('#post9').hide();
    } else if (timeCount == 4) {
        $('#post10').hide();
    } else if (timeCount == 3) {
        $('#post11').hide();
    } else if (timeCount == 2) {
        $('#post12').hide();
    } else if (timeCount == 1) {
        $('#post13').hide();
    } else if (timeCount == 0) {
        $('#title').hide();
        setTimeout("showEyes()", 1000)
        setTimeout("chgSite()", 5000)
    }

    if(timeCount == 11){
        setInterval(kill, 130);
    }

    if(timeCount == 7){
        setInterval(kill, 80);
    }

    timeCount--;
}

function showEyes() {
    $("#eyes").attr("style", "display:block;");
}
function chgSite() {
    $(window).attr('location', 'https://www.google.com.tw/?hl=zh_TW');
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function baseEncode() {
    var enStr = $("#encode").val();
    alert(utf8_to_b64(enStr));
}

function baseDecode() {
    var deStr = $("#decode").val();
    alert(b64_to_utf8(deStr));
}

function setCookie(name, value){
    var oDate = new Date();
    //有效期限2周
    oDate.setDate(oDate.getDate() + 14);
    document.cookie = name + '=' + value + '; expires=' + oDate;
}

function getCookie(name){
    var arr = document.cookie.split('; ');

    for(var i = 0; i < arr.length; i++){
        var arr2 = arr[i].split('=');
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return '';
}

function chgTcHintSite() {
    $(window).attr('location', 'TcHint.html');
}
function chgScHintSite() {
    $(window).attr('location', 'ScHint.html');
}
function chgJpHintSite() {
    $(window).attr('location', 'JpHint.html');
}

