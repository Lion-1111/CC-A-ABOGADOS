<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "contacto@abogados-cca.com"; // Add your email address in between the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
$to2 = "constantinocastroasociados@gmail.com"; // Add your email address in between the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
$subject = "Contacto:  $name";
$body = "Hemos recibido tu correo electronico.\n\n"."A continuacion tus detalles:\nNombre: $name\n\nEmail: $email\n\nTelefono de contacto: $phone\n\nMessage:\n$message";
$header = "From:$name"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
	
if(!mail($to, $subject, $body, $header)){
  return http_response_code(500);
}else{
  if(!mail($to2, $subject, $body, $header)){
    return http_response_code(500);
  }else{
    return http_response_code(200);
  }
}
?>