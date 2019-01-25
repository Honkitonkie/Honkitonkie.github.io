<html>
<body>
<?php 
$testposteen = $_POST["volgende"]; 
$testposttwee =$_POST["vorige"];

$omhoooooog = 0;
?>

    
    
    
    
Hoi <?php echo $testposteen; ?><br>
bij het tweede ding zei je:<?php echo $testposttwee; ?>

           
omhoog = 
    <?php

if (isset($_POST['volgende'])){
        $omhoooooog++;
    };
if (isset($_POST['vorige'])){
        $omhoooooog--;
    };
           echo $omhoooooog;
    ?>
    
</body>
</html>