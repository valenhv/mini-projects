$(document).ready(function(){
// init input default value
	var inputKeyword = $("#inputSearch");
	var defaultMsg = "タイトル名やメーカー名などのキーワードを入力してください。";
	var checkMsg = "下のチェックボックスからソフト種類をお選びください。";
// init checked checkbox
	var submitBtn = $("#submitSearch");
	var onChkBtn = submitBtn.attr("src");
	var nonChkBtn = submitBtn.attr("src").replace(/^(.+)¥.(¥w+)$/, "$1_off.$2");
	if($("#searchCheck input:checked").length == 0){
		swtichSubmit(false);
		setColor("checkMsg");
	} else {
		swtichSubmit(true);
		setMsg(1);
	}

function swtichSubmit(flg){
	if(flg){
		submitBtn.attr("src", onChkBtn);
		submitBtn.removeAttr("disabled");
	} else {
		submitBtn.attr("src", nonChkBtn);
		submitBtn.attr("disabled","disabled");
	}
}

function setColor(colorType){
	if(colorType == "checkMsg"){
		inputKeyword.removeClass("disable");
		inputKeyword.addClass("checkMsg");
	} else if(colorType == "disable") {
		inputKeyword.removeClass("checkMsg");
		inputKeyword.addClass("disable");
	}
}

function setMsg(msgType){
	if(msgType == 2){
		inputKeyword.attr("value",checkMsg);
		setColor("checkMsg");
	} else if(msgType == 1){
		inputKeyword.attr("value",defaultMsg);
		setColor("disable");
	} else if(msgType == 0){
		inputKeyword.attr("value","");
	}
}


// focus input
	inputKeyword.focus(function(){
		$(this).removeClass();
		$(this).addClass("focus");
		if($(this).val() === defaultMsg || $(this).val() === checkMsg){
			setMsg(0);
		}
		if($("#searchCheck input:checked").length == 0){
			setColor("disable");
		} else {
			inputKeyword.removeClass("checkMsg");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val().length == 0 ){
			if($("#searchCheck input:checked").length == 0){
				setMsg(2);
			} else {
				setMsg(1);
			}
		} else if($(this).val() === checkMsg){
			setColor("checkMsg");
		}
	});

// click checkbox
	$("#searchCheck input:checkbox").click(function(){
		if($("#searchCheck input:checked").length == 0){
			swtichSubmit(false);
			if(inputKeyword.val() === checkMsg || inputKeyword.val() === defaultMsg || inputKeyword.val() == ""){
				setMsg(2);
			} else {
				setColor("disable");
			}
		} else {
			swtichSubmit(true);
			if(inputKeyword.val() === checkMsg){
				setMsg(1);
			}
			if(inputKeyword.val() != checkMsg && inputKeyword.val() != defaultMsg){
				inputKeyword.removeClass();
			}
		}
	});
	
// submit default keyword clear
$("#searchFormWindow").submit(function(){
	if(inputKeyword.val() === defaultMsg){
		setMsg(0);
	}
	return true;
});


// IE hack
	if(navigator.userAgent.match(/MSIE¥s[5-8]/)){
		// image label fix
		$("#searchCheck label").each(function(){
			$(this).click(function(){
				var labelClick = $(this).prev('input:checkbox');
				if(labelClick.attr('checked')) {
					labelClick.attr('checked', false);
				}else{
					labelClick.attr('checked', true);
				}
			});
		});
		
		$("#searchCheck label").click(function(){
			if($("#searchCheck input:checked").length == 0){
				swtichSubmit(false);
				if(inputKeyword.val() === checkMsg || inputKeyword.val() === defaultMsg || inputKeyword.val() == ""){
					setMsg(2);
				} else {
					setColor("disable");
				}
			} else {
				swtichSubmit(true);
				if(inputKeyword.val() === checkMsg){
					setMsg(1);
				}
				if(inputKeyword.val() != checkMsg && inputKeyword.val() != defaultMsg){
					inputKeyword.removeClass();
				}
			}
		});

	}
// IE hack maxlength
	if(navigator.userAgent.match(/MSIE/) === null){
		inputKeyword.attr("maxlength","50");
	}
});

