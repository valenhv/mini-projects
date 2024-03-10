/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	search_tb_init('a.search_thickbox, area.search_thickbox, input.search_thickbox');//pass where to apply thickbox
});

//add thickbox to href & area elements that have a class of .search_thickbox
function search_tb_init(domChunk){
    var url = 'http://search1.nintendo.co.jp/search/index.html?TB_iframe=true';
    var ua = navigator.userAgent;
    if(
        //sp.htmlへリンク
        ua.indexOf("Windows Phone") != -1 || 
        (ua.indexOf("Android") != -1 && ua.indexOf("Mobile") != -1) ||
        (ua.indexOf("iPhone") != -1 && ua.indexOf("Mobile") != -1)
    ){
        url = 'http://search1.nintendo.co.jp/search/sp.html';
        $(".search_thickbox").attr("href", url);
    } else if(
        //3ds.htmlへリンク
        ua.indexOf("DSi") != -1 || 
        ua.indexOf("3DS") != -1
    ) {
        url = 'http://search1.nintendo.co.jp/search/3ds.html';
        $(".search_thickbox").attr("href", url);
    } else {
        //$(".search_thickbox").attr("href", url);
    	$(domChunk).click(function(e){
    	var t = this.title || this.name || null;
    	var a = this.href || this.alt;
    	var g = this.rel || false;
    	search_tb_show(t,a,g);
    	this.blur();
    	return false;
    	});
    }
}

function search_tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			//$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<div id='Search_TB_overlay'></div><div id='Search_TB_window'></div>");
				$("#Search_TB_overlay").click(search_tb_remove);
			}
		}else{//all others
			if(document.getElementById("Search_TB_overlay") === null){
				$("body").append("<div id='Search_TB_overlay'></div><div id='Search_TB_window'></div>");
				$("#Search_TB_overlay").click(search_tb_remove);
			}
		}
		
		if(search_tb_detectMacXFF()){
			$("#Search_TB_overlay").addClass("Search_TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#Search_TB_overlay").addClass("Search_TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		$("body").append("<div id='TB_load'></div>");//add loader to the page
		$('#TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = search_tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 0;
			$("#Search_TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
			
			$("#TB_closeWindowButton").click(search_tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#Search_TB_window").remove();
					$("body").append("<div id='Search_TB_window'></div>");
					search_tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#Search_TB_window").remove();
					$("body").append("<div id='Search_TB_window'></div>");
					search_tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					search_tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			search_tb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(search_tb_remove);
			$("#Search_TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = search_tb_parseQuery( queryString );

			TB_WIDTH = (790) + 0 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (1071) + 0 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH ;
			ajaxContentH = TB_HEIGHT;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					$("#Search_TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#Search_TB_window").append("<div id='window_base'><div id='close'><a href='#' id='TB_closeWindowButton'></a></div><iframe frameborder='0'  allowtransparency='true' hspace='0' src='"+urlNoQuery[0]+"' id='Search_TB_iframeContent'  name='Search_TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='search_tb_showIframe()' scrolling='no' style='width:"+(ajaxContentW)+"px;height:"+(ajaxContentH)+"px;' > </iframe></div>");
					}else{//iframe modal
					$("#Search_TB_overlay").unbind();
						$("#Search_TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='Search_TB_iframeContent' name='Search_TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='search_tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#Search_TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#Search_TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#Search_TB_overlay").unbind();
						$("#Search_TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
				if(TB_HEIGHT > $(document).height()){
					$("#Search_TB_overlay").css("height",TB_HEIGHT);
				}
			}
			$("#TB_closeWindowButton").click(search_tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#Search_TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					search_tb_position();
					$("#TB_load").remove();
					$("#Search_TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					search_tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#Search_TB_window").css({display:"block"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						search_tb_position();
						$("#TB_load").remove();
						search_tb_init("#TB_ajaxContent a.search_thickbox");
						$("#Search_TB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					search_tb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}

//helper functions below
function search_tb_showIframe(){
	$("#TB_load").remove();
	$("#Search_TB_window").css({display:"block"});
}

function search_tb_remove() {
	if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
		$("#TB_imageOff").unbind("click");
		$("#TB_closeWindowButton").unbind("click");
		$("#Search_TB_window").fadeOut(0,function(){$('#Search_TB_window,#Search_TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
		$("#TB_load").remove();
		if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
			$("body","html").css({height: "auto", width: "auto"});
			$("html").css("overflow","");
		}
	}else{
		document.getElementsByTagName("body")[0].removeChild(document.getElementById("Search_TB_overlay"));
		document.getElementsByTagName("body")[0].removeChild(document.getElementById("Search_TB_window"));
		var platform = navigator.platform.toUpperCase();
		if(navigator.appName == "Netscape" && platform.indexOf("MAC") >= 0){
			if( document.getElementById("Head") != null ) document.getElementById("Head").style.display = "block";
		}
	}
	
	document.onkeydown = "";
	document.onkeyup = "";
	return false;
}

function search_tb_position() {
		windowWidth = $(window).width();
		function getScrollPosition() {
		　　return (document.documentElement.scrollTop || document.body.scrollTop);   
		}
		positionTop = getScrollPosition();
	$("#Search_TB_window").css({left:parseInt((windowWidth / 2) - ((TB_WIDTH +50) / 2)) + 'px', top:positionTop+'px', width: TB_WIDTH + 'px'});
}

function search_tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function search_tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function search_tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}

