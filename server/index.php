<?php
require_once("sql.php");

$sql = "SELECT * FROM posts";
var_dump(sqldata($sql));
// if($_POST['first_name']){
// 	$response = ["succsess" => "true", "data" => "ekav"];
// 	echo json_encode($response);
// }
?>
