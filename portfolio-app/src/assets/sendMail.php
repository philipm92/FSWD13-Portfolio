<?php
header("Header set Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE");   
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, X-Requested-With, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization");
header("Content-Type: application/json; charset=UTF-8");    

function debug_to_console($data) {
    $output = $data;
    if (is_array($output)) {
        $output = implode(',', $output);
        echo "<script>console.log('$output');</script>";
    }
    elseif (is_string($output)) echo '<script>console.log("'.$output.'");</script>';
	else echo "<script>console.log('$output');</script>";
}

function formatted_dump($obj, $print_to_console=FALSE) {
	if ($print_to_console) debug_to_console($obj);
	else echo "<pre>". var_dump($obj) ."</pre>";
}

debug_to_console($_POST);
// switch($_SERVER['REQUEST_METHOD']){
    
//     case("OPTIONS"): //Allow preflighting to take place.
//         // header("Access-Control-Allow-Origin: *");
//         // header("Access-Control-Allow-Methods: POST");
//         // header("Access-Control-Allow-Headers: content-type");
//         exit;
//     case("POST"): //Send the email;
//         // header("Access-Control-Allow-Origin: *");
//         // header("Access-Control-Allow-Headers: Content-Type, origin");
//         $json = file_get_contents('php://input');
//         $params = json_decode($json);
//         // sanitize input
//         $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
//         $name = filter_var($params->name, FILTER_SANITIZE_STRING);
//         $phone = filter_var($params->phone, FILTER_SANITIZE_STRING); 
//         $message = filter_var($params->message, FILTER_SANITIZE_STRING);
//         $message = wordwrap($message, 70);
//         $recipient = 'philip.mahlberg@hotmail.com';
//         $subject = 'PORFOLIO CONTACT REQUEST';
//         $headers = "From: $name";

//         mail($recipient, $subject, $message, $headers);
//         break;
//     default: //Reject any non POST or OPTIONS requests.
//         header("Allow: POST", true, 405);
//         exit;
// }