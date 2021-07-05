<?php 
    class Database {
        private $host = "sql203.epizy.com"; //"localhost" on xampp 
        private $database_name = "epiz_29034246_phpapidb"; 
        private $username = "epiz_29034246"; //"root" on xampp 
        private $password = "FwmExqt7Spl1iPj"; //"" on xampp

        public $conn;

        public function getConnection(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
            }
            return $this->conn;
        }
    }  
?>
