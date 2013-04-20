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
          <div class="main-content" style="width: 900px !important; margin-right: 10px">
            <!-- End get_header -->
            <div id="runway">
              <h3>Runway</h3>
              <div id="userimages">
                <?php
                  foreach(glob('uploadedimages/*') as $image)   
                  {     
                    //echo "Filename: " . $image . "<br />";
                    echo "<div style=\"width: 200px; float: left; 
                          margin-right: 10px; margin-bottom: 10px;\">
                      <img src=\"$image\" style=\"max-width: 100%;\" \/>
                      </div>";
                  }
                ?>    
              </div>
            </div>
          </div>
        </div>
      </div>
  </body>

