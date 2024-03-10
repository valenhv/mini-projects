/*
* globalnav.js(wii)
*
*/


//ナビゲーション（wiitop,globaltop）
var dirdepth = new Array();
dirdepth[0] = new Array("","../");
dirdepth[1] = new Array("../","../../");
dirdepth[2] = new Array("../../","../../../");
dirdepth[3] = new Array("../../../","../../../../");
dirdepth[4] = new Array("../../../../","../../../../../");



function setGlobalNav(_id,_num){
	
	//ディレクトリーがカテゴリー内に含まれない場合
	var mydir = _id;
	
	/*
	if(_id == 'vc'){
		_id = 'software';
	}else if(_id == 'wiiware_vc'){
		_id = 'software';
	}else if(_id == 'q_and_a'){
		_id = 'support';
	}
	*/
	
	switch (_id){
  		case 'vc':
    		_id = 'software';
    		break;
  		case 'wiiware_vc':
    		_id = 'software';
    		break;
  		case 'q_and_a':
    		_id = 'support';
    		break;
    	case 'features':
    		_id = 'console';
    		break;
    	case 'sd_card_menu':
    		_id = 'support';
    		break;
    	case 'search':
    		_id = 'software';
    		break;
    	case 'softlist':
    		_id = 'software';
    		break;
    	case 'wiiware':
    		_id = 'software';
    		break;
	}
	
	// header
	var headerHdr1 = '<DIV CLASS="nintendo_logo"><A HREF="' + dirdepth[_num][1] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/nintendo_logo.gif" WIDTH="66" HEIGHT="17" ALT="Nintendo - 任天堂ホームページへ" BORDER="0"></A></DIV>';
	var headerHdr2 = '<DIV CLASS="wii_logo"><A HREF="' + dirdepth[_num][0] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/wii_logo.gif" WIDTH="84" HEIGHT="37" ALT="Wii - Wii トップページ" BORDER="0"></A></DIV>';
	var headerli = new Array();
	
	headerli[0] = new Array('top', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][1] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_home.gif" WIDTH="88" HEIGHT="17" ALT="任天堂ホームページ" BORDER="0"__class__></A></DIV>');
	headerli[1] = new Array('wiitop', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][0] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu_top.gif" WIDTH="41" HEIGHT="17" ALT="Wii TOP" BORDER="0"__class__></A></DIV>');
	headerli[2] = new Array('console', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][0] + 'console/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu3.gif" WIDTH="20" HEIGHT="17" ALT="本体" BORDER="0"__class__></A></DIV>');
	headerli[3] = new Array('software', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][0] + 'index.html#software"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu5.gif" WIDTH="52" HEIGHT="17" ALT="ソフトウェア" BORDER="0"__class__></A></DIV>');
	headerli[4] = new Array('controllers', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][0] + 'controllers/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu4.gif" WIDTH="53" HEIGHT="17" ALT="コントローラ" BORDER="0"__class__></A></DIV>');
	headerli[5] = new Array('accessories', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][0] + 'accessories/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu6.gif" WIDTH="40" HEIGHT="17" ALT="周辺機器" BORDER="0"__class__></A></DIV>');
	headerli[6] = new Array('support', '<DIV CLASS="__pos__"><A HREF="' + dirdepth[_num][0] + 'support/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu8.gif" WIDTH="37" HEIGHT="17" ALT="サポート" BORDER="0"__class__></A></DIV>');
	headerli[7] = new Array('search', '<DIV CLASS="__pos__"><a HREF="' + dirdepth[_num][0] + '../search/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/hdr_menu_search.gif" WIDTH="25" HEIGHT="25" ALT="さがす" BORDER="0"__class__></A></DIV>');
	
	// End header
	
	
	
	
	//footer
	var footerList = '<UL>';
	
	var footerli = new Array();
	
	footerli[0] = new Array('wiitop','<LI><A HREF="' + dirdepth[_num][0] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/fnav_top.gif" ALT="Wii Top" WIDTH="85" HEIGHT="21"__class__></A></LI>');
	footerli[1] = new Array('console','<LI><A HREF="' + dirdepth[_num][0] + 'console/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/fnav_console.gif" ALT="本体" WIDTH="57" HEIGHT="21"__class__></A></LI>');
	footerli[2] = new Array('software','<LI><A HREF="' + dirdepth[_num][0] + 'index.html#software"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/fnav_software.gif" ALT="ソフトウェア" WIDTH="98" HEIGHT="21"__class__></A></LI>');
	footerli[3] = new Array('controllers', '<LI><A HREF="' + dirdepth[_num][0] + 'controllers/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/fnav_controllers.gif" ALT="コントローラ" WIDTH="100" HEIGHT="21"__class__></A></LI>');
	footerli[4] = new Array('accessories','<LI><A HREF="' + dirdepth[_num][0] + 'accessories/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/fnav_accessories.gif" ALT="周辺機器" WIDTH="81" HEIGHT="21"__class__></A></LI>');
	footerli[5] = new Array('support','<LI><A HREF="' + dirdepth[_num][0] + 'support/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/fnav_support.gif" ALT="サポート" WIDTH="74" HEIGHT="21"__class__></A></LI>');
	var footerEndList = '</UL>';
	
	var footerFtr1 = '<P CLASS="pagetop"><A HREF="#pagetop"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/btn_pagetop.gif" alt="このページの上へ" width="112" height="21" CLASS="hover"></A></P>';

	var footerFtrBdr = '<DIV ID="pnav_container">';
	var footerFtrBdrP = '<P CLASS="copyright"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/copy_nintendo.gif" WIDTH="92" HEIGHT="25" ALT=""></P>';
	var pnavUl = '<UL ID="pnav">';
	
	var pnavLi1 = '<LI><A HREF="' + dirdepth[_num][1] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/btn_footer_nintendo.gif" ALT="任天堂トップ" CLASS="hover" WIDTH="89" HEIGHT="25"></A></LI>';
	var pnavLi2 = '<LI><A HREF="' + dirdepth[_num][1] + 'wiiu/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/btn_footer_wiiu.gif" ALT="Wii U" CLASS="hover" WIDTH="89" HEIGHT="25"></A></LI>';
	var pnavLi3 = '<LI><A HREF="' + dirdepth[_num][0] + 'index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/btn_footer_wii.gif" ALT="Wii" WIDTH="89" HEIGHT="25"></A></LI>';
	var pnavLi4 = '<LI><A HREF="' + dirdepth[_num][1] + '3ds/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/btn_footer_3ds.gif" ALT="ニンテンドー3DS" CLASS="hover" WIDTH="89" HEIGHT="25"></A></LI>';
	var pnavLi5 = '<LI CLASS="lastchild"><A HREF="' + dirdepth[_num][1] + 'ds/index.html"><IMG SRC="' + dirdepth[_num][0] + 'img_cmn/btn_footer_ds.gif" ALT="ニンテンドーDS" CLASS="hover" WIDTH="89" HEIGHT="25"></A></LI>';
	
	var pnavEndUl = '</UL>';
	var footerFtrBdrEnd = '</DIV>';
	
	// End footer
	
	var headerliSet = '';
	var footerliSet1 = '';
	var footerliSet2 = '';
	
	var myPos = '';
	var myLength = headerli.length;
	var myLength2 = footerli.length;
	var lengthNumber = (myLength + '').length;
	
	for (var i = 0, j = 1; i < myLength; i++, j++) {
		if(_id != headerli[i][0]){
			var myTmp8 = headerli[i][1];
			var myTmp9 = myTmp8.replace(/__class__/, ' CLASS="hover"');
			delete headerli[i][1];
			headerli[i][1] = myTmp9;
		}else if(_num >=2){
			var myTmp8 = headerli[i][1];
			var myTmp9 = myTmp8.replace(/__class__/, '').replace(/.gif/, '_on.gif');
			delete headerli[i][1];
			headerli[i][1] = myTmp9;
		}else if(mydir != _id){
			var myTmp8 = headerli[i][1];
			var myTmp9 = myTmp8.replace(/__class__/, '').replace(/.gif/, '_on.gif');
			delete headerli[i][1];
			headerli[i][1] = myTmp9;
		}else{
			var myTmp8 = headerli[i][1];
			myTmp8 = myTmp8.replace(/<A HREF=".*">(<.*>)<\/A>/i, function() { return arguments[1]; });
			var myTmp9 = myTmp8.replace(/__class__/, '').replace(/.gif/, '_on.gif');
			delete headerli[i][1];
			headerli[i][1] = myTmp9;
		}
		
		myPos = "menu" + ('0' + j).slice(lengthNumber + 1 * -1);
		var myTmp8 = headerli[i][1];
		var myTmp9 = myTmp8.replace(/__pos__/, myPos);
		delete headerli[i][1];
		headerli[i][1] = myTmp9;
		
		
		headerliSet +=headerli[i][1];
	}

	for (var i = 0; i < myLength2; i++) {
		if(_id != footerli[i][0]){
			var myTmp8 = footerli[i][1];
			var myTmp9 = myTmp8.replace(/__class__/, ' CLASS="hover"');
			delete footerli[i][1];
			footerli[i][1] = myTmp9;
		}else if(_num >=2){
			var myTmp8 = footerli[i][1];
			var myTmp9 = myTmp8.replace(/__class__/, '').replace(/.gif/, '_ov.gif');
			footerli[i][1] = myTmp9;
		}else if(mydir != _id){
			var myTmp8 = footerli[i][1];
			var myTmp9 = myTmp8.replace(/__class__/, '').replace(/.gif/, '_ov.gif');
			footerli[i][1] = myTmp9;
		}else {
			var myTmp8 = footerli[i][1];
			myTmp8 = myTmp8.replace(/<A HREF=".*">(<.*>)<\/A>/i, function() { return arguments[1]; });
			var myTmp9 = myTmp8.replace(/__class__/, '').replace(/.gif/, '_ov.gif');
			footerli[i][1] = myTmp9;
		}
		
		footerliSet1 +=footerli[i][1];
	}
	
	
	
	if(_id =="wiitop"){
		var myTmp10 = headerHdr2.replace(/<A HREF=".*">(<.*>)<\/A>/i, function(){ return arguments[1]; });
		headerHdr2 = myTmp10;
		
		var myTmp5 = pnavLi2.replace(/<A HREF=".*">(<.*>)<\/A>/i, function(){ return arguments[1]; });
		pnavLi2 = myTmp5;
		
	}
	
	
	
	var divHdr = document.getElementById('hdr');
	var divHdrMenu = document.getElementById('hdrMenu');
	var divFtr = document.getElementById('footer');
	var divFtrBdr = document.getElementById('ftr_bdr');
	
    if (divHdr) { divHdr.innerHTML = headerHdr1 + headerHdr2; }
	if (divHdrMenu) { divHdrMenu.innerHTML = headerliSet; }
	if (divFtr) { divFtr.innerHTML = footerList + footerliSet1 + footerEndList + footerFtr1; }
	if (divFtrBdr) { divFtrBdr.innerHTML = footerFtrBdr + footerFtrBdrP + pnavUl + pnavLi1 + pnavLi2 + pnavLi3 + pnavLi4 + pnavLi5 + pnavEndUl + footerFtrBdrEnd; }
	
}

document.write('<link rel="stylesheet" type="text/css" href="https://www.nintendo.co.jp/css/search_thickbox.css" media="all" />');
document.write('<link rel="stylesheet" type="text/css" href="https://www.nintendo.co.jp/css/search_button.css" media="all" />');
document.write('<script type="text/javascript" src="https://www.nintendo.co.jp/js/search_thickbox.js"></script>');