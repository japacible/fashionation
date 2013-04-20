<?php
  include 'connect.php';

  $table_name=$_GET['table'];
  
  //switch($table_name){
  //  case 'up':
  //  case 'bottom':
  //  case 'shoes':
  //  case 'colors':
  //  break;
  //  default:
  //  return;
  //}

  if($table_name != 'tops' && $table_name != 'bottoms' && 
      $table_name != 'shoes' && $table_name != 'colors' && $table_name != 'outfits')
  { 
    print("wrong table name");
    return;
  }

  connect();
  $response = mysql_query('SELECT * from ' . $table_name . ';');


  $rows = array();
  while ($row = mysql_fetch_assoc($response)){
    array_push($rows, $row);
  }
  //var_dump($rows);
  echo json_encode($rows);
?>
