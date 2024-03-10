/* openwin.js
   Copyright(c) Nintendo Co., Ltd. All Rights Reserved.
*/

function openWin(filename, wid, hei, option){
	var optionStr = 'width=' + wid + ',' + 'height=' + hei + ',' + option;
	NewWin = window.open(filename, "NewWin", optionStr);
	NewWin.focus();
}


function openPopup(url, name, w, h) {
	var newPopup;
	var options = "toolbar=no,menubar=yes,status=yes,scrollbars=yes,resizable=yes";
	newPopup = window.open(url, name,"width=" + w + ",height=" + h + options);
	newPopup.focus();
}

