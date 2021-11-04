<?php
header('Content-type: application/json');
switch($_SERVER['REQUEST_METHOD']){
    
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);
        // sanitize input
        $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
        $name = filter_var($params->name, FILTER_SANITIZE_STRING);
        $phone = filter_var($params->phone, FILTER_SANITIZE_STRING); 
        $message = filter_var($params->message, FILTER_SANITIZE_STRING);
        $message = wordwrap($message, 70);
        $recipient = 'philip.mahlberg@hotmail.com';
        $subject = 'PORFOLIO CONTACT REQUEST';
        $headers = "From: $name <$email>";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}