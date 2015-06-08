<?php

require 'db.php';
Db::config( 'driver',   'mysql' );
Db::config( 'host',     'localhost' );
Db::config( 'database', 'amazonsearch' );
Db::config( 'user',     'root' );
Db::config( 'password', 'root' );

$db = Db::instance();