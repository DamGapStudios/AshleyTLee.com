<?php
///**
// * Created by IntelliJ IDEA.
// * User: Adunh
// * Date: 5/16/2017
// * Time: 11:51 AM
// */
//
//$name = $_POST["name"];
//$email = $_POST["email"];
//$message = $_POST["message"];
//
//$EmailTo = "adunham95@gmail.com";
//$Subject = "New Message Received";
//
//// prepare email body text
//$Body .= "Name: ";
//$Body .= $name;
//$Body .= "\n";
//
//$Body .= "Email: ";
//$Body .= $email;
//$Body .= "\n";
//
//$Body .= "Message: ";
//$Body .= $message;
//$Body .= "\n";
//
//// send email
//$success = mail($EmailTo, $Subject, $Body, "From:".$email);
//
//// redirect to success page
//if ($success){
//    echo "success";
//}else{
//    echo "invalid";
//}
//
//?>

<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "adunham95@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: http://ashleytlee.dev"); /* Redirect browser */
exit();
?>
