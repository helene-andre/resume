<?php


// $nameErr = $visitor_emailErr = $subjectErr = $messageErr = ';
// $name = $visitor_email = $subject = $message = ';


// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//   if (empty($_POST['name'])) {
//     return false;
//   } 
//   else {
//     $name = test_input($_POST['name']);
//     if (!preg_match('/^[a-zA-Z ]*$/',$name)) {
//       $nameErr = 'Only letters and white space allowed'; 
//     }
//   }
  
//   if (empty($_POST['email'])) {
//     $visitor_emailErr = 'Email is required';
//   } else {
//     $visitor_email = test_input($_POST['email']);
//     if (!filter_var($visitor_email, FILTER_VALIDATE_EMAIL)) {
//       $visitor_emailErr = 'Invalid email format'; 
//     }
//   }

//   if (empty($_POST['subject'])) {
//     $subject = '';
//   } 
//   else {
//     $subject = test_input($_POST['subject']);
//   }

//   if (empty($_POST['message'])) {
//     $message = '';
//   } else {
//     $message = test_input($_POST['message']);
//   }
// }

// function test_input($data) {
//   $data = trim($data);
//   $data = stripslashes($data);
//   $data = htmlspecialchars($data);
//   return $data;
// }
// $name = $_POST['name'];
// $visitor_email = $_POST['email'];
// $subject = $_POST['subject'];
// $message = $_POST['message'];

// $email_from = 'Helene-resume';
// $email_subject = 'Nouveau message d\'Helene-resume';
// $email_body = "Tu as reçu un message de $name, $visitor_email.\n".
//               "Le voici :\n". 
//               "Subject: $subject\n".
//               "Message: $message\n".

//   $to = 'helene.andre.06@gmail.com';
 
//   mail($to, $email_subject, $email_body);

echo "ok";
?>