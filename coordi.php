<?php include "get_header.php"; ?>

          <script src="assets/js/geolocation.js"></script>
          <script src="assets/js/generateOutfit.js"></script>
          <div class="main-content">
            <div id="wardrobe">
              <div class="article-of-clothing" id="tops">
                <h3>TOPS</h3>
                <p id="tops-error" class="wardrobe-error">You cannot select more than two tops.</p>
              </div>
              <div class="article-of-clothing" id="bottoms">
                <h3>BOTTOMS</h3>
                <p id="bottoms-error" class="wardrobe-error">You cannot select more than one bottom.</p>
              </div>
              <div class="article-of-clothing" id="shoes">
                <h3>SHOES</h3>
                <p id="shoes-error" class="wardrobe-error">You cannot select more than one pair of shoes</p>
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
            <h3 id="weather">
              The current weather in 
              <span class="weather" id="city"></span> is 
              <span class="weather" id="stat"></span> and 
              <span class="weather" id="temp"></span> degrees. 
            </h3>
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
        </div> <!-- end main container -->
      </div>
  </body>
</html>
