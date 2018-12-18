<?php
    $email = $_POST['mail'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone = $_POST['number'];
    $textarea = $_POST['message'];
    $subject = "New message from CodingBear from $email";
    $content = "New message from coding-bear.co.uk
        Name: $name 
        Surname: $surname 
        Phone number: $phone 
        Message: $textarea"; 
        
    if( mail("design@kingzgraphics.co.uk", $subject , $content) ){
        echo "wiadomość wysłana pomyślnie";
    } else{
        echo "nie wysłano wiadomości";
    }
?>