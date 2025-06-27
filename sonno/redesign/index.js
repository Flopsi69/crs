console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/sonno/redesign',
  dir: 'https://flopsi69.github.io/crs/sonno/redesign',
  clarity: ['set', 'pdp_imp_2', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lav-trust {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
  }
  .lav-trust__bought {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    background: #E0FEE5;
    padding: 6px 12px 6px 6px;
    color: #1E3851;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .lav-trust__made {
    display: flex;
    align-items: center;
    gap: 11px;
    color: #1E3851;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    padding-right: 25px;
  }

  .lav-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-top: 18px;
  }
  .lav-benefits {
    display: grid;
    gap: 8px;
  }
  .lav-benefits__item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #1E3851;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

  }
  .lav-benefits__image {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 18px;
  }
  .lav-coupon {
    position: relative;
    border-radius: 12px;
    background: #14324B;
    text-align: center;
    color: #fff;
    max-width: 140px;
    width: 100%;
  }
  .lav-coupon:before {
    content: '';
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    left: -9px;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-coupon:after {
    content: '';
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    right: -9px;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-coupon__section {
    padding: 7px;
  }
  .lav-coupon__section span {
    color: #F89201;
  }
  .lav-coupon__top {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    padding-left: 2px;
    padding-right: 2px;
  }
  .lav-coupon__top:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    border-top: 1px dashed #416B93;
  }
  .lav-coupon__bottom {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  .lav-free-delivery {
    border-radius: 12px;
    background: #EAF5FF;
    padding: 6px 4px;
    color: #14324B;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-top: 18px;
  }
  .lav-free-delivery__free {
    text-decoration: underline;
  }
  .lav-free-delivery__date {
    color: #F89201;
  }

  .lav-feedback {
    border-radius: 12px;
    background: rgba(254, 240, 224, 0.76);
    padding: 16px;
    margin-top: 18px;
    margin-bottom: -8px;
  }
  .lav-feedback__head {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .lav-feedback__title {
    color: #0D283E;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.65px;
  }
  .lav-feedback__head img {
    max-width: 100px;
  }
  .lav-feedback__descr {
    margin-top: 8px;
    color: #132A3F;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.65px;
    white-space: pre-line;
  }

  .lav-review {
    border-radius: 12px;
    background: rgba(254, 240, 224, 0.76);
    padding: 16px;
    margin-top: 18px;
  }
  .lav-review__head {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .lav-review__title {
    color: #0D283E;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.65px;
  }
  .lav-review__head img {
    max-width: 100px;
  }
  .lav-review__descr {
    margin-top: 12px;
    color: #132A3F;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.65px;
    white-space: pre-line;
  }
  .lav-review__all {
    flex-shrink: 0;
    text-align: right;
  }
  .lav-review__all img {
    border-radius: 6px;
  }
  .lav-review__all-link {
    color: #0D283E;
    font-size: 12px;
    font-weight: 500;
    line-height: 21px;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 12px;
  }
  .footer-add-cart {
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 18px;
  }
  .card-addons.primary.mt-5 {
    margin-top: 0;
  }
  .footer-add-cart .mb-7 {
    margin-bottom: 18px;
  }

  .lav-delivery {
    border-radius: 8px;
    background: rgba(165, 211, 255, 0.24);
    padding: 16px 20px;
    margin-top: 32px;
  }
  .lav-delivery__title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.4px;
  }
  .lav-delivery__timeline {
    margin-top: 12px;
    display: grid;
  }
  .lav-delivery__item {
    position: relative;
    padding-left: 32px;
    padding-bottom: 18px;
  }
  .lav-delivery__item:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #F89201;
  }
  .lav-delivery__item:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 2px;
    bottom: 0;
    width: 6px;
    height: 100%;
    background: #F89201;
    border-radius: 6px;
  }
  .lav-delivery__item:last-child {
    padding-bottom: 0;
  }
  .lav-delivery__item:last-child:after {
    background: #EDD7B3;
    top: 0;
  }
  .lav-delivery__item-title {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21.85px;
  }
  .lav-delivery__item-subtitle {
    color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.364px;
    margin-top: 1px;
  }
  .lav-delivery__item-caption {
    color: #1E3851;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }
  .estimate-delivery-wrapper {
    display: none;
  }
  body:not(.lav-body-mattresses) .card-addons:not(.primary):not(.added):not(.lav-addon) {
    display: none;
  }
  .lav-addon + .lav-addon {
    margin-top: 20px;
  }
  .product-multi-part {
    padding-bottom: 18px;
  }
  .about-payment-details.mbl {
    padding: 0;
    margin-top: 16px;
    margin-bottom: 0;
  }

  .product-details > div.w-full.overflow-hidden.relative {
    overflow: visible;
  }
  .product-details > div.w-full.overflow-hidden.relative .relative > .absolute {
    display: none;
  }
  .product-details > div.w-full.overflow-hidden.relative .absolute.top-5.left-0 {
    top: 10px;
  }
  .lav-splide {
    margin-left: -14px;
    margin-right: -14px;
  }
  .lav-splide .splide__slide {
    width: 94%;
    border-radius: 8px;
    overflow: hidden;
  }
  .lav-splide .splide__slide a > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0!important;
  }
  .lav-splide .splide__slide video {
    border-radius: 0!important;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
  }
  .lav-splide .splide__slide video {
  }
  .lav-splide .bg-primary {
    z-index: 1;
    transition: .3s;
    pointer-events: none;
  }
  
  .lav-splide-thumbs {
    margin-top: 14px;
    margin-left: -14px;
    margin-right: -14px;
  }
  .lav-splide-thumbs .splide__slide {
    border: 2px solid white;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: boxShadow .3s;
  }
  .lav-splide-thumbs .splide__track {
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .lav-splide-thumbs .splide__slide.is-active {
    box-shadow: 0px 0px 0px 2px #F89201;
  }
  .lav-splide-thumbs .splide__slide img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .lav-splide-thumbs .splide__slide video {
    border-radius: 0!important;
  }
  .lav-splide-thumbs .splide__slide .bg-primary {
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-scroll-slider {
    position: absolute;
    width: 40px;
    z-index: 1;
    pointer-events: none;
    right: 8px;
    bottom: 12px;
  }
  #productImagesCarousel {
    display: none;
  }
  .lav-body-mattresses .lav-feedback {
    margin-top: 13px;
    margin-bottom: 32px;
  }
  .lav-body-mattresses .footer-add-cart .mb-7 {
    margin-bottom: 32px;
  }
  .lav-body-mattresses .slect-mattresses-size .price-pro {
    margin-top: 18px;
  }
  .pswp img {
    border-radius: 8px;
  }
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  console.debug('** InitExp **')

  await waitFor(() => document.querySelector('.product-details'), false, {
    ms: 50
  })

  if (!_$('.product-details')) {
    console.log('Product details not found')
    return
  }

  window.lavProductSpecials = [
    {
      name: 'Moscow Divan Bed',
      userName: 'Helen C',
      userDescription:
        "The whole process was a dream—great communication throughout. The bed was easy to assemble, with spacious drawers and soft, luxurious silver chenille. The orthopaedic mattress gives the best night's sleep!"
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Customer',
      userDescription: `Highly recommend 👌
The bed is fabulous! Strong base, great gas hinges and the soft silver is gorgeous, will definitely buy again..thank you!`
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Peter Turay Jr',
      userDescription: `Super quick and straightforward lads!
Maruf and kabir were super quick with the delivery and assembly of my bed - gorgeous silver style for me and my wife!😀

Will definitely be ordering in the nearby future for a King-size!`
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Louise Tiley',
      userDescription: `Oh Wow... i couldn't be happier with my Moscow King size bed in silver grey plush and Orthopedic mattress. Excellently made bed and perfect in every way and the colour was perfect. customer service also very easy to contact and bed was made and delivered within the 10 days... so happy and will use again thanks.`
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Stacey Offei Boadu',
      userDescription:
        'My Moscow Divan Bed arrived this morning—Silver Chenille, Double with 2 drawers and Diamonte Buttons. I love the design! Maruf and Kabir were great, called ahead, assembled it quickly, and helped with the mattress.'
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Chloe',
      userDescription:
        "I purchased the Moscow divan base bed and I'm very happy with it. Easy to assemble, great delivery, excellent price. Highly recommend Sonno!"
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Samantha Worster',
      userDescription:
        'Got the Moscow divan bed in emerald green with 2 drawers. It was easy to assemble, well-made, and stunning in color. The delivery took a couple of weeks, and although I was away for my anniversary, my mum received it. I was worried about the stairs, but the delivery men kindly brought it to the hallway for her. Amazing price for such quality! Definitely recommend Sonno to anyone!'
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Rebecca',
      userDescription:
        'Would highly recommend. Slept like I died. Moscow divan/Encapsulation 3000 mattress is fantastic! Best sleep ever. Great delivery team, worth the upgrade—just wish the headboard was sturdier.'
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Susan Bennett',
      userDescription:
        'Ordered the Moscow divan bed with two drawers—one didn’t fit. Support was quick, Abid and Josh fixed it perfectly. Very happy with the service and the bed. Would definitely recommend Sonno!'
    },
    {
      name: 'Moscow Divan Bed',
      userName: 'Monta',
      userDescription:
        'The Moscow Divan bed is made perfectly with lovely diamanté details. Umer and Sary delivered it, set it up quickly, and were super understanding when I asked to delay delivery. Amazing service—great experience!'
    },
    {
      name: 'Sofia Ottoman Divan Bed',
      userName: 'Nicole',
      userDescription:
        'Would 100% buy from sonno again. Quick reliable service. The Sofia ottoman bed is absolutely stunning. Best bed I have bought by far.'
    },
    {
      name: 'Sofia Ottoman Divan Bed',
      userName: 'Moira',
      userDescription:
        'Had the super king Sofia Ottoman bed with 3000 pillow top mattress—firm, super comfy, and looks great. Delivery team couldn’t have been any nicer and made sure the bed was placed where we wanted it before leaving. Bed looks great and seems good value.'
    },
    {
      name: 'Sofia Ottoman Divan Bed',
      userName: 'Customer',
      userDescription:
        'From ordering our king size ottoman bed with 3000 encapsulation mattress to delivery today, communication with Sonno has been amazing. The bed was delivered as promised within the 10 working days. Muzzy & Muddy were great. Taking away the old bed and putting together our new one. So helpful and polite. Now for a good night sleep on our new bed and mattress.'
    },
    {
      name: 'Sofia Ottoman Divan Bed',
      userName: 'Deanna F',
      userDescription:
        'Absolutely thrilled with our super king Sofia Ottoman in navy blue plush velvet. Incredibly comfy and gorgeous. Great service from order to delivery.  Will be ordering again for a new bed for my son.'
    },
    {
      name: 'Sofia Ottoman Divan Bed',
      userName: 'Sharon',
      userDescription:
        'Bought the Sofia bed from Sonno and how pleased I am.  The bed is extremely solid and the upholstery is beautiful. If you need a new bed I’d highly recommend sonno you won’t be disappointed.'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Mohammed Khamis',
      userDescription:
        'I ordered a king-size Chesterfield Ottoman Divan bed with a Sonno 2000 memory pocket mattress, and well-made, and after nearly two weeks of use, I couldn’t be more satisfied. The mattress is incredibly comfortable, and the bed itself looks luxurious and well-crafted. Choosing the Ottoman style was a great decision—it offers ample storage space, which has helped me declutter my apartment significantly.'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Katarzyna',
      userDescription:
        "Lovely bed. We've purchased chesterfield ottoman and we're very happy. It's very solid, made very well. Colour and material is very good and beautiful. We love her board, looks amazing 😍. Sportage is huge. Thank you"
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Taylor Downey',
      userDescription:
        'I got it in the mink coniston colour and it’s lovely. Fast delivery, excellent quality bed really happy with my purchase as I’m having much better sleep now compared to my old bed 10/10 would definitely buy again.'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Zoe',
      userDescription:
        "The bed looks really lovely, it's exactly as on the catalogue if not better. The customer service is amazing, had enquiries and the responses were timeous and professional."
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Myles Davies',
      userDescription:
        "Over the moon!! Received our chesterfield ottoman bed today,the delivery lads were really polite and friendly the bed is fantastic!! The quality is very very good they assembled it in no time and took our old bed frame and mattress and all packaging, absolutely over the moon! Highly recommend so no you definitely won't be disappointed!! Myles Davies"
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Jacqueline Young',
      userDescription:
        'Sonno really do know what makes a perfect bed. Our super king in steel velvet looks and feels superb. If you are considering purchasing a new bed look no further Sonno will surpass any other.'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'EILEEN LISTER',
      userDescription:
        'Ive just got my new divan and Chesterfield headboard from Sonno beds. I absolutely love it. I got it in plush velvet steel colour. I am so very pleased. It looks beautiful. I would definitely recommend Sonno beds.'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'DFJ',
      userDescription:
        'Fantastic service from order to delivery! From ordering our new Chesterfield Bed and mattress to delivery the service was excellent. We were kept informed regularly by Sonno. We paid the extra to have the bed assembled which was definitely worth it. All in all a 5* experience with Sonno & their delivery staff Adam & Mubeen.'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Leanne Murphy',
      userDescription:
        'Received our new bed we ordered the super king chesterfield divan bed with the cool gel memory mattress and it is absolutely beautiful and so comfortable well worth the money Thank you xx'
    },
    {
      name: 'Chesterfield Ottoman Divan Bed',
      userName: 'Sarah Shanly',
      userDescription:
        'Wow what a fantastic bed and mattress, we have opted for the king size Chesterfield with a 3000 pillow topped mattress. Very pleased with the purchase, very comfortable!! The delivery men were fantastic, well worth the extra £20 for assembly so they got it up the stairs. I would highly recommended this company'
    },
    {
      name: 'Prague Ottoman Divan Bed',
      userName: 'Dawn',
      userDescription:
        'Great service from the moment I placed the order. We got the Prague ottoman and it is very well made I’m sure itwill last a long time. It is for my daughter who loves it and says it is very comfy.'
    },
    {
      name: 'Prague Ottoman Divan Bed',
      userName: 'Teresa',
      userDescription:
        'Prague ottoman looked exactly what we saw on the website. Delivery was a bit delayed on the day but the assembly was quick. Happy with the purchase and delivery overall.'
    },
    {
      name: 'Prague Ottoman Divan Bed',
      userName: 'Kimberly Tough',
      userDescription:
        'Amazing communication, plenty of order updates. We bought an ottoman divan base with the armour coniston fabric, would really recommend.'
    },
    {
      name: 'Prague Ottoman Divan Bed',
      userName: 'Shahida Begum',
      userDescription:
        'Very pleased with my Ottoman Divan Double bed. The delivery guys (Maruf & Kabir) were very polite and fitted the bed quickly and to a great standard. I am really happy with the service from Sonno from start to finish. Would definitely recommend.'
    },
    {
      name: 'Prague Ottoman Divan Bed',
      userName: 'Angela Wilson',
      userDescription:
        'I was worried about ordering online and not seeing/touch/feel the product. However I was very impressed, my Prague Ottoman bed is of a high standard and would definitely recommended Sonno to friend and family'
    },
    {
      name: 'Prague Ottoman Divan Bed',
      userName: 'Yasmine Yoda',
      userDescription: `Excellent delivery by Muzzy and Muddy. They really communicated well. I love my prague ottoman divan bed, it’s of good quality. It was just what I saw online.My uncle couldn’t stop wishing the bed for himself😂. Honestly, I’m impressed and always happy when going to bed. Buy from Sonno!!😍❤️`
    },
    {
      name: 'Upholstered Ottoman Bed',
      userName: 'Elsie Nwando',
      userDescription:
        'Luxury beds at unbeatable prices! I got the Melbourne Upholstered Ottoman Bed – Super King with Orthopaedic PillowTop Mattress and had the best sleep ever. Delivered on my chosen date. Baz and Abbaz were great!'
    },
    {
      name: 'Upholstered Ottoman Bed',
      userName: 'Michelle Greenhalgh',
      userDescription:
        'Ordered a king size upholstered ottoman and mattress—great quality for the price with a 5-year warranty. Baz and Abbas were friendly, quick, and made sure I was happy. Highly recommend Sonno!'
    },
    {
      name: 'Upholstered Ottoman Bed',
      userName: 'Jas B',
      userDescription: `Would definitely recommend!
Gorgeous upholstered double ottoman bed - very happy with it, exactly as described. Many thanks also to the delivery men Hassan Ali and Tubby - super friendly, arrived on time and fully assembled on my top floor within the hour!`
    },
    {
      name: 'Upholstered Ottoman Bed',
      userName: 'Christine Thompson',
      userDescription:
        '5-star SONNO! My new grey upholstered bed with 5ft headboard looks stunning and feels well made. Super comfy mattress. Alex and Timmy assembled it fast and took all packaging. Excellent service—highly recommend!'
    },
    {
      name: 'Cidra Ottoman Divan Bed',
      userName: 'MS Media',
      userDescription:
        'Umer and team delivered and assembled our beds quickly—polite, friendly, and professional. We got the Havana double with drawers and Cidra king ottoman—both sturdy with great storage. Highly recommend Sonno!'
    },
    {
      name: 'Cidra Ottoman Divan Bed',
      userName: 'Kerry Ballinger',
      userDescription: `We are very pleased with our Cidra bed. Came quickly and was made beautifully. I am always dubious of ordering online but will definitely order from this company again. Great price too. Thank you Sonno beds`
    },
    {
      name: 'Cidra Ottoman Divan Bed',
      userName: 'jayant kaushik',
      userDescription: `Sonno - Cidra Ottoman Divan Bed (Superking)
Maruf and Kabir were very helpful. Delivered the bed on time and great effort to get the big headboard through our stairs.
Bed looks great and sturdy for now.`
    },
    {
      name: 'Cidra Ottoman Divan Bed',
      userName: 'Rachel Naylor',
      userDescription: `Great service, would recommend to anyone. The sonno bed and mattress look immaculate, the colour and size are exactly as expected. I can't wait to get a good night sleep later. Ordered Cidra Ottoman Divan Bed
Sonno Memory Pocket 2000 Mattress - DOUBLE 4FT6 x 1`
    },
    {
      name: 'Cidra Ottoman Divan Bed',
      userName: 'Kathlene Dunlao',
      userDescription: `Recommended!
We are very happy with our sonno bed and mattress. The Cidra ottoman bed looks phenomenal in photos and more so in person. The mattress feels so comfortable and we are enjoying a very good sleep each time!`
    },
    {
      name: 'Prague Wingback Divan Bed',
      userName: 'Customer',
      userDescription: `(Prague wingback, silver divan) super quick delivery, kept informed the full process and friendly delivery drivers. Bed is stunning too! Highly recommend`
    },
    {
      name: 'Prague Wingback Divan Bed',
      userName: 'Louise',
      userDescription:
        'Found Sonno searching for a pink bed for my daughter. Bought the Prague winged pink bed with swatches. The mattress that was only £339 is extraordinarily comfortable, better than my Sealy one that cost over a grand from John Lewis. The bed is amazing. The delivery and the assembly went smoothly. When my little boy needs a bed, I will not hesitate to order from Sonno again.'
    },
    {
      name: 'Prague Wingback Divan Bed',
      userName: 'Sarah',
      userDescription: `Extremely good value for money
We recently purchased the King Prague Wingback Divan bed with drawers at the foot end and the Sonno Gel Memory 3000 mattress, I was a little wary as the price on this bed was extremely reasonable and I was absolutely over the moon with the amazing quality of the bed and the ease to put it together.`
    },
    {
      name: 'Prague Wingback Divan Bed',
      userName: 'Deedoh',
      userDescription:
        'I bought this beautiful Wingback Divan bed for my daughter’s birthday. She loves it! Gorgeous and easy to assemble. I’ll definitely recommend Sonno to friends and family. Proud to have found them! ❤️'
    },
    {
      name: 'Prague Wingback Divan Bed',
      userName: 'Shanny',
      userDescription:
        'Ordered Prague Wingback Divan Bed with Pearl Pocket Sprung Pillow Top Mattress. Delivery was on time, and service was great.  Abbas and Naj were friendly and efficient. Happy with my purchase and have recommended Sonno to family and friends.'
    }
  ]

  window.lavProductTwoReview = null

  window.lavProductReviews = {
    ottoman: [
      {
        userName: 'Kay Dodd',
        userDescription: `Great service - great bed!
This company was very easy to deal with, handled queries very quickly and they delayed delivery until we were ready. The guys who delivered our new superking bed put the ottoman bed together for me.
The bed looks great and feels solid - I'm really happy with it.
I would definitely use this company again.`
      },
      {
        userName: 'Sherona White',
        userDescription: `Lancaster Upholstered Ottoman Bed
I brought the Lancaster Upholstered Ottoman Bed, and it is about amazing and putting it together very easily and straightforward. The bed is such great quality and worth every penny`
      },
      {
        userName: 'Mrs Ann Mason',
        userDescription: `Communication great.Ordered an Ottoman bed and mattress.Love them both,definitely the most comfortable mattress I have ever had.
Would definitely recommend.`
      },
      {
        userName: 'Abby Clarke',
        userDescription: `Great price and fast delivery! I was hesitant at first but took a chance on the Athena Ottoman bed in Almond Coniston - absolutely fab. Cool Gel 1000 mattress is firmer than expected but comfy. Delivery team was efficient, polite, and early!`
      },
      {
        userName: 'Kathryn Goldsmith',
        userDescription: `Great experience all round!
Ordering was easy, lead time and communication was great! I even delayed my order as I was having decorating done and the team sorted a new delivery date for me. 
The bed itself.. I opted for a lift up ottoman and so far I couldn't be happier. Bed seems to be great quality and im loving having all the under bed storage in my little house!`
      },
      {
        userName: 'Sharon',
        userDescription: `My small double Ottoman Divan bed, headboard, and mattress were delivered and assembled by Naj and Idris - fantastic job! Quick, professional, and friendly. Sonno’s customer care also kept me well updated throughout.`
      },
      {
        userName: 'Dan Patterson',
        userDescription: `The bed was delivered quickly and it’s bloody lovely. Really nice quality and after 2-3 weeks of sleeping on it I can say the mattress is very comfortable. The ottoman pull-up base is sturdy and well made, the bed goes up and down without any problems and doesn’t feel wobbly at all.`
      },
      {
        userName: 'SG',
        userDescription: `Really pleased with our Prague King Ottoman and Sonno Memory Pillowtop 1000 mattress, looks super comfy! 40cm deep fitted sheets fit perfectly. Baz and Abbas were efficient and friendly. Assembly and removal service was worth it. Highly recommend!`
      },
      {
        userName: 'Nadean',
        userDescription: `My new bed was delivered and built by a lovely Duo Baz & Abbas. Bed was built in a good timely manner and was even given demonstration on how to safely open the Ottoman style bed. And also was informed how tp take bed apart if I was to move in the future. They took all the wrapping with them lovely job.`
      },
      {
        userName: 'Jessy Chan',
        userDescription: `I ordered their ottoman bed and I'm really impressed. The fabric quality both on the headboard and bed frame is excellent. I love the solid base and the spacious storage. It was easy to assemble. Love it!`
      },
      {
        userName: 'Kathryn Goldsmith',
        userDescription: `Received my bed today and so far, absolutely over the moon.
Baz and Abbas delivered and installed my bed today and we're super polite and speedy, couldn't ask for better service. Even showed me how to work the ottoman safely!!
Bed looks amazing, thanks to the sonno team!`
      },
      {
        userName: 'Zaid',
        userDescription: `Baz and Abbas were brilliant. Did everything they could to fit my Ottoman bed into the house. They even went round the back due to access issues and carried it in. Thanks to both of them. I am very happy!`
      },
      {
        userName: 'Michelle Greenhalgh',
        userDescription: `Ordered kingsize upholstered ottoman and mattress really pleased with both quality is great for the price , 5 year warranty also included which is good , would definitely recommend sonno`
      },
      {
        userName: 'Warren Francis',
        userDescription: `Ottoman style bed.
With the fresh smell of new wood, I imagine these are built to order. I found it easy to put together and had no issues downloading the instructions from the QR code on the bed's base. Very pleased with the product and the delivery men.`
      },
      {
        userName: 'Irene Husein-Goh',
        userDescription: `Good quality ottoman. Quick delivery. The delivery guys are very friendly. Highly recommended.`
      }
    ],
    divan: [
      {
        userName: 'Lisa CR',
        userDescription:
          'Absolutely love my new bed, I wasn’t expecting much as I paid £399 for a divan frame with drawers and headboard but amazing quality for the price I’m very impressed and already looking for beds for the kids rooms, the delivery drivers Idris and Jammy were so friendly and helpful can’t thank them enough I hope I get them for my next delivery ☺️'
      },
      {
        userName: 'Alex',
        userDescription:
          'Gorgeous bed, delivered promptly.\nI ordered a divan bed but ordered mattress separately as I have back issues.\nThe guys assembled the bed and took away any rubbish. The email update made me smile too'
      },
      {
        userName: 'Alison Watson',
        userDescription:
          'Sonno…\nOrdered two divan with headboards and mattresses from Sonno. Customer service is fabulous replying to online queries quickly. On delivery day was kept informed with tracking. The beds are lovely. I am very happy.'
      },
      {
        userName: 'Consumer',
        userDescription:
          'Sonno have been amazing\nOrdered a superking divan base and could not get it into my bedroom!! They made a very stressful thing much easier, allowing me to swap for a different base that comes in different sections and charged me nothing for what was very much my mistake.  Thank you Sonno!!'
      },
      {
        userName: 'Paula Waugh',
        userDescription:
          'I am over the moon with my new divan bed base. I paid extra for the larger headboard. It is such good quality and excellent value for money. Highly recommend'
      },
      {
        userName: 'Michelle Allan',
        userDescription:
          "Divan Bed With Headboard\nLovely, well made bed divan.Delivery was great - on time and goods were delivered with no hassle.Bed was easy to assemble and I've been sleeping on it with no problems. Would recommend Sonno!"
      },
      {
        userName: 'Guv',
        userDescription:
          'Excellent communication and fast delivery.  The divan base is perfect and as described. Lovely large headboard and solid base no complaints whatsoever. I highly recommend Sonno.'
      },
      {
        userName: 'Nicola Cameron',
        userDescription:
          'Oslo Divan Bed King/Sonno Encapsulation 3000 Mattress.\nI phoned the sales team a couple of times before I ordered the bed and mattress. They were very helpful and polite and advised me on a mattress that helps with mattress movement isolation. The bed frame is great quality for the price and the mattress is amazing! The mattress is so comfortable and I sleep so much better now. \nFrom my experience I would highly recommend.'
      },
      {
        userName: 'David Hanmore',
        userDescription:
          'super king size divan, ( extras - extended headboard, 2 draws, heavy duty support, and installation), plus a 2000 spring mattress. All this for less cost than a 1000 spring mattress at benson for beds. Easy 5 star review.'
      },
      {
        userName: 'Customer',
        userDescription:
          '(Prague wingback, silver divan) super quick delivery, kept informed the full process and friendly delivery drivers. Bed is stunning too! Highly recommend'
      },
      {
        userName: 'Joanna Hall',
        userDescription:
          'I ordered a divan base with two drawers and I also purchased a matching floor standing headboard. The delivery guys were friendly, efficient and professional. I paid for them to install the new bed and it took just a few minutes before I could make the bed. I am extremely pleased with the product, quality and service. Well done Sonno and thank you.'
      },
      {
        userName: 'Hannah foreman',
        userDescription:
          'Great experience\nGreat bed and mattress- Victoria divan double and Memory PillowTop 1000 mattress so comfy.\n\nGreat service and delivery'
      },
      {
        userName: 'Shenaz Harrod',
        userDescription:
          'Amazing bed and service! My divan bed with drawers was easy to assemble, great quality, and a fantastic price. Idris and Hassan delivered on time, were professional and helpful. One night on it confirmed I made the right choice. Highly recommend Sonno!'
      },
      {
        userName: 'Edem',
        userDescription:
          'Ordered a divan bed for my daughter’s room and the entire process from ordering online to delivery and installation was seamless and the bed is beautiful. As a result I ordered a second one for my son’s room! Can’t wait to order an ottoman bed for my room.'
      },
      {
        userName: 'Rachael Audis',
        userDescription:
          'Ordered a single divan bedframe with winged headboard. Delivery was within the specified time, phonecall on day of delivery, 2 drivers were extremely pleasant and delivered to a room of my choice. The bed itself is beautiful!! Would recommend!!'
      }
    ],
    mattresses: [
      {
        userName: 'Abby Clarke',
        userDescription:
          "Very good price and quick/prompt delivery. I was a bit hesitant at buying as hadn't heard of the company before, only popped up on social media and was a bit untrusting of how many rapid reviews on trust pilot.  Mattress is a cool gel 1000 medium firm. A bit firmer than i expected having had soft to med ones but feels better to sleep on."
      },
      {
        userName: 'Mark Longden',
        userDescription:
          'Once again baz and abbas and the sonno team have done an amazing job i ordered about a year ago and they not stopped the same standard as last time built and taken everything away for my parents bed and mattress would highly recommend'
      },
      {
        userName: 'customer',
        userDescription:
          'If you want value for your money go for SONNO.My experience on the bed and mattress has left me feeling satisfied and fulfilled that I made the right choice .'
      },
      {
        userName: 'John higginbotham',
        userDescription: 'Great delivery by Idris and Naj, really good mattress'
      },
      {
        userName: 'Alex',
        userDescription:
          'Gorgeous bed, delivered promptly.\nI ordered a divan bed but ordered mattress separately as I have back issues.\nThe guys assembled the bed and took away any rubbish. The email update made me smile too'
      },
      {
        userName: 'Serena Craigie',
        userDescription:
          'Great delivery service from Baz and Abbas. When they realised that I live on my own they took my new mattress upstairs for me as they knew I would struggle. I’m so grateful to them. Superb service.'
      },
      {
        userName: 'customer. Ian M',
        userDescription:
          'Love my mattress\nEasy web sight to navigate , great advice given by customer service over phone .'
      },
      {
        userName: 'Daniel Forrester',
        userDescription:
          "Quick, efficient and friendly service\nWas notified of delivery date around a week in advance and given a 2 hour timeslot.\nIdris and Jammy were very friendly, quick and efficient - delivering all the parts of my bed + mattress to the desired room within a few minutes.\nHopefully won't need to buy a bed again for some time but I wouldn't hesitate to use Sonno again after this experience."
      },
      {
        userName: 'Cheryl Forster',
        userDescription:
          "Fantastic service from Sav and Mobeen today, couldn't get the van up my road so carried the bed and mattress up a steep hill. Assembled perfectly and couldn't be more helpful."
      },
      {
        userName: 'Adrian',
        userDescription:
          'Great quality, service, price.\nThe bed is great quality, well built and exactly as described. The mattress is also super comfortable and as described. I need another bed in a few weeks, and will definitely use sonno again for this. - plus the price was the best I found for this type of bed!'
      },
      {
        userName: 'Mrs Heaton',
        userDescription:
          'Jolris and jammy delivered my mattress today what a credit to the company they are they put the mattress on my bed and took the plastic cover off for me. Brilliant lads'
      },
      {
        userName: 'Kate Callier',
        userDescription:
          "I loooove my new bed. The delivery slot was stuck to & i could track the delivery on the day, the guys were friendly & fast. It was a very wet day & they removed their shoes immediately on entry, I hasn't asked! My new bed is so comfy, got the Ortho mattress and its amazing, bed is stable with great storage. Also a great height, no difficulty getting up in the morning. Would highly recommend."
      },
      {
        userName: 'Keren',
        userDescription:
          'Highly recommend\n The bed itself is so gorgeous and high quality and the mattress is just dreamy! Highly recommend'
      },
      {
        userName: 'Carol',
        userDescription:
          'To order this fantastic double mattress was very easy and to make it even better iam able to pay in instalments it also came very quickly within the week, they also took my old mattress away for £19. I think they are exceptional they kept me very informed by text when it was being delivered .thankyou 🙂'
      },
      {
        userName: 'Helen C',
        userDescription:
          'The perfect addition to any bedroom\nThe bed itself was so easy to put together no drills required, and the drawers within the base are so spacious.\nAs for the mattress (we opted for the orthopaedic mattress) it’s the best nights sleep I have ever had!!'
      }
    ],
    other: [
      {
        userName: 'Farzana Begum',
        userDescription:
          'I had a great experience with Sonno Beds! Jammy and Idris were absolutely fantastic - very friendly, professional, and prompt. From start to finish, the service was smooth and efficient. Highly recommend Sonno Beds, especially if Jammy and Idris are involved!'
      },
      {
        userName: 'Karen Brickell',
        userDescription:
          'Hassan Ali and Aqeel delivered a 4ft6 mattress today, they took away the old mattress. They are such nice people, very helpful and polite. I give them a 5☆ rating SONNO are lucky to have them on their team.'
      },
      {
        userName: 'Leeann',
        userDescription:
          'Communication was very good and knew what was going on.Tne delivery was smooth, assembly was good and they ensured that plave was left clean after delivery.Bed is amazing and comfortable 👏🏽. Wish l knew about Sonno beds earlier.'
      },
      {
        userName: 'MRS JULIE M WILSON',
        userDescription:
          'The guys were friendly very helpful and went above and beyond will definitely be using this company again bed base was of excellent quality'
      },
      {
        userName: 'Tina',
        userDescription:
          'Beautiful well crafted item that is exactly what I was looking for. From start to finish excellent service'
      },
      {
        userName: 'Ms ad mr Slate',
        userDescription:
          'The whole experience from start to finish.\nOrdering was easy, even with the fact that the bed was being delivered to a different address.\nCommunication was excellent, delivery times spot on.\nBed is of great quality and will certainly buy again if ever need to for spare room.\nDelivery men very polite, friendly, and professional while bringing in and putting my bed together for me .'
      },
      {
        userName: 'Mel',
        userDescription:
          'Great service\nCouldn’t be happier with my new bed. Service was great, and Idris and Jammy were amazing. Called me to tell me they were 30 mins away and checked I was all happy before they left. Super nice and friendly, thanks again!'
      },
      {
        userName: 'Prism Vapes',
        userDescription:
          "Amazing customer service would recommend sonno to everyone the quality is fantastic I love my new bed and floor standing headboard it's so comfy. I'm even thinking of buying a matching ottoman for the end of the bed."
      },
      {
        userName: 'Brenda Couzens',
        userDescription:
          'Kept informed of delivery time. Both men were polite and happy. Put bed together, we are very pleased and will recommend Sonno to everyone we know.'
      },
      {
        userName: 'Sid',
        userDescription:
          'I would highly recommend this company. Easy ordering process and good communication regarding delivery. Saf and Alex even assembled my bed today, quickly and efficiently. Extremely polite and courteous and they even took away my old bed and mattress. Thank you so much.'
      },
      {
        userName: 'Sri Thava',
        userDescription:
          'Good service\nWe ordered mattresses and bed\nIt’s is really good\nThe delivery service is fine . They didn’t bring corect baseboard first time . Then I called customer service they were really helpful and delivered and fixed very quickly .\nThanks sonno support'
      },
      {
        userName: 'Carey G',
        userDescription:
          'I cannot fault Sarry! His customer service is 5*, he was friendly, professional and his communication was A+!\nThis is my second order with Sonno and once again I happy with the service! '
      },
      {
        userName: 'Dom Saint',
        userDescription:
          'Perfect service, Thank you guys Najan & idris good communication and quick build. Bed is great and we are very happy'
      },
      {
        userName: 'Mark Longden',
        userDescription:
          'once again baz and abbas and the sonno team have done an amazing job i ordered about a year ago and they not stopped the same standard as last time built and taken everything away for my parents bed and mattress would highly recommend'
      },
      {
        userName: 'Prashanth L',
        userDescription:
          'Great bed and awesome service\nSary came on time and did a great job in installing the bed. The bed looks and feels great as described in the picture and looks sturdy.'
      },
      {
        userName: 'Yemi',
        userDescription:
          'The delivery guys were very professional, and the bed was very Easy to assemble. I love everything about-Superb!!!'
      },
      {
        userName: 'customer',
        userDescription:
          'The the delivery guys were wonderful in assembling it , Baz and ABBAs thank you I’m grateful.My experience on the bed and mattress has left me feeling satisfied and fulfilled that I made the right choice .'
      },
      {
        userName: 'Simon Bentley',
        userDescription:
          'Great service, great price, short delivery time, communication from driver great and helped with getting old mattress out of house and helpful staff on the phone when I had a problem, would highly recommend to everyone'
      },
      {
        userName: 'Lyndsay Noble',
        userDescription:
          'From the confirmation email - which was just brilliant- to our 1st night in the bed it has been seamless.'
      }
    ]
  }
  window.lavProductType = null

  waitFor(
    () => item?.Categories,
    () => {
      if (item.Categories.includes('Ottoman Beds')) {
        lavProductType = 'ottoman'
      }
      if (item.Categories.includes('Upholstered Ottoman Beds')) {
        lavProductType = 'upholsteredOttoman'
      }
      if (item.Categories.includes('Divan Beds')) {
        lavProductType = 'divan'
      }
      if (item.Categories.includes('Upholstered Beds')) {
        lavProductType = 'upholstered'
      }
      if (item.Categories.includes('Mattresses')) {
        lavProductType = 'mattresses'
        _$('body').classList.add('lav-body-mattresses')
      }
    },
    { ms: 100 }
  )

  waitFor(
    '.product-info',
    () => {
      waitFor(
        () => lavProductType,
        () => {
          document.head.appendChild(stylesEl)

          let isUpdatingCarousel = false

          addTrust()
          addInfo()
          addAdditional()
          changeUpsell()
          waitFor('#productImagesCarousel', () => {
            handleCarousel()
            initLightbox()
            initMutation(
              '#productImagesCarousel',
              (node) => {
                console.log('added', node)
                if (
                  node.classList.contains('splide__pagination') &&
                  !isUpdatingCarousel
                ) {
                  isUpdatingCarousel = true
                  const slideChangeble = _$$(
                    '.lav-splide .lav-slide-changeble'
                  ).length
                  for (let i = 0; i < slideChangeble; i++) {
                    lavSplideEl.remove(0)
                    lavSplideThumbsEl.remove(0)
                  }
                  _$$('#productImagesCarousel .splide__slide img').forEach(
                    (img, index) => {
                      addMainSlide(img, false, false, true)
                      addThumbSlide(img, false, false, true)
                    }
                  )
                  isUpdatingCarousel = false
                }
              },
              (node) => {
                console.log('removed', node)
              }
            )
          })
        }
      )
    },
    { ms: 100 }
  )
}

function initLightbox() {
  const lavLightboxScript = document.createElement('div')
  lavLightboxScript.className = 'lav-lightbox-script'
  document.body.appendChild(lavLightboxScript)

  const script = document.createElement('script')
  script.type = 'module'
  script.textContent = /* js */ `
    import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe-lightbox.esm.min.js';

    window.lavLightBoxEl = new PhotoSwipeLightbox({
      gallery: '.lav-splide',
      children: 'a',
      pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.esm.min.js')
    });
    window.lavLightBoxEl.init();
  `
  lavLightboxScript.appendChild(script)
}

const lavSliderConfig = {
  divan: [
    getRandomSlideReview('divan', 3),
    'slide-divan-2.png',
    'slide-divan-3.png',
    'slide-divan-4.png',
    'slide-divan-5.png'
  ],
  upholstered: [
    getRandomSlideReview('general', 3),
    'slide-upholstered-2.png',
    'slide-upholstered-3.png',
    'slide-upholstered-4.png',
    'slide-divan-5.png'
  ],
  ottoman: [
    getRandomSlideReview('ottoman', 3),
    'slide-ottoman-2.png',
    'slide-ottoman-3.png',
    'slide-divan-4.png',
    'slide-divan-5.png'
  ],
  upholsteredOttoman: [
    getRandomSlideReview('ottoman', 3),
    'slide-upholstered-ottoman-2.png',
    'slide-upholstered-ottoman-3.png',
    'slide-upholstered-4.png',
    'slide-divan-5.png'
  ],
  mattresses: [
    getRandomSlideReview('mattress', 3),
    'slide-matres-2.png',
    'slide-matres-3.png',
    'slide-divan-5.png'
  ]
}

function getRandomSlideReview(type, num = 3) {
  // ranom number from 1 to num
  const randomNumber = Math.floor(Math.random() * num) + 1

  const name = item?.Name

  if (name.includes('Moscow Divan Bed')) {
    return 'slide-moscow-review-1.png'
  } else if (name.includes('Sofia Ottoman Divan Bed')) {
    return 'slide-sofia-review-1.png'
  } else if (name.includes('Chesterfield Ottoman Divan Bed')) {
    return 'slide-chesterfield-review-1.png'
  } else if (name.includes('Prague Ottoman Divan Bed')) {
    return 'slide-prague-review-1.png'
  } else if (name.includes('Melbourne Upholstered Bed')) {
    return 'slide-melbourne-review-1.png'
  } else if (name.includes('Cidra Ottoman Divan Bed')) {
    return 'slide-cidra-review-1.png'
  } else if (name.includes('Prague Wingback Divan Bed')) {
    return 'slide-prague-wingback-review-1.png'
  }

  // const special = lavProductSpecials.filter((s) => item?.Name.includes(s.name))
  // if (special.length) {
  //   console.log('Special review found:', special)
  //   twoReviews = special.sort(() => Math.random() - 0.5).slice(0, 2)
  // }

  return `slide-${type}-review-${randomNumber}.png`
}

let videoPlayingEl = null

function handleCarousel() {
  const parent = _$('#productImagesCarousel')
  const currentImages = _$$('#productImagesCarousel .splide__slide img')
  const additionalImages = lavSliderConfig[window.lavProductType] || []
  const videos = _$$('.video-awd')

  window.lavSplideCarousel = document.createElement('div')
  lavSplideCarousel.classList.add('lav-splide', 'splide')
  lavSplideCarousel.innerHTML = `
   <div class="splide__track">
      <ul class="splide__list"></ul>
    </div>
  `

  _$('.splide__list', lavSplideCarousel).innerHTML = ''

  window.lavThumbsCarousel = document.createElement('div')
  lavThumbsCarousel.classList.add('lav-splide-thumbs', 'splide')
  lavThumbsCarousel.innerHTML = `
    <div class="splide__track">
      <ul class="splide__list"></ul>
    </div>
  `

  currentImages.forEach((img, index) => {
    addMainSlide(img)
    addThumbSlide(img)
  })

  additionalImages.slice(0, 1).forEach((img) => {
    addMainSlide(img, true)
    addThumbSlide(img, true)
  })

  videos.forEach((video) => {
    addMainSlide(video, false, true)
    addThumbSlide(video, false, true)
  })

  additionalImages.slice(1).forEach((img) => {
    addMainSlide(img, true)
    addThumbSlide(img, true)
  })

  parent.insertAdjacentElement('beforebegin', lavSplideCarousel)
  parent.insertAdjacentElement('beforebegin', lavThumbsCarousel)

  window.lavSplideEl = new Splide('.lav-splide', {
    type: 'slide',
    autoWidth: true,
    height: 240,
    gap: 10,
    padding: '14px',
    rewind: true,
    pagination: false,
    arrows: false
  })

  window.lavSplideThumbsEl = new Splide('.lav-splide-thumbs', {
    rewind: true,
    fixedWidth: 52,
    fixedHeight: 52,
    isNavigation: true,
    gap: 10,
    padding: '14px',
    arrows: false,
    pagination: false,
    dragMinThreshold: {
      mouse: 4,
      touch: 10
    }
  })

  lavSplideEl.sync(lavSplideThumbsEl)
  lavSplideEl.mount()
  lavSplideThumbsEl.mount()

  lavSplideThumbsEl.on('click', (slide) => {
    console.log('Thumbs click', slide)
    let name =
      'Index ' + slide.index + ': ' + slide.slide.querySelector('img').src

    name = name
      .replace('https://sonno.co.uk/cdn/shop/files/', '')
      .replace(config.dir + '/img/', '')
    pushDataLayer('exp_pdp_imp2__click_01', name, 'click', 'thumbnails')
  })
}

function addMainSlide(img, isString, isVideo, isChange) {
  const slide = document.createElement('li')
  slide.classList.add('splide__slide')
  const scrollIcon = getSvg('scroll')
  if (isString) {
    const src = `${config.dir}/img/${img}`
    slide.insertAdjacentHTML(
      'beforeend',
      /*html*/ `
      <a data-pswp-width="640" data-pswp-height="478" target="_blank" href="${src}">
        <img src='${src}' />
      </a>
      `
      // <div class="absolute top-5 left-0 z-[1]"><div class="bg-[#01B67A] rounded-[1px] text-sm font-semibold text-white font-poppins py-1 px-2 text-start flex items-center justify-start gap-1">${getSvg(
      //     'moon-dark'
      //   )}<span>60 Night Risk Free Trial</span></div></div>
      // ${scrollIcon}
    )
  } else if (isVideo) {
    slide.insertAdjacentHTML('beforeend', img.innerHTML)

    slide.style.width = '140px'

    const video = _$('video', slide)

    video.addEventListener('click', () => {
      if (!video.paused) return

      const playPromise = video.play()
      if (playPromise === undefined) return

      playPromise
        .then(() => {
          setTimeout(() => {
            lavEnterFullScreen(video)
          }, 100) // Add a short delay before entering full-screen mode
        })
        .catch((err) => {
          console.error('Error attempting to play video:', err)
        })
    })
  } else {
    slide.classList.add('lav-slide-changeble')
    const cloneNode = img.cloneNode(true)
    const src = cloneNode.getAttribute('src').replace('100x', '600x')
    slide.innerHTML = /*html*/ `
      <a data-pswp-width="${
        img.closest('a').dataset.pswpWidth
      }" data-pswp-height="${
      img.closest('a').dataset.pswpHeight
    }" target="_blank" href="${src}">
      <div class="absolute top-5 left-0 z-[1]"><div class="bg-[#01B67A] rounded-[1px] text-sm font-semibold text-white font-poppins py-1 px-2 text-start flex items-center justify-start gap-1">${getSvg(
        'moon-dark'
      )}<span>60 Night Risk Free Trial</span></div></div>
      </a>
    `
    slide.querySelector('a').insertAdjacentElement('beforeend', cloneNode)
    slide.insertAdjacentHTML('beforeend', scrollIcon)
  }

  if (isChange) {
    lavSplideEl.add(slide, 0)
  } else {
    _$('.splide__list', lavSplideCarousel).insertAdjacentElement(
      'beforeend',
      slide
    )
  }
}

function addThumbSlide(img, isString, isVideo, isChange) {
  const slide = document.createElement('li')
  slide.classList.add('splide__slide')
  if (isString) {
    slide.insertAdjacentHTML(
      'beforeend',
      `<img src='${config.dir}/img/${img}' />`
    )
  } else if (isVideo) {
    slide.insertAdjacentHTML('beforeend', img.innerHTML)
  } else {
    slide.classList.add('lav-slide-changeble')
    slide.insertAdjacentElement('beforeend', img.cloneNode(true))
  }

  if (isChange) {
    lavSplideThumbsEl.add(slide, 0)
  } else {
    _$('.splide__list', lavThumbsCarousel).insertAdjacentElement(
      'beforeend',
      slide
    )
  }
}

;[
  'fullscreenchange',
  'webkitfullscreenchange',
  'mozfullscreenchange',
  'MSFullscreenChange'
].forEach((event) => {
  document.addEventListener(event, () => {
    const fsElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement

    if (!fsElement && videoPlayingEl.closest('.lav-splide')) {
      videoPlayingEl.pause()
      videoPlayingEl = null
      console.log('Exited fullscreen')
    } else if (fsElement.closest('.lav-splide')) {
      videoPlayingEl = fsElement
    }
  })
})

function lavEnterFullScreen(video) {
  if (video.requestFullscreen) {
    video.play()
    return video.requestFullscreen()
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.play()
    return video.mozRequestFullScreen()
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    video.play()
    return video.webkitRequestFullscreen()
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.play()
    return video.msRequestFullscreen()
  } else if (video.webkitEnterFullscreen) {
    /* iOS Safari */
    video.play()
    return video.webkitEnterFullscreen()
  }
}

function moveAddons() {
  _$('.lav-addons').innerHTML = ''

  _$$('.footer-add-cart .card-addons:not(.primary):not(.added)').forEach(
    (el) => {
      const cloneEl = el.cloneNode(true)
      cloneEl.classList.add('lav-addon')
      _$('.lav-addons').insertAdjacentElement('beforeend', cloneEl)

      cloneEl.querySelector('.card-button').addEventListener('click', (e) => {
        el.querySelector('.card-button span:last-child').click()
        setTimeout(() => {
          moveAddons()
        }, 200)
      })
    }
  )
}

function changeUpsell() {
  if (lavProductType !== 'mattresses') {
    _$('.estimate-delivery-wrapper').insertAdjacentHTML(
      'afterend',
      `<div class='lav-addons'></div>`
    )

    moveAddons()
  }

  waitFor('.footer-add-cart .space-y-5.block.mb-7', () => {
    initMutation('.footer-add-cart .space-y-5.block.mb-7', (node) => {
      console.log('added', node)
      if (node.classList.contains('card-addons')) {
        moveAddons()
      }
    })
  })

  _$('.about-payment-details.mbl + button').insertAdjacentElement(
    'afterend',
    _$('.about-payment-details.mbl')
  )
}

function getRandomReview() {
  if (window.lavProductTwoReview) return window.lavProductTwoReview

  let twoReviews = null

  const special = lavProductSpecials.filter((s) => item?.Name.includes(s.name))
  if (special.length) {
    console.log('Special review found:', special)
    twoReviews = special.sort(() => Math.random() - 0.5).slice(0, 2)
  } else {
    const reviews =
      lavProductReviews[lavProductType] || lavProductReviews['other']
    twoReviews = reviews.sort(() => Math.random() - 0.5).slice(0, 2)
  }

  console.log('2 reviews', twoReviews)
  window.lavProductTwoReview = twoReviews
  return window.lavProductTwoReview
}

function addAdditional() {
  const reviewItem = getRandomReview()[1]

  const review = /* html */ `
    <div class='lav-review'>
      <div class='lav-review__info'>
        <div class='lav-review__head'>
          <div class='lav-review__title'>${reviewItem.userName}</div>
          <img src='${config.dir}/img/trustpilot-stars.png' />
        </div>
        <div class='lav-review__descr'>${reviewItem.userDescription}</div>
      </div>
      <div class='lav-review__all'>
        <div class='lav-review__all-link'>All reviews</div>
      </div>
    </div>
  `

  _$('.estimate-delivery-wrapper').insertAdjacentHTML('beforebegin', review)

  visibilityEvent('.lav-review', () => {
    pushDataLayer('exp_pdp_imp2__view_02', 'Review', 'view', 'Part 2')
  })

  _$('.lav-review__all-link').addEventListener('click', () => {
    _$('.trustpilot-review-section')?.scrollIntoView({
      behavior: 'smooth'
    })
    // window.open(link, '_blank')
  })

  const title = _$('.delivery-status').innerText
  const firstItem = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(1) .estimate-delivery-date'
  ).innerText
  // const secondItem = _$(
  //   '.estimate-delivery-ele .estimate-delivery-item:nth-child(2) .estimate-delivery-date'
  // ).innerText
  const thrirdItem = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(3) .estimate-delivery-date'
  ).innerText

  const trialNights = add60DaysToDateRange(thrirdItem)

  const delivery = /* html */ `
    <div class='lav-delivery'>
      <div class='lav-delivery__title'>
        ${title}
      </div>

      <div class='lav-delivery__timeline'>
        <div class='lav-delivery__item'>
          <div class='lav-delivery__item-title'>Ordered</div>
          <div class='lav-delivery__item-subtitle'>${firstItem}</div>
        </div>
        
        <div class='lav-delivery__item'>
          <div class='lav-delivery__item-title'>Delivered</div>
          <div class='lav-delivery__item-subtitle'>${thrirdItem}</div>
        </div>
        
        <div class='lav-delivery__item'>
          <div class='lav-delivery__item-title'>Enjoy a 60-Night Free Trial</div>
          <div class='lav-delivery__item-subtitle'>${trialNights}</div>
          <div class='lav-delivery__item-caption'>
            Not fully satisfied? Don't worry; we'll arrange a return or exchange for you.
          </div>
        </div>
      </div>
    </div>
  `

  _$('.estimate-delivery-wrapper').insertAdjacentHTML('beforebegin', delivery)
}

