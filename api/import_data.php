<?php

include 'connect.php';

connect();
//tops(tokenize('top.data'));
//bottom(tokenize('bottoms.data'));
//shoes(tokenize('shoes.data'));
//outfits(tokenize('outfits.data'));

function outfits($tokens){

  //var_dump($tokens);

  for($i = 0; $i < count($tokens) - 1; $i ++){
    $top1 = trim($tokens[$i]);
    $i ++;
    $top2 = trim($tokens[$i]);
    if($top2 == "NULL")
      $top2 = NULL;
    $i ++;
    $bottom = trim($tokens[$i]);
    $i ++;
    $shoes = trim($tokens[$i]);
    $i++;
    $w = intval(trim($tokens[$i]));
    
    //$arr = array($top1, $top2, $bottom, $shoes, $w);
    //print(implode(", ", $arr));
    //print("key: " . $key . " values: " . $values);
    $query = "INSERT INTO outfits(top1, top2, bottom, shoe, weight) VALUES ('".$top1."', ".($top2 == NULL ? "NULL" : ("'".$top2."'")).", '".$bottom."', '".$shoes."', 50);";
      print($query);
    mysql_query($query);
  }

}

function shoes($tokens){

  var_dump($tokens);

  for($i = 0; $i < count($tokens); $i ++){
    $key = trim($tokens[$i]);
    if(empty($key)) continue;
    $i ++;
    $value = trim($tokens[$i]);
    //print("key: " . $key . " values: " . $values);
    mysql_query("INSERT INTO shoes(id, name) VALUES ('".$key."', '".$value."');");
  }
}

function bottom($tokens){
  
  var_dump($tokens);

  for($i = 0; $i < count($tokens); $i ++){
    $key = trim($tokens[$i]);
    if(empty($key)) continue;
    $i ++;
    $value = trim($tokens[$i]);
    //print("key: " . $key . " values: " . $values);
    mysql_query("INSERT INTO bottoms(id, name) VALUES ('".$key."', '".$value."');");
  }
}

function tokenize($file_name){
  
  $file = fopen($file_name, 'r');
  $content = fread($file, filesize($file_name));
  //print($content);
  fclose($file);
  return explode("\n", $content);
}

function tops($tokens){

  for($i = 0; $i < count($tokens); $i ++){
    $key = trim($tokens[$i]);
    if(empty($key)) continue;
    $i ++;
    $value = trim($tokens[$i]);
    //print("key: " . $key . " values: " . $values);
    mysql_query("INSERT INTO tops(id, name) VALUES ('".$key."', '".$value."');");
  }
}



?>
