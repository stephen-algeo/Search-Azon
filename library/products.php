<?php

//ini_set('display_errors', 1);
//error_reporting(E_ALL);


require('../library/dbstart.php');

$searchterm = mysql_real_escape_string($_POST['searchterm']);



//$products = $db->query("SELECT * FROM `amazonsearch`.`products` WHERE title LIKE '%".$searchterm."%' ORDER BY salesrank ", array())->all();
$products = $db->query("SELECT * FROM products WHERE id IN (SELECT productid FROM searchresult WHERE searchterm = '".$searchterm."') ORDER BY salesrank", array())->all();

echo json_encode($products);