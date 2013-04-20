<?php

  include 'connect.php';

  connect();
  print(var_dump(mysql_query("CREATE TABLE up (id VARCHAR(50), name VARCHAR(50));")));
  //print(var_dump(mysql_query("INSERT INTO up(id, name) VALUES ('test', 'test2');")));


?>

