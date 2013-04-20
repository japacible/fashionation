<?php
      function connect(){
      //Variables for connecting to your database.
      //These variable values come from your hosting account.
      $hostname = "fashionation.db.8481462.hostedresource.com";
      $username = "fashionation";
      $dbname = "fashionation";

      //These variable values need to be changed by you before deploying
      $password = "P@ssw0rd";
      $usertable = "your_tablename";
      $yourfield = "your_field";
      //Connecting to your database


        mysql_connect($hostname, $username, $password) OR DIE ("Unable to
        connect to database! Please try again later.");
        mysql_select_db($dbname);


      }

      //Fetching from your database table.
//      $query = "SELECT * FROM $usertable";
//      $result = mysql_query($query);
//
//      if ($result) {
//          while($row = mysql_fetch_array($result)) {
//              $name = $row["$yourfield"];
//              echo "Name: $name<br>";
//          }
//      }
?>
