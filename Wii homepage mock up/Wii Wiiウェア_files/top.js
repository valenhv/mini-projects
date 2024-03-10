var ol = document.createElement("ol");
ol.className = "bunner";
var li = [];
var counter = 0;
var xmldoc;
var timer;

function MM_preloadImages() { //v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function getFlashPlayerVersion() {
	var version='0';
	if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
		var plugin=navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin;
		if (plugin && plugin.description) {
			var y='';
			var z=[];
			y=plugin.description.replace(/^[A-Za-z\s]+/, '').replace(/(\s+r|\s+b[0-9]+)/, ".");
			z=y.split('.');
			version=z[0];
		}
	} else {
		try {
			var x='';
			var y='';
			var z=[];
			var flashver=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			x=flashver.GetVariable("$version");
			y=x.replace(/^WIN /,'').replace(/,[0-9]+$/,'').replace(/,/g,'.');
			z=y.split('.');
			version=z[0];
		} catch(e) {
			version='0';
			return version;
		}
	}
	if (version.match(/^[0-9]+$/)) {
		return version;
	} else {
		return '0';
	}
}

function createFlash() {
	var flashTag = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="561" height="213" id="top" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="./top.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="./top.swf" quality="high" bgcolor="#ffffff" width="561" height="213" name="top" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
	$("#flash").empty();
	$("#flash").append(flashTag);
}
function createJS(xmldoc) {
	xmldoc = xmldoc.responseXML
	li = createLi();
	
	$("#flash").append(ol);
	addReflections();

	function getText(tag, node) {
		var text = $(tag, node)[0].firstChild.data;
		text = jQuery.trim(text);
		text = text.replace(/\n/g,"<br>");
		return text;
		
	}
	function createLi() {
		var li = [];
		var first = $("first", xmldoc);
		var content = $("content", xmldoc);

		var firstImg = document.createElement("img");
		firstImg.src = getText("src", first[0]);
		firstImg.width = "511";
		firstImg.height = "211";
		firstImg.alt = getText("alt", first[0]);

		var firstLi = document.createElement("li");
		$(firstLi).append(firstImg);
		$(firstLi).css("display", "none");
		for (var j = 0, image = []; j < content.length; j += 1) {
			li[j] = document.createElement("li");
			var title = document.createElement("p");
			var titleAnc = document.createElement("a");
			titleAnc.href = getText("website", content[j]);
			title.className = "title tx16";

			var phrase = document.createElement("p");
			phrase.className = "phrase tx12";

			var point = document.createElement("p");
			point.className = "point tx12";

			var screen =  document.createElement("div");
			screen.className = "screen";
			var screenAnc = document.createElement("a");
			screenAnc.href = getText("website", content[j]);
			var screenImg = document.createElement("img");
			image[j] = new Image();
			image[j].src = getText("screenshot", content[j]);
			screenImg.src = image[j].src;
			screenImg.className = "reflect";
			screenImg.width = "200";

			var detail = document.createElement("div");
			detail.className = "detail";

			var link = document.createElement("div");
			link.className = "link";
			var linkAnc = document.createElement("a");
			linkAnc.href = getText("website", content[j]);

			$(titleAnc).append(getText("titlename", content[j]));
			$(title).append(titleAnc);
			$(phrase).append(getText("catchphrase", content[j]));
			$(point).append(getText("wiipoint", content[j]) + "Wiiƒ|ƒCƒ“ƒg");
//			$(screenAnc).append(screenImg);
//			$(screen).append(screenAnc);
			$(screen).append(screenImg);
			$(link).append(linkAnc);
			$(linkAnc).mouseover(function(event) {
				$(".detail").css("background-position","0 -19px");
			});

			$(linkAnc).mouseout(function(event) {
				$(".detail").css("background-position","0 0");
			});

			$(li[j]).append(title);
			$(li[j]).append(phrase);
			$(li[j]).append(point);
			$(li[j]).append(screen);
			$(li[j]).append(detail);
			$(li[j]).append(link);

			$(li[j]).css("display", "none");
		}
		li.unshift(firstLi);

		for (var k = 0; k < content.length; k += 1) {
			$(ol).append(li[k]);
		}

		return li;
	}
}

