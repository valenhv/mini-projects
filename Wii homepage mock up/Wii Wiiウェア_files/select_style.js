/* select_style.js
   Copyright(c) Nintendo Co., Ltd. All Rights Reserved.
*/

var Win = (navigator.appVersion.indexOf("Windows") != -1);
var Mac = (navigator.appVersion.indexOf("Macintosh") != -1);
var IE  = (navigator.appVersion.indexOf("MSIE") != -1) && !(navigator.userAgent.indexOf("Opera") != -1);
var Firefox = (navigator.userAgent.indexOf("Firefox") != -1);
var NS  = (navigator.userAgent.indexOf("Netscape") != -1);
var Opera = (navigator.userAgent.indexOf("Opera") != -1);
var Safari = (navigator.appVersion.indexOf("Safari") != -1);
var NC = (navigator.appName.indexOf("Netscape") != -1) && !(navigator.userAgent.indexOf("Netscape") != -1) && !(navigator.appVersion.indexOf("Safari") != -1);
var Konqueror = (navigator.userAgent.indexOf("Konqueror") != -1);
var Chrome = (navigator.userAgent.indexOf("Chrome") != -1);
var BrowserType;

var CSSpath = CSSpath_loc;
var CSSref1 = "<LINK REL='STYLESHEET' HREF='";
var CSSref2 = "' TYPE='text/css'>";

function writeCSSref(filename){
	document.write(CSSref1 + CSSpath + filename + CSSref2);
}

if(Win && IE){
	BrowserType = "Win_IE";
	writeCSSref('default.css');
}else if(Win && Firefox){
	BrowserType = "Win_Firefox";
	writeCSSref('mozilla.css');
}else if(Win && Opera){
	BrowserType = "Win_Opera";
	writeCSSref('default.css');
}else if(Win && NS){
	BrowserType = "Win_NS";
	writeCSSref('mozilla.css');
}else if(Win && NC){
	BrowserType = "Win_NC";
	writeCSSref('mozilla.css');
}else if(Mac && IE){
	BrowserType = "Mac_IE";
	writeCSSref('default.css');
}else if(Mac && Safari){
	BrowserType = "Mac_Safari";
	writeCSSref('safari.css');
}else if(Mac && NC){
	BrowserType = "Mac_NC";
	writeCSSref('mac_nc.css');
}else if(Win && Chrome){
	BrowserType = "Win_Chrome";
	writeCSSref('win_chrome.css');
}



