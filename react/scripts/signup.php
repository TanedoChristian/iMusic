<?php

include '../model/User.php';


if(isset($_POST)){


        $email = $_POST['email'];
        $password = trim($_POST['password']);

        $user = new User;
         $user->setUserAccount($email, $password);

       header('location: http://localhost:3000/login'); 
        

}



?>
