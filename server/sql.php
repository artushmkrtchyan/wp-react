<?php

function sqldata($sql){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "react";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$result = $conn->query($sql);
	$data = array();
	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
					$data[] = $row;
	    }
	}
	$conn->close();
	return $data;
}
?>
