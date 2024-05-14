<?php
require '/home/ct512452/vendor/autoload.php';
$client = new \GuzzleHttp\Client();



$response = $client->request('GET', 'https://acuityscheduling.com/api/v1/appointment-types?includeDeleted=false', [
  'headers' => [
    'accept' => 'application/json',
	'authorization' => 'Basic MzE2NzIxNDU6YTBjYTVkZjA2YjE2ZmQ1NGIzZDc2NGJkMDQ0Y2QyMzc=',
  ],
]);

$resp=$response->getBody();
$resp1=json_decode($resp);
$resp2=json_decode(json_encode($resp1), true);


$appoint=[];


echo '<!-- Services -->
      <div class="step services" data-title="services">
        <!-- Title -->
        <div class="services-title booking-title">Choose a Service</div>

        <!-- List -->
        <div class="services-list">';

foreach ($resp2 as $resp3){
	

$id='';
$name='';
$description='';
$duration='';
$price='';

$category='';
$private='';
$type='';
$image='';
	
$id=$resp3['id'];
$name=$resp3['name'];
$description=$resp3['description'];
$duration=$resp3['duration'];
$price=$resp3['price'];

$category=$resp3['category'];
$private=$resp3['private'];
$type=$resp3['type'];
$image=$resp3['image'];


if (!in_array($category, $appoint)) {
array_push($appoint, $category);
}

//echo '<tr><td>'.$id.'</td><td>'.$name.'</td><td>'.$description.'</td><td>'.$duration.'</td><td>'.$price.'</td><td>'.$category.'</td><td>'.$private.'</td><td>'.$type.'</td><td>'.$image.'</td><td></tr>';
	
	
}




