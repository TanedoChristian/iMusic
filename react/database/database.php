<?php


class Database {

        private $connection;

        public function __construct(){
        
                $this->createConnection(); 
        }

        public function createConnection(){
        
                $this->connection = new PDO("mysql:host=localhost;dbname=iMusic", "root", "");
        }

        public function getConnection(){
        
                return $this->connection;
        }


}




?>
