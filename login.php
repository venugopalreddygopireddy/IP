<?php
$conn = new mysqli("localhost", "root", "", "lab_exam");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    
    $stmt->bind_result($hashed_password);
    if ($stmt->fetch() && password_verify($password, $hashed_password)) {
        header("Location: welcome.php");
    } else {
        echo "Invalid login. <a href='login.html'>Try again</a>";
    }

    $stmt->close();
}
$conn->close();
?>
