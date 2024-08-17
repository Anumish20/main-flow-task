<?php
$servername = "127.0.0.1";
$username = "root"; 
$password = ""; 
$database = "login"; 


$conn = new mysqli($servername, $username, $password, $database, 3307);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

