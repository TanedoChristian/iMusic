<?php

include '../database/database.php';


class User {

        private $connection;

        public function __construct(){
                $database = new Database;
                $this->connection = $database->getConnection();
        }
        
        public function setUserAccount($email, $password){
        

                $sql = "INSERT INTO accounts (email, password) values(:email, :password)";
                $statement = $this->connection->prepare($sql);

                
                $hash = password_hash($password, PASSWORD_DEFAULT);

                $values = [
                        ':email' => $email,
                        ':password' => $hash
                ];

                $statement->execute($values);
        
        }


        public function verifyLogin($email){
        
                $sql = "SELECT * from accounts where email =:email";
                $statement = $this->connection->prepare($sql);

                $statement->bindParam(':email', $email);
                $statement->execute();

                $result = $statement->fetch(PDO::FETCH_ASSOC);

                return $result;
        
        }
}





?>