function add60DaysToDateRange(dateRange) {
  const currentYear = new Date().getFullYear()
  const [startStr, endStr] = dateRange.split(' - ')

  // Parse input dates with current year
  const startDate = new Date(`${startStr} ${currentYear}`)
  const endDate = new Date(`${endStr} ${currentYear}`)

  // Add 60 days to each
  const newStart = new Date(startDate.setDate(startDate.getDate() + 60))
  const newEnd = new Date(endDate.setDate(endDate.getDate() + 60))

  // Format back to 'Mon D'
  const options = { month: 'short', day: 'numeric' }
  const formattedStart = newStart.toLocaleDateString('en-US', options)
  const formattedEnd = newEnd.toLocaleDateString('en-US', options)

  return `${formattedStart} - ${formattedEnd}`
}

function addInfo() {
  const discount = _$('.announcement-bar__discount strong').innerHTML

  const info = /* html */ `
    <div class='lav-info'>
      <div class='lav-benefits'>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-interest.svg'/>
            </div>
            0% interest rate
          </div>
          <div class='lav-benefits__item' ${
            lavProductType === 'mattresses' ? 'style="display: none;"' : ''
          }>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-guarantee.svg'/>
            </div>
            5 year guarantee
          </div>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-delivery.svg'/>
            </div>
            Professional assembly
          </div>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-trial.svg'/>
            </div>
            60 nights free trial 
          </div>
      </div>

      <div class='lav-coupon'>
        <div class='lav-coupon__top lav-coupon__section'>
          EXTRA <span>20% OFF</span> <br/> ENDS SOON <span class="lav-coupon-countdown">-:-</span>
        </div>
        <div class='lav-coupon__bottom lav-coupon__section'>
          USE CODE <br/><span>${discount}</span>
        </div>
      </div>
    </div>
  `

  // add Scroll and date
  const dateRaw = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(3) .estimate-delivery-date'
  ).innerHTML

  const date = dateRaw.split('-')[0].trim()
  const freeDelivery = /* html */ `
    <div class='lav-free-delivery'>
      Order now for <span class='lav-free-delivery__free'>FREE delivery</span> by <span class='lav-free-delivery__date'>${getDayWithDate(
        date
      )}</span>
    </div>
  `

  const reviewItem = getRandomReview()[0]

  const feedback = /* html */ `
    <div class='lav-feedback'>
      <div class='lav-feedback__head'>
        <div class='lav-feedback__title'>${reviewItem.userName}</div>
        <img src='${config.dir}/img/trustpilot-stars.png' />
      </div>
      <div class='lav-feedback__descr'>${reviewItem.userDescription}</div>  
    </div>
  `

  if (lavProductType === 'mattresses') {
    _$('.footer-add-cart').insertAdjacentHTML('beforebegin', feedback)
  } else {
    _$('.product-info').insertAdjacentHTML('afterend', feedback)
  }

  visibilityEvent('.lav-feedback', () => {
    pushDataLayer('exp_pdp_imp2__view_01', 'Review', 'view', 'Part 1')
  })
  _$('.product-info').insertAdjacentHTML('afterend', freeDelivery)
  _$('.product-info').insertAdjacentHTML('afterend', info)

  const countdownInterval = setInterval(() => {
    const time =
      _$('#countdown .hours .value').innerHTML +
      ':' +
      _$('#countdown .minutes .value').innerHTML +
      ':' +
      _$('#countdown .seconds .value').innerHTML

    if (!time) {
      clearInterval(countdownInterval)
      _$('.lav-coupon-countdown').innerHTML = '00:00'
    }
    _$('.lav-coupon-countdown').innerHTML = time
  }, 500)

  _$('.lav-free-delivery__free').addEventListener('click', () => {
    pushDataLayer(
      'exp_pdp_imp2__click_02',
      'Free delivery',
      'click',
      'Product info'
    )
    _$('.lav-delivery')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

function getDayWithDate(dateStr) {
  const currentYear = new Date().getFullYear()
  const date = new Date(`${dateStr} ${currentYear}`)

  const options = { weekday: 'long', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

function addTrust() {
  const boughtText = setBoughtData()

  const markup = /* html */ `
    <div class='lav-trust'>
      <div class='lav-trust__bought'>
        <img src='${config.dir}/img/bought-basket.svg' alt='Bought' />
        ${boughtText}К+ Bought so far
      </div>
      <div class='lav-trust__made'>
        <img src='${config.dir}/img/uk-flag.svg' alt='Made in UK' />
        Made in UK
      </div>
    </div>
  `

  _$('.product-info').insertAdjacentHTML('beforebegin', markup)
}

function setBoughtData() {
  const localStorageKey = 'lavBoughtData'
  const currentData = JSON.parse(localStorage.getItem(localStorageKey)) || {}

  const path = item?.URL?.split('/')?.at(-1)
  if (!path) return

  if (currentData[path]) {
    return currentData[path]
  } else {
    const count = Math.floor(Math.random() * (35 - 15 + 1)) + 15
    currentData[path] = count

    localStorage.setItem(localStorageKey, JSON.stringify(currentData))

    return count
  }
}

// *** Utils *** //
function initModal() {
  class Modal {
    static list = []
    constructor(name, html) {
      if (!_$('.lav-modal')) {
        this.constructor.init()
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists')
        return
      }

      this.el = document.createElement('div')
      this.el.classList.add('lav-modal__inner', name)
      this.name = name
      this.el.innerHTML = html

      _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

      this.constructor.list.push(this)
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lav-modal'></div>"
      )

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close()

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal)
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal)
        }
      })

      this.addStyles()
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open')

      if (_$('.lav-modal__inner.active')) {
        _$('.lav-modal__inner.active').classList.remove('active')
      }

      _$(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open')

      _$('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #fff;
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  window.Modal = Modal
}
// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig
  }

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb()
      return
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          if (limit > 0 && typeof cb === 'function') cb()
          resolve()
        }
        limit -= config.ms
      }, config.ms)
    })
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition))
          observer.disconnect()
          resolve()
        }
      })

      observer.observe(document, { childList: true, subtree: true })
    })
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el) return

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbAdded(node, observer)
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbRemoved(node, observer)
        }
      }
    }
  })

  observer.observe(el, { childList: true, subtree: true })

  return observer
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el || typeof cb !== 'function') return

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      cb(entry, observer)
    })
  }, config)

  observer.observe(el)

  return observer
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1)
        cb(diffTime + 's')
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
    timer: null
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
        }, 100)
      } else {
        clearTimeout(config.timer)
      }
    },
    config
  )
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  )
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector)
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector)

  return toSimpleArray ? Array.from(arr) : arr
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || []

  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    }

    console.debug('** GA4 Event **', event)

    if (!config.debug) {
      dataLayer.push(event)
    }
  } catch (e) {
    console.log('** GA4 Error **', e)
  }
}

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link')
  sliderStyles.rel = 'stylesheet'
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css'
  document.head.appendChild(sliderStyles)

  let sliderScript = document.createElement('script')
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
  document.head.appendChild(sliderScript)
}

