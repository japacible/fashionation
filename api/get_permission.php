 <?php
       $UUID = $_REQUEST["uuid"];

       $app_id = "512943122088423";
       $app_secret = "43058a78af2a69ed0433199504e24709";
       $post_login_url = "http://pingyang.me/fashionation/api/get_permission.php" . (empty($UUID) ? "" : ("?uuid=" . $UUID));
    
       $code = $_REQUEST["code"];	

       //Obtain the access_token with publish_stream permission 
       if(empty($code)){ 
         $state = md5(uniqid(rand(), TRUE));
          $dialog_url= "http://www.facebook.com/dialog/oauth?"
           . "client_id=" .  $app_id 
           . "&redirect_uri=" . urlencode( $post_login_url)
           .  "&scope=publish_stream";
          echo("<script>top.location.href='" . $dialog_url 
          . "'</script>");
         }
        else {
          $token_url="https://graph.facebook.com/oauth/access_token?"
           . "client_id=" . $app_id 
		   . "&redirect_uri=" . urlencode($post_login_url)
           . "&client_secret=" . $app_secret
           . "&code=" . //$code . "&scope=basic_info";
          $response = file_get_contents($token_url);
          $params = null;
          parse_str($response, $params);
          $access_token = $params['access_token'];
          
          print($access_token);

	  //success
	  //print("Success. Please switch back to the program and click 'Try Again'");



         // Show photo upload form to user and post to the Graph URL
//         $graph_url= "https://graph.facebook.com/me/photos?"
//         . "access_token=" .$access_token;
//	 //$graph_url = "http://pingyang.me/facebook/post_sample.php";
//
//         echo '<html><body>';
//         echo '<form enctype="multipart/form-data" action="'
//         .$graph_url .' "method="POST">';
//         echo 'Please choose a photo: ';
//         echo '<input name="source" type="file"><br/><br/>';
//         echo 'Say something about this photo: ';
//         echo '<input name="message" 
//             type="text" value=""><br/><br/>';
//         echo '<input type="submit" value="Upload"/><br/>';
//         echo '</form>';
//         echo '</body></html>';
      }
?>
