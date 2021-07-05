<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../class/patient.php';

    $database = new Database();
    $db = $database->getConnection();

    
    $items = new Patient($db);


    //Call function according to string query i.e where name variable has been passed or not with url
    $stmt = isset($_GET['name']) ? $items->getPatientsByName($_GET['name']) : $items->getPatients();

    $itemCount = $stmt->rowCount();


    if($itemCount > 0){
        
        $employeeArr = array();
        $employeeArr["body"] = array();
        $employeeArr["itemCount"] = $itemCount;

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "name" => $name,
                "email" => $email,
                "age" => $age,
                "medical_condition" => $medical_condition,
                "contact" => $contact
            );

            array_push($employeeArr["body"], $e);
        }
        echo json_encode($employeeArr);
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>