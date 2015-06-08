<?php

//ini_set('display_errors', 1);
//error_reporting(E_ALL);
require('../library/dbstart.php');

$products = $db->select('products', '*', null, 'salesrank')->all();


//public function select ( $table, $fields = '*', $where = null, $order = null, $limit = null ) {

echo json_encode($products);