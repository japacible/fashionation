<?php
  if(!isset($_COOKIE['usr'])){
    echo("<script>top.location.href='./'</script>");
  }
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
      <script src="assets/js/modernizr-2.5.2.js"></script>
      <div class="container">
        <header>
          <h1>fashionation</h1>
        </header>
        <nav>
          <div>
            <h2><a href="home.php" title="Home">HOME</a></h2>
          </div>
          <div>
            <h2><a href="coordi.php" title="Outfit Suggestor">COORDI</a></h2>
          </div>
          <div>
            <h2><a href="resources.php" title="Tutorials">BASICS</a></h2>
          </div>
          <div>
            <h2><a href="runway.php" title="Runway">RUNWAY</a></h2>
          </div>
        </nav>
        <div class="main-container">
          <div class="nav-shadow">
          </div>

