<html>
<head>
    <meta http-equiv="refresh" content="4; url='index.html'">
</head>
<body style="background-color: #262626">

<?php

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email =$_POST["email"];
$text =$_POST["subject"];
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

$sql = "INSERT INTO contactus (firstname, lastname, email, text)
VALUES ('$firstname','$lastname','$email','$text')";

if ($conn->query($sql) === TRUE) {
    echo " ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>



<?php echo "<h1 style='text-align: center;color: red;margin-top:20%'> Thank you for contacting us</h1>" ?>
<?php echo "<h1 style='color: red;text-align: center'> Your message has been received </h1>" ?>
<?php //echo " <div style='margin: 5% 10%;border: solid 1px red;padding: 10px'><h4>YOUR RESPONSE:</h4>"
//    ."<table><tr><td>NAME: </td><td>".$firstname." ".$lastname." </td></tr>"
//    ."<tr><td> EMAIL: </td><td>".$email."</td></tr>"
//    ."<tr><td>SUBJECT : </td><td>".$text."</td></tr></table></div>" ?>
<?php //echo "<br><div style='text-align: center'><a style='border: red 2px solid;background-color: red;border-radius: 5px;color: white' href='index.html'>BACK</a></div>";?>
</body>
</html>