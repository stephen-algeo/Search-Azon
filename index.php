<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

?>

<!DOCTYPE html>
<html>
<head>
    <title>Search Amazon</title>
    <!-- Not present in the tutorial. Just for basic styling. -->
    <link rel="stylesheet" href="css/base.css" />
    <!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.0/react-with-addons.js"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.0/JSXTransformer.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
</head>
<body>
<div id="content"></div>

<script type="text/jsx;harmony=true" src="scripts/result.js"></script>
<script type="text/jsx;harmony=true" src="scripts/results-box.js"></script>
<script type="text/jsx;harmony=true" src="scripts/suggestion.js"></script>
<script type="text/jsx;harmony=true" src="scripts/autocomplete.js"></script>
<script type="text/jsx;harmony=true" src="scripts/app.js"></script>

</body>
</html>