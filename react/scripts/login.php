<?php

include '../model/User.php';

if(isset($_POST)){

        $user = new User;
        
        $email = $_POST['email'];
        $password = trim($_POST['password']);


         $result = $user->verifyLogin($email);

        if(password_verify($password, $result['password'])){
        
                header('location: http://localhost:3000/music');
        
        } else {
        
                header('location: http://localhost:3000/login');
        }
        
       

}









?>
