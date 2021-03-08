<?php

require_once './config/connect.php';

$sql = "SELECT * FROM programadores ORDER BY RAND() LIMIT 1";
$result = mysqli_query($connect, $sql);

$dev = mysqli_fetch_array($result, MYSQLI_ASSOC);

if($dev) {

    echo json_encode($dev);
}
