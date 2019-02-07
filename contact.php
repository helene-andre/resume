<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_to = 'helene.andre.06@gmail.com';
$email_subject = 'Nouveau message d\'Helene-resume';
$email_body = "Tu as reçu un message de $name, $visitor_email.\n"
            . "Subject: $subject\n"
            . "Message: $message\n";

$success = mail($email_to, $email_subject, $email_body);

$return = ['error' => !$success, 'message' => $success ? 'Super ça a marché!' : 'Oooops!'];

echo json_encode($return);

?>