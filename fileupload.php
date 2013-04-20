<!DOCTYPE html>
<html>
  <head>
    <title>fashionation</title>
    <link href="assets/css/reset.css" type="text/css" rel="stylesheet" />
    <link href="assets/css/folksfont.css" type="text/css" rel="stylesheet" />
    <link href="assets/css/style.css" type="text/css" rel="stylesheet" />
    <link href='http://fonts.googleapis.com/css?family=Gentium+Basic:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
  </head>

  <body>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="http://students.washington.edu/apacible/geo/modernizr-2.5.2.js"></script>
      <script src="assets/js/generateRunway.js"></script>
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
          <div class="vertical-ruler"></div>
          <div>
            <h2><a href="resources.html" title="Tutorials">BASICS</a></h2>
          </div>
        </nav>

        <div class="main-container">
          <div class="nav-shadow">
          </div>
          <div class="main-content">
          	<!--File Upload-->
            <form action="result.php" method="post" enctype="multipart/form-data">
				  		Upload an image:
				  		<input type="file" name="image" />
				  		<input type="submit" />
						</form>

						<!--Wardrobe-->
            <div id="wardrobe">
              <div class="article-of-clothing" id="tops">
              </div>
            </div>
            <div id="outfit-buttons">
              <div class="outfit-button" id="generate">
                coordinate
              </div>
              <div class="outfit-button" id="random">
                random
              </div>
            </div>
          </div> <!--end main-content -->
          

          <div class="extra-content">
          </div><!-- end extra content-->

        </div> <!-- end main container -->
      </div>
  </body>
</html>