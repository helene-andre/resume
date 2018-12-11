<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_from = 'Helene-resume';
  $email_subject = "Nouveau message d'Helene-resume";
  $email_body = "Tu as reçu un message de $name, $visitor_email.\n".
                "Le voici :\n". 
                "Subject: $subject\n".
                "Message: $message\n".



  $to = "helene.andre.06@gmail.com";
 
  mail($to,$email_subject,$email_body);

  echo 'Your message has been sent, thank you!'

?>