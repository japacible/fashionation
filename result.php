<?php 
	$name = $_FILES["image"]["name"];
	$file_type = $_FILES["image"]["type"];
	$file_size = $_FILES["image"]["size"];
	if($file_size <= 512000 && ($file_type == "image/jpeg" ||
								$file_type == "image/jpg" || 
								$file_type == "image/png")) {
	move_uploaded_file($_FILES["image"]["tmp_name"], "uploadedimages/$name");
		header('Location: runway.php?success=true');
	} else {
		header('Location: fileupload.php?success=false');
	}
?>