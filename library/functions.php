<?php
function sja_debug($item){
    echo '<div style="background:ghostwhite;z-index:99999;margin-left:20px;">';
    echo '<pre>debug:<br>';
    if (is_array($item)){
        print_r($item);
    } elseif (is_object($item)){
        var_dump($item);
    }elseif(is_numeric($item)){
        echo '[numeric: '.$item.']';
    }elseif($item === ''){
        echo '[is empty string]';
    }elseif(is_string($item)){
        echo '[string: '.$item.']';
    }elseif($item === true){
        echo '[item is true]';
    }elseif($item === false){
        echo '[item is false]';
    }else {
        echo '[unknown]';
        echo $item;
        print_r($item);
        var_dump($item);
    }
    echo '<br>------</pre></div>';
}


function array_lookup( $array , $element, $returniffalse = false, $returniftrue = null){
    if ( (!is_array($array)) OR (!isset( $array[$element] )) OR ($array[$element] == "") )
    {
        return $returniffalse;          # Custom Item to Return if any of the tests fails
    }else{
        if ( $returniftrue == null ){
            return $array[$element];        # Return item from element in array
        } else {
            return $returniftrue;           # Custom Item to return instead of item if set
        }
    }
}