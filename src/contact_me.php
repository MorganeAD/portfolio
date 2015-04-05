<?php
// check if fields passed are empty
if(	empty($_POST['name'])
	||  empty($_POST['email'])
	||  empty($_POST['message'])
	|| !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$phone=$_POST['phone'];
	
// create email body and send it	
$to = 'contact@morganealonso.fr'; // put your email
$email_subject = "Formulaire Portfolio :  $name";
$email_body = 
"\n$message\n".
"-------------------------------------------------------------------------------------------------------\n".
"Nom : $name \n".
"Email : $email_address\n";
if($_POST['phone']!="")
{
	$phone=$_POST['phone'];
	$email_body.="Téléphone : $phone\n";
}
$headers = "From: $email_address\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>