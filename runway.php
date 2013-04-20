<?php
$dir = "/uploadedimages/*";  
  
// Open a known directory, and proceed to read its contents  
foreach(glob($dir) as $file)   
{  
    echo "filename: $file : filetype: " . filetype($file) . "<br />";  
}  
?>