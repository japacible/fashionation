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
	if($("#errorMessageUpload")) {
		//$("#SuccessMessageUpload").click(hideMessage);
		setTimeout(hideMessage, 2000);
	}

    $(".outfit-button #dislike").click(dislikePhoto);
    $(".outfit-button #like").click(likePhoto);
});

function likePhoto() {
    alert("i like this");
}

function dislikePhoto() {
    alert("I don't like this");
}

function hideMessage() {
	$("#errorMessageUpload").hide();
}


function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
