<?php

    $to = $_REQUEST['email'];
    $from = $to;
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Here are your notes.";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"message"} = "message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>