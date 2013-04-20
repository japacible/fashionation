<?php
  include "tutorial_footer.php";
  include "get_header.php";
?>
  <style>
    #dislike, #like {
        z-index: 1003;
    }
  </style>
      <script src="assets/js/imageEnlarge.js"></script> 
      <script src="assets/js/generateRunway.js"></script> 
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
              <div style="clear: both;">
                <h3>Upload</h3>
                <p style="color: black;">Upload your own image <strong><a href="fileupload.php">here!</a></strong></p>
              </div>
              <div id="largeImgPanel" >
                <img id="largeImg" style="height: 75%; margin: 0; padding: 0;" />
                <div id="outfit-buttons">
                  <div class="outfit-button" id="dislike">
                    Dislike
                  </div>
                  <div class="outfit-button" id="like">
                    Like
                  </div>
                  <div style="clear: both;">Current Likes: <span id="currentLikes"></span> <br/>Current Dislikes: <span id="currentDislikes"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <?php 
              if(isset($_GET["success"])) {?>
              <div id="SuccessMessageUpload">
                Your file was uploaded successfully!
              </div>
              <?php } ?>
      </div>
  </body>
