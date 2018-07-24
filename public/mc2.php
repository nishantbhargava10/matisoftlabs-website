<html>
<head>
    <meta http-equiv="refresh" content="6; url='index.html'">
</head>
<body style="background-color: #262626">

<?php

$name = $_POST["name"];
$emails =$_POST["emails"];

$servername = "localhost";
$username = "matisoftadmin";
$password = "matisoftadmin9812";
$dbname = "matisoftusers";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO emailus (name,emails)
VALUES ('$name','$emails')";

if ($conn->query($sql) === TRUE) {
    echo " ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>



<?php echo "<h1 style='text-align: center;color: red;margin-top:20%'> Thank you for the response</h1>" ?>
<?php echo "<h1 style='color: red;text-align: center'> Your response has been recorded, mail will be send to you regarding Matisoft antivirus launch.</h1>" ?>

</body>
</html>