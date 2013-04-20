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
              <section>
                <form action="result.php" method="post" enctype="multipart/form-data">
                    <h3>Upload an image:</h3>
                  <input type="file" name="image" />
                  <input id="upload-image-button" type="submit" value="upload image" />
                </form>
              </section>
							<!--Wardrobe-->
	            <div id="wardrobe">
                <section>
                  <h3>What are you wearing?</h3>
	              <div class="article-of-clothing" id="tops">
	              	<h4>TOPS</h4>
	                <p id="tops-error" class="wardrobe-error">You cannot select more than two tops.</p>
	              </div>
	            <div class="article-of-clothing" id="bottoms">
	                <h4>BOTTOMS</h4>
	                <p id="bottoms-error" class="wardrobe-error">You cannot select more than one bottom.</p>
	              </div>
	              <div class="article-of-clothing" id="shoes">
	                <h4>SHOES</h4>
	                <p id="shoes-error" class="wardrobe-error">You cannot select more than one pair of shoes</p>
	              </div>
                </section>
	            </div>

              <!--I want buttons like this for submit!-->
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
            <div class="corgi">
              <img src="assets/img/corgi_monocole_speech.png" alt="Coordi" />
            </div>
            <div class="corgi-help-speech">
              <div class="aoc-preview"> 
                <!-- Katlyn put the paragraph of what the Display name is --> 
                <p>
                  Time to <strong>coordi</strong>nate some awesome outfits! There
                  are two different types ways of generating outfits!
                </p>
                <ol>
                  <li>
                    1. Select some articles of clothing that you wish to coordinate
                       an outfit with, then hit <strong>coordinate</strong>.
                  </li>
                  <li>
                    2. Select <strong>random</strong> for a completely random outfit!
                  </li >
                </ol>
                <p id="aoc-help">
                  Hover over the articles of clothing to get a preview of what it looks like!
                </p>
                <img id="aoc-help-image" src="" alt="" />
              </div>
            </div>
          </div><!-- end extra content-->

          <div class="main-content-2">
            <div class="generated-outfit">
              <div id="generated-outfit-aoc">
                <!--Katlyn the aoc's should go here-->
              </div>
              <div id="generated-outfit-image">
                <!--Katlyn the generated outfit image should go here-->
                <p id="generated-disclaimer">
                  this outfit is to provided give a general idea of the outfit; colors
                  and styles will not match <strong>exactly</strong>
                </p>
                <div id="generated-outfit-buttons">
                  <div class="outfit-button" id="love">
                    &lt;3
                  </div>
                  <div class="outfit-button" id="generate-another">
                    coordinate
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div> <!-- end main container -->
      </div>
  </body>
</html>
