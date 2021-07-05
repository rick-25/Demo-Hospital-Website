<?php
    class Patient{

        // Connection
        private $conn;

        // Table
        private $db_table = "Patient";

        // Columns
        public $id;
        public $name;
        public $email;
        public $age;
        public $medical_condition;
        public $contact;


        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getPatients(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        public function getPatientsByName($iname) {
            $sqlQuery = "SELECT * FROM " . $this->db_table . " where name LIKE '" . $iname . "%'";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE
        public function createPatient(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        name = :name, 
                        email = :email, 
                        age = :age, 
                        medical_condition = :medical_condition, 
                        contact = :contact";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->age=htmlspecialchars(strip_tags($this->age));
            $this->medical_condition=htmlspecialchars(strip_tags($this->medical_condition));
            $this->contact=htmlspecialchars(strip_tags($this->contact));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":age", $this->age);
            $stmt->bindParam(":medical_condition", $this->medical_condition);
            $stmt->bindParam(":contact", $this->contact);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // READ single
        public function getSinglePatient(){
            $sqlQuery = "SELECT
                        *
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->name = $dataRow['name'];
            $this->email = $dataRow['email'];
            $this->age = $dataRow['age'];
            $this->medical_condition = $dataRow['medical_condition'];
            $this->contact = $dataRow['contact'];
        }        

        // UPDATE
        public function updatePatient(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        name = :name, 
                        email = :email, 
                        age = :age, 
                        medical_condition = :medical_condition, 
                        contact = :contact
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->age=htmlspecialchars(strip_tags($this->age));
            $this->medical_condition=htmlspecialchars(strip_tags($this->medical_condition));
            $this->contact=htmlspecialchars(strip_tags($this->contact));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":age", $this->age);
            $stmt->bindParam(":medical_condition", $this->medical_condition);
            $stmt->bindParam(":contact", $this->contact);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE
        function deletePatient(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
