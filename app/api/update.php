<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config/database.php';
    include_once '../class/patient.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $item = new Patient($db);
    
    $data = json_decode(file_get_contents("php://input"));
    
    $item->id = $data->id;
    
    // patient values
    $item->name = $data->name;
    $item->email = $data->email;
    $item->age = $data->age;
    $item->medical_condition = $data->medical_condition;
    $item->contact = $data->contact;
    
    if($item->updatePatient()){
        echo json_encode("Patient data updated.");
    } else{
        echo json_encode("Data could not be updated");
    }
?>