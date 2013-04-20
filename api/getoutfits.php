<?php
  include 'connect.php';

  $top1 = $_GET['top1'];
  $top2 = $_GET['top2'];
  $bottom = $_GET['bottom'];
  $shoe = $_GET['shoe'];

  if(empty($top1) && !empty($top2))
  {
    $top1 = $top2;
    $top2 = "";
  }

  $query = "SELECT * FROM outfits ";
  if(!empty($top1) || !empty($top2) || !empty($bottom) || !empty($shoe)){
    $query .= 'WHERE';
  }else{

    connect();
    $response = mysql_query($query);
    $rows = array();
    
    while ($row = mysql_fetch_assoc($response)){
      array_push($rows, $row);
    }
   
    print(json_encode($rows[rand(0, count($rows) - 1)]));
    return;

  }
  $have_and = False;
  if(!empty($top1) && !empty($top2)){
    $have_and = True;
    $query .= "((top1 = '$top1' AND top2='$top2') OR (top1 = '$top2' and top2 = '$top1'))";
  }else if(!empty($top1)){
    $have_and = True;
    $query .= "(top1 = '$top1' OR top2 = '$top1')";
  }

  if(!empty($bottom)){
    if($have_and){
      $query .= " AND ";
    }
    $query .= "(bottom='$bottom')";
  }

  if(!empty($shoe)){
    if($have_and){
      $query .= " AND ";
    }
    $query .= "(shoe='$shoe')";
  }
  
  //print($query);

  connect();
  $response = mysql_query($query);
  $rows = array();
  
  while ($row = mysql_fetch_assoc($response)){
    array_push($rows, $row);
  }
  //var_dump($rows);
  echo json_encode($rows);

?>
