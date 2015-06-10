<?php

    $from = "email@noreply.com";
    $to = "$from";
    $headers = "From: $from";
    $subject = "You have a message.";

    $fields = array();
    $fields{"email"} = "email";
    $fields{"subject"} = "subject";
    $fields{"message"} = "message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
