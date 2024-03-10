/*@cc_on _d=document;eval('var document=_d')@*/

var CSSpath_loc = "css/";

document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/scroll.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/openwin.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/select_style.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/jquery_auto.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/jquery_png.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/tooltips.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="js/jquery.easing.1.3.js"></SCRIPT>');

function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi() { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function is3DS() { return (navigator.userAgent.indexOf("Nintendo 3DS") != -1); }
function isSmartPhone(){
	var devices = ['iPhone','iPad','iPod','Android'];
	var pattern = new RegExp(devices.join('|'), 'i');
	return pattern.test(navigator.userAgent);
}

function swfVersion() {
    var vsn = '';
    if( navigator.plugins && navigator.mimeTypes.length ) {     // not IE
        var tmp = navigator.plugins["Shockwave Flash"].description.match(/([0-9]+)/);
        vsn = tmp[0];
    } else {    // IE
        var tmp = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
        vsn = tmp[0];
    }
    return vsn;
}

function setBanner(){
	if (swfVersion() < 8) {
		document.write('<A HREF="selection/index.html"><IMG SRC="img_index/bnr_selection_l.jpg" ALT="『みんなのニンテンドーチャンネル みんなのおすすめセレクション』 さらに、2タイトルが追加。" WIDTH="768" HEIGHT="106" BORDER="0" CLASS="hover"></A>');
	} else {
		document.write (
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="768" height="106">' +
		'<param name="movie" value="img_index/bnr_selection.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="wmode" value="opaque">' +
		'<param name="bgcolor" value="#FFFFFF">' +
		'<param name="allowScriptAccess" value="sameDomain">' +
		'<embed src="img_index/bnr_selection.swf" menu="false" quality="high" wmode="opaque" bgcolor="#FFFFFF" width="768" height="106" swLiveConnect="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>'
		);
	}
}

$(function() {
		if(!isWii() && !isDSi() && !is3DS() && !isSmartPhone()){
		$('#btnHardware').css({ top: $('#mainContent').offset().top + 260, left: $('#mainContent').offset().left + 420 });
	
		$('#hoverArea').mousemove(function(e){
			$('#btnHardware').stop();
			$('#btnHardware').animate({ top: e.pageY + 15, left:e.pageX + 13, width: "100px" },{ duration: 40, specialEasing:{ top:'easeOutCirc', left:'easeOutCirc', width:'easeOutQuad' }});
			$('#mainContent').css({ cursor: "pointer" });
		});
	
		$('#hoverArea').hover(
			function(){
				$('.phWhite').css({opacity: "0.85"});
				$('.phBlack').css({opacity: "0.85"});
			}, 
			function(){
				$('#btnHardware').stop(true , true).animate({ width: "1px" })
				$('.phWhite').css({opacity: "1"});
				$('.phBlack').css({opacity: "1"});
		});
	} else {
		$('#btnHardware').css({ display: "none" });
	}
		   
	$("#mainWrap .main .mainBtn").hover(function(){ $("#mainWrap .main .mainBtn").attr("src","img_index/main_limitedBtn_ov.gif"); }, function() { $("#mainWrap .main .mainBtn").attr("src","img_index/main_limitedBtn.gif"); });
	$("#mainWrap .main .mainPh").hover(function(){ $("#mainWrap .main .mainBtn").attr("src","img_index/main_limitedBtn_ov.gif"); }, function() { $("#mainWrap .main .mainBtn").attr("src","img_index/main_limitedBtn.gif"); });
	
	$("#mainImage").hover(function(){ $("#atsumareba_btn").attr("src","img_index/main_btn_detail_ov.gif"); }, function() { $("#atsumareba_btn").attr("src","img_index/main_btn_detail.gif"); });
	$("#discription").hover(function(){ $("#atsumareba_btn").attr("src","img_index/main_btn_detail_ov.gif"); }, function() { $("#atsumareba_btn").attr("src","img_index/main_btn_detail.gif"); });
	
	// display E3-banner b/w randomly
	var rNum = Math.floor(Math.random() * 2);
	if(rNum == 1){
		$("img#e3Bnr").attr("src","img_index/bnr_e3_w.jpg");
	}
	
});


//popup
function openPopup(url, name, w, h) 
{
	var newPopup;
	var options = "toolbar=no,menubar=yes,status=yes,scrollbars=yes,resizable=yes";
	newPopup = window.open(url, name,"width=" + w + ",height=" + h + options);
	newPopup.focus();
}