foreach ($appoint as $appoint1){
	
$appoint2=[];	
$minprice=0;
foreach ($resp2 as $resp3){
$appoint3=[];	

$id='';
$name='';
$description='';
$duration='';
$price='';

$category='';
$private='';
$type='';
$image='';
$active='';
	
$id=$resp3['id'];
$name=$resp3['name'];
$description=$resp3['description'];
$duration=$resp3['duration'];
$price=explode(".",$resp3['price'])[0];

$category=$resp3['category'];
$private=$resp3['private'];
$type=$resp3['type'];
$image=$resp3['image'];
$active=$resp3['active'];


if ($appoint1==$category){

if ($price<$minprice and $active==1 or $minprice==0 and $active==1){$minprice1=$price;$minprice=$price;}	
	
//echo '<tr><td>'.$id.'</td><td>'.$name.'</td><td>'.$description.'</td><td>'.$duration.'</td><td>'.$price.'</td><td>'.$category.'</td><td>'.$private.'</td><td>'.$type.'</td><td>'.$image.'</td><td></tr>';



array_push($appoint3, $id,$name,$price,$image);
array_push($appoint2, $category, $appoint3);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

//echo '<tr><td>'.$id.'</td><td>'.$name.'</td><td>'.$description.'</td><td>'.$duration.'</td><td>'.$price.'</td><td>'.$category.'</td><td>'.$private.'</td><td>'.$type.'</td><td>'.$image.'</td><td></tr>';
	
	
}	
	

if ($appoint1=="Date Night Package" or  $appoint1=="Garage Party" or $appoint1=="Mother's Day Package (Saturday & Sunday, May 11-12)" or  $appoint1=="Standard Beer Therapy Room" or  $appoint1=="Test")
{

echo ' 
          <!-- Item -->
          <div class="service services__item">
            <div class="service-head">
              <div class="service-head__icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span class="service-head__value">Ideal for couples</span>
            </div>

            <div class="service-body">
              <div class="service-title">'.$appoint1.'</div>
              <div class="service-options booking-list">
                <div class="service-options__item booking-list__item">90-minute session</div>
                <div class="service-options__item booking-list__item">Romantic private spa suite</div>
                <div class="service-options__item booking-list__item">Beverage credit or sparkling wine</div>
              </div>
            </div>

            <div class="service-footer">
              <div class="service-price">Starts from <span>$'.$minprice1.'</span> for up to 2 adults</div>
              <button class="service-btn link-btn dark booking-btn">Select</button>
            </div>
          </div>';

}


	
}



echo '</div>
      </div>';








echo '  <!-- Packages -->
      <div class="step packages" data-title="package">
        <!-- Title -->
        <div class="packages-title booking-title">Choose a packages</div>

        <!-- List -->
        <div class="packages-list">';






foreach ($appoint as $appoint1){
	
$appoint2=[];	
$minprice=0;
foreach ($resp2 as $resp3){
$appoint3=[];	

$id='';
$name='';
$description='';
$duration='';
$price='';

$category='';
$private='';
$type='';
$image='';
	
$id=$resp3['id'];
$name=$resp3['name'];
$description=$resp3['description'];
$duration=$resp3['duration'];
$price=explode(".",$resp3['price'])[0];

$category=$resp3['category'];
$private=$resp3['private'];
$type=$resp3['type'];
$image=$resp3['image'];


if ($appoint1==$category){


	
//echo '<tr><td>'.$id.'</td><td>'.$name.'</td><td>'.$description.'</td><td>'.$duration.'</td><td>'.$price.'</td><td>'.$category.'</td><td>'.$private.'</td><td>'.$type.'</td><td>'.$image.'</td><td></tr>';


	
	echo ' <!-- Item -->
          <div class="package pc1">
		  <input class="ccatval1" type="hidden" value="'.$category.'">
            <div class="package-body">
              <div class="package-image">
                <img src="'.$image.'" alt="">
              </div>

              <div class="package-title">'.$name.' ('.$id.')</div>

              <div class="package-list booking-list">
                <div class="package-list__item booking-list__item">Exclusive 90-minute access to your own private Beer Therapy™ Room</div>
                <div class="package-list__item booking-list__item">Includes a personal beer bath, infrared sauna, and rain shower</div>
                <div class="package-list__item booking-list__item">Complete with romantic candles, rose petals, and gourmet chocolates, & sparkling wine</div>
              </div>
            </div>

            <div class="package-footer">
              <div class="package-price">
                <span class="package-price__value">$'.$price.'.00</span>
                <span class="package-price__caption">for 2 adults</span>
              </div>

              <button class="package-btn link-btn dark booking-btn">Book</button>
            </div>
          </div>';
	
	
	
	
	
	
	
	
	
	
	
	
}

	
}	
	
	
}

echo '</div>
      </div>';





echo '  <!-- Addons -->
      <div class="step addons" data-title="additional services">
        <!-- Title -->
        <div class="addons-title booking-title">Add to your appointment</div>

        <!-- List -->
        <div class="addons-list">';
		
		
		
		
		
$response = $client->request('GET', 'https://acuityscheduling.com/api/v1/appointment-addons', [
  'headers' => [
    'accept' => 'application/json',
	'authorization' => 'Basic MzE2NzIxNDU6YTBjYTVkZjA2YjE2ZmQ1NGIzZDc2NGJkMDQ0Y2QyMzc=',
  ],
]);


$respp=$response->getBody();
$respp1=json_decode($respp);
$respp2=json_decode(json_encode($respp1), true);

$resppp3=[];
foreach ($respp2 as $respp3){
$resppp31=[];	
	
	
	$id=$respp3['id'];
	$name=$respp3['name'];
	$duration=$respp3['duration'];
	$price=$respp3['price'];
	$active=$respp3['active'];
	




echo '  
		  
		  <!-- Item -->
          <div class="addon">
            <div class="addon-image">
              <img src="https://oakwell.com/wp-content/uploads/2023/07/lr-img-3.webp" alt="">
            </div>
            
            <div class="addon-info">
              <div class="addon-head">
                <div class="addon-title">'.$name.' ('.$id.')</div>

                <div class="addon-checkbox">
                  <svg class="addon-checkbox_inactive" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="black"/>
                  </svg>
                  <svg class="addon-checkbox_active" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z" fill="#0C5947"/>
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="#0C5947"/>
                    <path d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z" fill="#DDF2D0"/>
                  </svg>
                </div>
              </div>

              <div class="addon-descr">
                Elevate your celebration with a bottle of Crémant d\'Alsace
              </div>

              <div class="addon-price">
                <span class="addon-price__value">+ $'.$price.'.00</span>
                <span class="addon-price__caption">per item</span>
              </div>
            </div>
          </div>

          ';


	
	
}	





	
		
		
		
		
		
		echo '	
        </div>

        <!-- Note -->
        <div class="note addons-note">
          <div class="note-title booking-title">Alcohol & Non-Alcoholic Beverages</div>
          <div class="note-descr ff-dm-sans">Beverages are available for purchase in our taproom and will be charged by the ounce</div>
        </div>

        <!-- Continue button -->
        <button class="addons-btn link-btn dark booking-btn">Continue</button>
      </div>
	  ';

?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>

$( document ).ready(function() {
$( "body" ).on( "click", ".service-btn", function() {

$('.pc1').show();	
	
if ($('.logs-step__title-value').eq(0).text()=='Choose a Service'){	
$('.logs-step__title-value').eq(0).closest('.logs-step').children('.inss1').text($(this).closest('.services__item').children().find('.service-title').text());


$('.ccatval1').each(function() {
if ($('.logs-step__title-value').closest('.logs-step').children('.inss1').text()!=$(this).val() && $('.logs-step__title-value').text()=='Choose a Service'){$(this).closest('.pc1').hide();}	
});

}

});



$( "body" ).on( "click", ".package-btn", function() {

	
if ($('.logs-step__title-value').eq(1).text()=='Choose a packages'){	
$('.logs-step__title-value').eq(1).closest('.logs-step').children('.inss1').text($(this).closest('.package').children().find('.package-title').text());


$('.ccatval1').each(function() {
if ($('.logs-step__title-value').closest('.logs-step').children('.inss1').text()!=$(this).val() && $('.logs-step__title-value').text()=='Choose a packages'){$(this).closest('.pc1').hide();}	
});

}

});




});
</script>