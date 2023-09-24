<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once 'PHPMailer/PHPMailer/src/Exception.php';
require_once 'PHPMailer/PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/PHPMailer/src/SMTP.php';
 
$phone = $_POST['PHONE']; 
$firstname = $_POST['NAME']; 
$lastname = $_POST['LASTNAME'];

$email_template = "mail.html"; // Считываем файл разметки
$body = file_get_contents($email_template); // Сохраняем данные в $body
$body = str_replace('%firstname%', $firstname, $body); // Заменяем строку %name% на имя
$body = str_replace('%lastname%', $lastname, $body); // строку %email% на почту
$body = str_replace('%phone%', $phone, $body); // строку %phone% на телефон
// Для более ранних версий PHPMailer
//require_once '/PHPMailer/PHPMailerAutoload.php';
 
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
 
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 2;
 
$mail->Host = 'smtp.yandex.ru';
$mail->Port = 587;
$mail->Username = 'spammailer@yandex.ru';
$mail->Password = 'ggiywwshaekihqaa';
 
// От кого
$mail->setFrom('spammailer@yandex.ru', 'Snipp.ru');		
 
// Кому
$mail->addAddress('dmitrypivovarov.2016@mail.ru', 'Иван Петров');
 
// Тема письма
$mail->Subject = "ddd";
 
// Тело письма
$mail->msgHTML($body);

header("Location: http://localhost:8082/index.html");
 
$mail->send();
?>
