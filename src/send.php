<?php
$phone = $_POST['PHONE'];
$firstname = $_POST['NAME'];
$lastname = $_POST['LASTNAME'];
$phone = $_POST['PHONE'];
$headers = 'From: webmaster@example.com';
mail("dmitrypivovarov.2016@mail.ru", "Заявка с сайта", "Имя:".$firstname "Фамилия:".$lastname ". Телефон: ".$phone,$headers);

if(isset($_POST['SEND'])) {
    //validate your inputs and submit the form here
}
header("Location: index.html");

exit();
?>
