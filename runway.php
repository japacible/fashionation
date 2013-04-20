<?php
  include "tutorial_footer.php";
?>

<!DOCTYPE html>
<html>
  <head>
    <title>fashionation</title>
    <link href="assets/css/reset.css" type:"text/css" rel="stylesheet" />
    <link href="assets/css/folksfont.css" type:"text/css" rel="stylesheet" />
    <link href="assets/css/style.css" type:"text/css" rel="stylesheet" />
  </head>

  <body>
      <script src="http://code.jquery.com/jquery-latest.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <div class="container">
        <header>
          <h1>fashionation</h1>
        </header>
        <nav>
          <div>
            <h2><a href="home.html" title="Home">HOME</a></h2>
          </div>
          <div>
            <h2><a href="coordi.html" title="Outfit Suggestor">COORDI</a></h2>
          </div>
          <div>
            <h2><a href="resources.html" title="Tutorials">BASICS</a></h2>
          </div>
        </nav>

        <div class="main-container">
          <div class="nav-shadow">
          </div>
          <div class="main-content">
            <!-- End get_header -->
            <h2>Runway</h2>
            <?php
              foreach(glob('uploadedimages/*') as $image)   
              {     
                //echo "Filename: " . $image . "<br />";
                echo "<img src=\"$image\" \/>";
              }
            ?>    
          </div>
          <div class="extra-content">
        </div>
      </div>
  </body>

