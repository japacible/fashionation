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

    $("#dislike").click(dislikePhoto);
    $("#like").click(likePhoto);
});

function likePhoto() {
    event.stopPropagation();
    var image = $("#largeImg").attr("src").substring(15).substring(-4);
    $.get("http://pingyang.me/fashionation/api/pic_vote.php?pic_name=" + image + "&vote=1");
    alert("liked!");
    hideMe($("#largeImgPane"));
}

function dislikePhoto() {
    event.stopPropagation();
    var image = $("#largeImg").attr("src").substring(15).substring(-4);
    $.get("http://pingyang.me/fashionation/api/pic_vote.php?pic_name=" + image + "&vote=0");
    alert("disliked!");
    hideMe($("#largeImgPane"));
}

function hideMessage() {
	$("#errorMessageUpload").hide();
}


function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
