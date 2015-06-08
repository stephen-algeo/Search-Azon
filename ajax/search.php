<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);



require('/home2/twtrlink/public_html/algeo.me/search/library/amazon.php');
require('/home2/twtrlink/public_html/algeo.me/search/library/functions.php');



$amazon = new fdev_amazon(false);
$result=array();
$result = array_merge($result,$amazon->keyword_search("black dress", 1));
$result = array_merge($result,$amazon->keyword_search("red dress", 1));
$result = array_merge($result,$amazon->keyword_search("maxi dress", 1));

//echo json_encode($result);

?>

<table>
    <thead>

    </thead>
    <tbody>
    <?php foreach($result as $key => $item) { ?>
        <tr>
           <td><?php echo array_lookup($item, 'asin',''); ?></td>
           <td><?php echo array_lookup($item, 'price',''); ?></td>
           <td style="border:1px solid purple;">
               <img src="<?php echo array_lookup($item, 'image',''); ?>">
           </td>
           <td><a href="<?php echo array_lookup($item, 'detailpage',''); ?>">More Details</a></td>
           <td><pre><?php print_r($item, true); ?></pre></td>
        </tr>
    <?php } ?>
    </tbody>
</table>