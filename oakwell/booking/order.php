<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');

if ( strtolower($_SERVER['REQUEST_METHOD'] ) == 'options') {
  exit();
}

require '/home/ct512452/vendor/autoload.php';
$client = new \GuzzleHttp\Client();


$userID = '31672145';
$key = 'a0ca5df06b16fd54b3d764bd044cd237';

$acuity = new AcuityScheduling(array(
  'userId' => $userID,
  'apiKey' => $key
));


//need service acc with rights from read data from GA4, instalation from google console

// $datesr230=date('Y-m-d',time()-3600*24*30);
// $datenow=date('Y-m-d',time());

// $datesr2=date('Ymd',time()-3600*24*10);
// $datesr20=date('Ymd',time()-3600*24*3);

// $datesr1=date('Ymd',time()-3600*24*1);



$appointmentTypeID = $_POST['appointmentTypeID'];
$datetime = $_POST['datetime'];
$price = $_POST['price'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$zip = $_POST['zip'];



$appointmentTypeID = 22529967;
$datetime = '2024-05-29 08:30 AM';
$price = 249;
$firstname = 'test';
$lastname = 'test1';
$phone = '+1-111-111-1111';
$email = 'test@test.ua';
$zip = 10001;


$appointment = $acuity->request('/appointments', array(
  'method' => 'POST',
  'data' => array(
    'appointmentTypeID' => $appointmentTypeID,
    'datetime'          => $datetime,
    'firstName'         => $firstname,
    'lastName'          => $lastname,
    'phone'             => $phone,
    'email'             => $email,
    'fields'=> array(
      array('id'=> 9708856, 'value'=> $zip),
      array('id'=> 9708843, 'value'=> 'yes')
    )
    // 'fields'=> array(array('id'=> 9708856, 'value'=> '80220'),array('id'=> 9708843, 'value'=> 'yes'),array('id'=> 10116087, 'value'=> '-'))
  )
));

print_r('testik');
print_r($appointment);

$id1 = $appointment['id'];
$firstName1 = $appointment['firstName'];
$lastName1 = $appointment['lastName'];
$phone1 = $appointment['phone'];
$email1 = $appointment['email'];
$price1 = $appointment['price'];

$res = array(
  'id' => $id1,
  'firstName' => $firstName1,
  'lastName' => $lastName1,
  'phone' => $phone1,
  'email' => $email1,
  'price' => $price1,
  'log' => 'Data received successfully'
);



exit(json_encode($res));

// Response example <$appointment>

// Array ( 
//   [id] => 1261912502 
//   [firstName] => test 
//   [lastName] => test1 
//   [phone] => +11111111111 
//   [email] => test@test.ua 
//   [date] => May 29, 2024 
//   [time] => 8:30am 
//   [endTime] => 10:00am 
//   [dateCreated] => May 15, 2024 
//   [datetimeCreated] => 2024-05-15T15:28:57-0500 
//   [datetime] => 2024-05-29T08:30:00-0600 
//   [price] => 189.00 
//   [priceSold] => 189.00 
//   [paid] => no 
//   [amountPaid] => 0.00 
//   [type] => Standard Beer Therapyв„ў Room 
//   [appointmentTypeID] => 22529967 
//   [classID] => 
//   [addonIDs] => Array ( ) 
//   [category] => Standard Beer Therapy Room
//   [duration] => 90
//   [calendar] => Beer Therapy Room #1
//   [calendarID] => 4594231
//   [certificate] =>
//   [confirmationPage] => https://app.acuityscheduling.com/schedule.php?owner=20950027&action=appt&id%5B%5D=5415e9e642ff376379b9d5501ea2b3ed
//   [confirmationPagePaymentLink] => https://app.acuityscheduling.com/schedule.php?owner=20950027&action=appt&id%5B%5D=5415e9e642ff376379b9d5501ea2b3ed&paymentLink=true#payment
//   [location] => 3004 N Downing St, Denver, CO, 80205
//   [notes] =>
//   [timezone] => America/Denver
//   [calendarTimezone] => America/Denver
//   [canceled] =>
//   [canClientCancel] => 1
//   [canClientReschedule] => 1
//   [labels] =>
//   [forms] => Array (
//     [0] => Array (
//       [id] => 1746651
//       [name] =>
//       [values] => Array (
//         [0] => Array (
//           [id] => 5065275133
//           [fieldID] => 9708856
//           [value] => 10001
//           [name] => Zip Code 
//         )
//         [1] => Array (
//           [id] => 5065275134
//           [fieldID] => 9708843
//           [value] => yes
//           [name] => Check below to indicate that you have read and agree with Oakwell Beer Spa's cancellation policy, no-show policy, terms & conditions, electronic communications, and privacy policy. 
//         )
//       )
//     )
//     [1] => Array (
//       [id] => 1820778
//       [name] => Referral Source
//       [values] => Array (
//         [0] => Array (
//           [id] => 5065275135
//           [fieldID] => 10100394
//           [value] =>
//           [name] => Source
//         )
//       )
//     )
//   )
//   [formsText] => Name: test test1 Phone: +11111111111 Email: test@test.ua Price: $189.00 Location ============ 3004 N Downing St, Denver, CO, 80205 ============ Zip Code: 10001 Check below to indicate that you have read and agree with Oakwell Beer Spa's cancellation policy, no-show policy, terms & conditions, electronic communications, and privacy policy.: yes Referral Source ============ Source:
//   [isVerified] =>
//   [scheduledBy] => mikhail@conversionrate.store 
// )



/*
$appointment = $acuity->request('/appointments', array(
  'method' => 'POST',
  'data' => array(
    'appointmentTypeID' => 22529967,
    'datetime'          => '2024-03-18T09:30:00-0600',
    'firstName'         => 'Bob',
    'lastName'          => 'McTest',
    'email'             => 'kraft33@rambler.ru',
  'phone'             => '8016916663',
//  'fields'=> array(array('id'=> 9708856, 'value'=> '80220'),array('id'=> 9708843, 'value'=> 'yes'),array('id'=> 10116087, 'value'=> '-'))
  'fields'=> array(array('id'=> 9708856, 'value'=> '80220'),array('id'=> 9708843, 'value'=> 'yes'))
  )
));
*/