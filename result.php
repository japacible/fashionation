<?php 
	$name = $_FILES["image"]["name"];
	$file_type = $_FILES["image"]["type"];
	$file_size = $_FILES["image"]["size"];
	if($file_size <= 512000 && ($file_type == "image/jpeg" ||
								$file_type == "image/jpg" || 
								$file_type == "image/png")) {
	move_uploaded_file($_FILES["image"]["tmp_name"], "uploadedimages/$name");
	print("saved! at /uploadedimages/$name"); 
	} else {
		print("bad file type or size");
	}
?>

<META HTTP-EQUIV="Refresh" CONTENT="0; URL="fileupload.php">