// *** Exp BG process *** //

//Clarity
if (
  !config.debug &&
  Array.isArray(config.clarity) &&
  config.clarity.length === 3
) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...config.clarity)
    }
  )
}

// Svg objects
function getSvg(name) {
  const svgObj = {
    'moon-dark': `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" height="15" width="15">
        <path fill="black" d="M14.7877 8.94517C14.6171 8.83989 14.3968 8.85923 14.2491 8.99427C13.1731 9.97022 11.7813 10.508 10.3307 10.508C7.11114 10.508 4.4917 7.88854 4.4917 4.66897C4.4917 3.21831 5.02946 1.82659 6.00541 0.75062C6.13999 0.602304 6.16025 0.382577 6.05451 0.211946C5.94876 0.0417718 5.74174 -0.0371925 5.55051 0.0168237C2.28218 0.942309 0 3.96355 0 7.36383C0 11.5743 3.42534 14.9996 7.63574 14.9996C11.036 14.9996 14.0574 12.7174 14.9829 9.44917C15.0377 9.25611 14.9579 9.0508 14.7877 8.94517Z"/>
        <path fill="black" d="M8.24834 3.59838L9.31241 4.12996L9.84399 5.19415C9.91986 5.34636 10.0756 5.44237 10.2458 5.44237C10.4161 5.44237 10.5713 5.34636 10.6476 5.19415L11.1797 4.12996L12.2434 3.59838C12.3956 3.52205 12.4916 3.36676 12.4916 3.19658C12.4916 3.02641 12.3956 2.87111 12.2434 2.79478L11.1797 2.26309L10.6476 1.19901C10.4949 0.8946 9.99585 0.8946 9.84399 1.19901L9.31241 2.26309L8.24834 2.79478C8.09613 2.87065 8 3.02641 8 3.19658C8 3.36676 8.09613 3.52251 8.24834 3.59838Z"/>
        </svg>
        `,
    scroll: `
      <svg class='lav-scroll-slider' xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none"><g clip-path="url(#clip0_985_7250)"><path d="M17.8536 39.9429C15.9695 38.1164 14.9339 36.5316 13.2722 33.3039C11.6106 30.0764 11.4398 27.7693 10.7876 26.2181C10.1355 24.6668 10.3172 25.2414 9.10752 23.1343C7.8977 21.0273 11.4122 18.1845 13.1752 20.9288C14.9383 23.6731 15.0162 23.8482 15.0162 23.8482C15.0162 23.8482 15.8657 25.5778 16.135 25.7597C16.4042 25.9416 16.1008 10.3205 16.1554 7.87577C16.2098 5.43108 20.721 4.82566 20.7766 8.09961C20.8324 11.3735 20.8016 20.4725 20.9156 21.6422C21.0296 22.8119 20.6402 17.2218 21.5412 15.945C22.4423 14.6683 24.2391 14.8019 25.0165 15.8313C25.7941 16.8606 25.6149 21.3563 25.7063 21.3563C25.7976 21.3563 25.3353 18.3904 26.487 17.4887C27.6387 16.587 29.2896 16.7161 30.0116 17.9857C30.7337 19.2552 30.2353 21.959 30.5057 22.0936C30.7762 22.2282 30.3181 19.2821 31.5104 18.5722C32.7027 17.8623 34.4254 18.2974 34.7855 19.5457C35.1455 20.7939 35.351 22.5376 34.8061 26.8016C34.2611 31.0655 33.3569 32.5979 32.8118 34.9885C32.2668 37.3792 31.8003 39.703 31.8003 39.703" stroke="black" stroke-width="1.5" stroke-linecap="round"></path><path d="M34.2506 2.5L37.493 5.70542L34.2506 8.91084M25.2084 5.75056H36.7166M3.24239 2.5L0 5.70542L3.24239 8.91084M12.3302 5.75056H0.822014" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_985_7250"><rect width="39" height="40" fill="white"></rect></clipPath></defs></svg>
    `
  }

  return svgObj[name]
}
