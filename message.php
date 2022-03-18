<?php

// lets get all from values

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];
if(!empty($email) && !empty($message)) {// if email and message field is not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){// if user entered email is valid
        $receiver = "test@gmail.com"; // email receiver email adress
        $subject = "From: $name <$email>"; // subject o the email. Subject looks like from: anyemail
        //merging concating all user values inside body variable. \n is used for new line
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards, \n$name";
        $sender = "From: $email"; // sender email 
        if(mail($receiver, $subject, $body, $sender)){
            echo " Your Message is sended";
        } else {
            echo "Sorry, failed to send your message";
        }
    } else {
        echo "Enter a valid email adress!";
    }
}else{
    echo "Email and Password field is required";
}

?>