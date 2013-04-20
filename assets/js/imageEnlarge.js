function showImage(imgName) {
    document.getElementById('largeImg').src = imgName;
    document.getElementById('largeImgPanel').style.visibility = 'visible';
    unselectAll();
}

function unselectAll() {
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
}

function hideMe(obj) {
    obj.style.visibility = 'hidden';
}

$(document).ready(function() {
	if($("#SuccessMessageUpload")) {
		$("#SuccessMessageUpload").click(hideMessage);
	}
});

function hideMessage() {
	$("#SuccessMessageUpload").hide();
}


function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
