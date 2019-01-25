<html>
<body>
<?php
$name = $_POST["Name"];
$onderwerp = $_POST["onderwerp"];
$date = $_POST["date"];
$message = $_POST["message"];

echo "<p>op $date klikte $name op het versturen van een bericht over $onderwerp met de volgende inhoud:<br>$message</p>";
    
    ?>

    
</body>
</html>