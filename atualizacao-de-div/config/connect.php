<?php

$host = "localhost";
$user  = "root";
$password = "";
$db = "jquery1";

$connect = mysqli_connect($host, $user, $password, $db);

if(!$connect) {

    echo "Não foi possível conectar ao banco de dados". PHP_EOL;
    exit;
}