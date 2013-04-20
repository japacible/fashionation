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
    alert("hi");
    event.stopPropagation();
    var image = $("#largeImg").attr("src").substring(15).substring(-4);
    alert("i like this");
    $.get("pingyang.me/fashionation/api/pic_vote.php?pic_name=" + image + "&vote=1");
    $("#largeImg").hide();
}

function dislikePhoto() {
    event.stopPropagation();
    var image = $("#largeImg").attr("src").substring(15).substring(-4);;
    alert("I don't like this");
    $.get("pingyang.me/fashionation/api/pic_vote.php?pic_name=" + image + "&vote=0");
    $("#largeImg").hide();
}

function hideMessage() {
	$("#errorMessageUpload").hide();
}


function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
