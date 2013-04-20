function showImage(imgName) {
    document.getElementById('largeImg').src = imgName;
    $.get("http://pingyang.me/fashionation/api/get_vote.php?pic_name=" + imageName, putVoteResults);
    $("#largeImgPanel").css("visibility", "visible");
    unselectAll();
}

function putVoteResutls(results) {
    var likes = parseInt(results.substring(0,1));
    var dislikse = parseInt(results.substring(2));
    $("#currentLikes").text(likes);
    $("#currentDislikes").text(dislikes);
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

 //   $("#userimages img").click(function() { alert("CLICKED"); $("#largeImgPanel").show();});

    $("#dislike").click(dislikePhoto);
    $("#like").click(likePhoto);
});

function likePhoto() {
    event.stopPropagation();
    var image = $("#largeImg").attr("src").substring(15).substring(-4);
    $.get("http://pingyang.me/fashionation/api/pic_vote.php?pic_name=" + image + "&vote=1");
    alert("liked!");
    $("#largeImgPanel").css("visibility", "hidden");
}

function dislikePhoto() {
    event.stopPropagation();
    var image = $("#largeImg").attr("src").substring(15).substring(-4);
    $.get("http://pingyang.me/fashionation/api/pic_vote.php?pic_name=" + image + "&vote=0");
    alert("disliked!");
    $("#largeImgPanel").css("visibility", "hidden");
}

function hideMessage() {
	$("#errorMessageUpload").hide();
}


function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
