<?php $name = $_FILES["image"]["name"];
move_uploaded_file($_FILES["image"]["tmp_name"], "uploadedimages/$name");
print("saved! at /uploadedimages/$name"); ?>