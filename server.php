<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// var_dump($_FILES);

echo json_encode($_FILES);