function isFadeIn() {
	$(ol).append(li[counter]);
	$(li[counter]).fadeIn(700, function() {
		setTimeout(isFadeOut, 8000);
	});
}
function isFadeOut() {
	$(li[counter]).fadeOut(700, function() {
		counter += 1;
		if (counter >= li.length) {
			counter = 0;
		}
		setTimeout(isFadeIn, 0);
	});
}

function createSlider() {
	$(".block").css("width", "741px");
	$("#slider1").jcarousel({"scroll" : 5});
	$("#slider2").jcarousel({"scroll" : 5});
	$("#slider3").jcarousel({"scroll" : 5});
	$(".jcarousel-skin-tango").css("padding", "0");

	$("#slider1 li").ready(function(event) {
		$(".image img", this).css("opacity", "1.0");
		$(".image img", this).css("filter", "Alpha(opacity=100)");
	});
	$("#slider1 li").mouseover(function(event) {
		$(".image img", this).css("opacity", "0.6");
		$(".image img", this).css("filter", "Alpha(opacity=60)");
	});
	$("#slider1 li").mouseout(function(event) {
		$(".image img", this).css("opacity", "1.0");
		$(".image img", this).css("filter", "Alpha(opacity=100)");
	});

	$("#slider2 li").ready(function(event) {
		$(".image img", this).css("opacity", "1.0");
		$(".image img", this).css("filter", "Alpha(opacity=100)");
	});
	$("#slider2 li").mouseover(function(event) {
		$(".image img", this).css("opacity", "0.6");
		$(".image img", this).css("filter", "Alpha(opacity=60)");
	});
	$("#slider2 li").mouseout(function(event) {
		$(".image img", this).css("opacity", "1.0");
		$(".image img", this).css("filter", "Alpha(opacity=100)");
	});

	$("#slider3 li").ready(function(event) {
		$(".image img", this).css("opacity", "1.0");
		$(".image img", this).css("filter", "Alpha(opacity=100)");
	});
	$("#slider3 li").mouseover(function(event) {
		$(".image img", this).css("opacity", "0.6");
		$(".image img", this).css("filter", "Alpha(opacity=60)");
	});
	$("#slider3 li").mouseout(function(event) {
		$(".image img", this).css("opacity", "1.0");
		$(".image img", this).css("filter", "Alpha(opacity=100)");
	});
	
	

	$(".jcarousel-next-horizontal").mouseover(function(event) {
			var classname = $(this).attr("class");
			if (classname.indexOf("disabled") == -1) {
				$(this).addClass("jcarousel-next-horizontal-hover");
			} else {
				$(this).removeClass("jcarousel-next-horizontal-hover");
			}
	});
	$(".jcarousel-next-horizontal").mouseout(function(event) {
		$(this).removeClass("jcarousel-next-horizontal-hover");
	});
	$(".jcarousel-prev-horizontal").mouseover(function(event) {
			var classname = $(this).attr("class");
			if (classname.indexOf("disabled") == -1) {
				$(this).addClass("jcarousel-prev-horizontal-hover");
			} else {
				$(this).removeClass("jcarousel-prev-horizontal-hover");
			}
	});
	$(".jcarousel-prev-horizontal").mouseout(function(event) {
		$(this).removeClass("jcarousel-prev-horizontal-hover");
	});
}

$(document).ready(function() {
	createSlider();
	MM_preloadImages(
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu_top_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu1_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu2_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu3_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu4_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu6_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu5_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu7_ov.gif",
		"https://www.nintendo.co.jp/wii/img_cmn/hdr_menu8_ov.gif",
		"./img/info_navi1_ov.gif",
		"./img/info_navi2_ov.gif",
		"./img/info_navi3_ov.gif",
		"./img/gallery_list_ov.gif"
	);

	if (getFlashPlayerVersion() >= 7) {
		createFlash();
	} else {
		$("#flash").empty();
		xmldoc = $.get("./shared/top.xml", function(data){
			createJS(xmldoc);
			timer = setTimeout(isFadeIn, 2000);
		});
	}
});
