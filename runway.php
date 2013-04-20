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
      <style>
        #SuccessMessageUpload {
          position: absolute;
          top: 40%;
          bottom: 40%;
          left: 40%;
          right: 40%;
          width: 20%;
          height: 20%;
          background-color: rgba(50,200,50,0.95);
          padding: 1em;
        }
    </style>
  </head>

  <body>
      <script src="http://code.jquery.com/jquery-latest.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/imageEnlarge.js"></script>
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
          <div class="main-content" style="width: 900px !important; margin-right: 10px">
            <!-- End get_header -->
            <div id="runway">
              <h3>Runway</h3>
              <div id="userimages">
                <?php
                  foreach(glob('uploadedimages/*') as $image)   
                  {     
                    //echo "Filename: " . $image . "<br />";
                    echo "<div style=\"height: 150px; float: left; 
                          margin-right: 10px; margin-bottom: 10px;\">
                      <img src=\"$image\" style=\"max-height: 100%; cursor:pointer;\" 
                          onclick=\"showImage('$image');\" \/>
                      </div>";
                  }
                ?>    
              </div>
              <div id="largeImgPanel" onclick="hideMe(this);">
                <img id="largeImg" style="height: 75%; margin: 0; padding: 0;" />
                <div id="outfit-buttons">
                  <div class="outfit-button" id="dislike">
                    Dislike
                  </div>
                  <div class="outfit-button" id="like">
                    Like
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <?php 
        if(isset($_GET["success"])) {?>
        <div id="SuccessMessageUpload">
          Your file was uploaded successfully! (Click this message box to hide.)
        </div>
        <?php } ?>
      </div>
  </body>