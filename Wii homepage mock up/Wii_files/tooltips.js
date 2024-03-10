function pkgtooltip() {	
	$('.textTitleA A').hover(function(e){
		var $title = $(this).attr('HREF').slice($(this).attr('HREF').length-15,$(this).attr('HREF').length-11);	
		tooltip.show($title);
	},
	function(){
		tooltip.hide();
	}
	);
}
$(document).ready(pkgtooltip);

var tooltip=function(){
	var id = 'tt';
	var top = 3;
	var left = 3;
	var maxw = 300;
	var speed = 10;
	var timer = 15;
	var endalpha = 95;
	var alpha = 0;
	var tt,t,c,b,h;
	var ie = document.all ? true : false;
	return{
		show:function(v,w){
			if(tt == null){
				tt = document.createElement('div');
				tt.setAttribute('id',id);
				document.body.appendChild(tt);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
				document.onmousemove = this.pos;
			}
			
			tt.style.display = 'block';
			if( CSSpath_loc == "../css/" ){
				tt.innerHTML = "<IMG SRC='../img_index/l_pkg/"+ v + ".jpg'>";
			} else {
				tt.innerHTML = "<IMG SRC='img_index/l_pkg/"+ v + ".jpg'>";
			}
			if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}
			h = parseInt(tt.offsetHeight) + top;
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(1)},timer);
		},
		pos:function(e){
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
			if(ie){
				tt.style.top = event.clientY - tt.offsetHeight - 7 + st + 'px';;				
			} else {
				tt.style.top = (u - h + 5) + 'px';	
			}
			tt.style.left = (l + left) + 'px';
		},
		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){tt.style.display = 'none'}
			}
		},
		hide:function(){
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
		}
	};
}();

function btntooltip() {
	var posObjY = Math.floor($('#softwareMenu').offset().top);
	$('#softwareMenu A').hover(function(){
		var $title = '.' + $(this).attr('ID');	
		var $titleImg = '.' + $(this).attr('ID') + ' img';	
		$($title).show();
		var posWinY = $(window).scrollTop();
		if(175 > posObjY - posWinY){
			$($title).css('top','63');
			$($titleImg).attr("src" , "img_index/" + $title.slice(1, $title.length) + "_btm.png");
		} else {
			$($title).css('top','-143');
			$($titleImg).attr("src" , "img_index/" + $title.slice(1, $title.length) + ".png");
		}
	},
	function(){
		var $title = '.' + $(this).attr('ID');	
		$($title).hide();	
	}
	);
}
$(document).ready(btntooltip);
