<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

require('dbstart.php');
require('amazon.php');
require('functions.php');

//echo '<pre>'; # turning this on stops the data being parsed in the main app.

if (!isset($_POST['searchterm'])) {
    $searchterm = 'something';
} else {
    $searchterm = $_POST['searchterm'];
}

$amazon = new fdev_amazon(false);


$total = 0;

for ($i=1;$i<=10;$i++){

    $result = $amazon->keyword_search($searchterm, $i);

    if (!is_array($result)) { echo json_encode($result); exit;}

    foreach($result as $product){

        $asin = (string)$product->ASIN;
        $exists = $db->query('SELECT id FROM products WHERE asin = "'.$asin.'"', array())->fetch();

        if (!$exists) {

            $total++;

            # Add Products
            $dbprod = array();
            $dbprod['image'] = (string)$product->SmallImage->URL;
            $dbprod['title'] = (string)$product->ItemAttributes->Title;
            $dbprod['asin'] = (string)$product->ASIN;
            $rank = (int)$product->SalesRank;
            $dbprod['salesrank'] = $rank == 0 ? 99999999 : $rank;

            $db->create('products', $dbprod);
            $productid = $db->id();

            # Add Search Association
            $result=array();
            $result['searchterm'] = $searchterm;
            $result['productid'] = $productid;
            $db->create('searchresult', $result);

        } else {

            # Exists but add to search term
            $result=array();
            $result['searchterm'] = $searchterm;
            $result['productid'] = $exists->id;
            $db->create('searchresult', $result);
        }

    }
}

echo json_encode(array(
    'searchterm'=>$searchterm,
    'results'=>$total
));