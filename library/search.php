<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

require('dbstart.php');
require('amazon.php');
require('functions.php');

$searchterm = $_POST['searchterm'];

$amazon = new fdev_amazon(false);
//$result=array();

echo '<pre>';

for ($i=1;$i<=5;$i++){

    $result = $amazon->keyword_search($searchterm, $i);

    foreach($result as $product){

        $dbprod = array();
        $dbprod['image'] = (string)$product->SmallImage->URL;
        $dbprod['title'] = (string)$product->ItemAttributes->Title;
        $dbprod['asin'] = (string)$product->ASIN;
        $rank = (int)$product->SalesRank;
        $dbprod['salesrank'] = $rank == 0 ? 99999999 : $rank;

//        var_dump($dbprod['salesrank']);


        $db->create('products', $dbprod);
    }
//    exit;
}