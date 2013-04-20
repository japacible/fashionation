<?php
foreach(glob('uploadedimages/*') as $image)   
{     
  echo "Filename: " . $image . "<br />";
  echo "<img src=\"$image\" \/>";
}
?>



