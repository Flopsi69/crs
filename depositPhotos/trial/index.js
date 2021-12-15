(function () {
  console.log('Optimize activated!');
  // Vars
  const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/trial';

  // let recentlyText = 'Recently viewed';
  var infoBlock = `
  <div class="lav-info">
    <div class="lav-head">
      <div class="lav-head__info">
        <div class="lav-head__title">Let’s Start your 7 Days Trial!</div>
      </div>
    </div>

    <div class="lav-timeline">
      <!-- Left col -->
      <div class="lav-timeline__block">
        <div class="lav-timeline__title lav-timeline__title_blue ">Start Free trial</div>
        <div class="lav-timeline__date lav-timeline__date-from">04.05.2021</div>
        <div class="lav-timeline__image">
          <img src="${REPO_DIR}/img/timeline-left.svg" alt="">
        </div>
        <div class="lav-timeline__subtitle">What will you get now:</div>
        <ul class="lav-timeline__list">
          <li class="lav-timeline__item">Search and save images you like</li>
          <li class="lav-timeline__item">Download any 10 images or vectors for free</li>
          <li class="lav-timeline__item">No billing today</li>
          <li class="lav-timeline__item">Free to cancel any time before trial ends</li>
        </ul>
      </div>

      <!-- Right col -->
      <div class="lav-timeline__block">
        <div class="lav-timeline__title lav-timeline__title_green">You pay here</div>
        <div class="lav-timeline__date lav-timeline__date-to">11.05.2021</div>
        <div class="lav-timeline__image lav-timeline__image-right">
          <img src="${REPO_DIR}/img/timeline-right.svg" alt="">
        </div>
        <div class="lav-timeline__subtitle">And much more after paid subscription</div>
        <ul class="lav-timeline__list">
          <li class="lav-timeline__item">Flexible Plan activation for $99 per year</li>
          <li class="lav-timeline__item">Download any images or vectors according to your plan
            (10 images or vectors each month) </li>
          <li class="lav-timeline__item">Unused download transfer to the next month</li>
          <li class="lav-timeline__item">Additional images are $1 each</li>
        </ul>
      </div>
    </div>

    <div class="lav-footer">
      <div class="lav-footer__caption">Amount due today</div>

      <div class="lav-footer__info">
        <div class="lav-footer__price"><span class='lav-curr'>$</span>0.00</div>
        <a href="#" class="lav-footer__cancel">How do I cancel?</a>
      </div>
    </div>
  </div>
  `;

  var summaryBlock = `
    <div class="lav-summary">
      <div class="lav-summary__title">Order Summary</div>
      <div class="lav-summary__caption">Free Trial</div>
      <div class="lav-summary__subprice"><span class='lav-curr'>$</span>0.00</div>
    
      <div class="lav-summary__footer">
        <div class="lav-summary__footer-caption">Total</div>
        <div class="lav-summary__footer-value"><span class='lav-curr'>$</span>0.00</div>
      </div>
    </div>
    `;

  var downloadCaption =
    "<div class='lav-head__caption'>And Download this Image</div>";

  var modal = `
    <div class="lav-modal">
      <div class="lav-modal__body">
        <!-- Close modal -->
        <button class="lav-modal__close">
          <img src='${REPO_DIR}/img/icon-close.svg'>
        </button>

        <div class="lav-modal__title">How do I cancel?</div>

        <div class="lav-modal__steps">
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 1</div>
            <div class="lav-modal__step-caption">Go to Profile</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 2</div>
            <div class="lav-modal__step-caption">Click Menu tab</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 3</div>
            <div class="lav-modal__step-caption">Click on Settings</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 4</div>
            <div class="lav-modal__step-caption">Set toggle with Auto-Renewal to Off</div>
          </div>
        </div>

        <div class="lav-modal__video">
          <video controls>
            <source src="${REPO_DIR}/video.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  `;

  var startTrial = '<div class="lav-hat">Start Free Trial</div>';

  var paymentMethod = 'Payment Method';

  var lang = document.querySelector('html').lang;

  if (lang == 'ru') {
    downloadCaption =
      "<div class='lav-head__caption'>И скачаем это изображение</div>";

    infoBlock = `
    <div class="lav-info">
      <div class="lav-head">
        <div class="lav-head__info">
          <div class="lav-head__title">Давайте начнем семидневную пробную версию!</div>
        </div>
      </div>

      <div class="lav-timeline">
        <!-- Left col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_blue ">Начать пробный период</div>
          <div class="lav-timeline__date lav-timeline__date-from">04.05.2021</div>
          <div class="lav-timeline__image">
            <img src="${REPO_DIR}/img/timeline-left.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">Что вы получите сейчас:</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Ищите и скачивайте понравившиеся изображения</li>
            <li class="lav-timeline__item">Скачивайте любые 10 изображений или векторов бесплатно</li>
            <li class="lav-timeline__item">Никаких оплат сегодня</li>
            <li class="lav-timeline__item">Бесплатная отмена в любой момент до окончания пробного периода</li>
          </ul>
        </div>

        <!-- Right col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_green">Вы платите здесь</div>
          <div class="lav-timeline__date lav-timeline__date-to">11.05.2021</div>
          <div class="lav-timeline__image lav-timeline__image-right">
            <img src="${REPO_DIR}/img/timeline-right.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">И многое другое после покупки подписки</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Активация гибкого плана за 99$ в год</li>
            <li class="lav-timeline__item">Скачивайте любые изображений или векторы согласно своему плану (10 изображений или векторов в месяц)</li>
            <li class="lav-timeline__item">Неиспользованные скачивания переносятся на следующий месяц</li>
            <li class="lav-timeline__item">Дополнительные изображения по 1$ каждое</li>
          </ul>
        </div>
      </div>

      <div class="lav-footer">
        <div class="lav-footer__caption">Сегодня к списанию</div>

        <div class="lav-footer__info">
          <div class="lav-footer__price"><span class='lav-curr'>$</span>0.00</div>
          <a href="#" class="lav-footer__cancel">Как отменить подписку?</a>
        </div>
      </div>
    </div>
    `;

    summaryBlock = `
    <div class="lav-summary">
      <div class="lav-summary__title">Итог заказа</div>
      <div class="lav-summary__caption">пробный период</div>
      <div class="lav-summary__subprice"><span class='lav-curr'>$</span>0.00</div>
    
      <div class="lav-summary__footer">
        <div class="lav-summary__footer-caption">Итого</div>
        <div class="lav-summary__footer-value"><span class='lav-curr'>$</span>0.00</div>
      </div>
    </div>
    `;

    modal = `
    <div class="lav-modal">
      <div class="lav-modal__body">
        <!-- Close modal -->
        <button class="lav-modal__close">
          <img src='${REPO_DIR}/img/icon-close.svg'>
        </button>

        <div class="lav-modal__title">Как отменить подписку?</div>

        <div class="lav-modal__steps">
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Шаг 1</div>
            <div class="lav-modal__step-caption">В профиль</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Шаг 2</div>
            <div class="lav-modal__step-caption">Нажать таб Меню</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Шаг 3</div>
            <div class="lav-modal__step-caption">Нажать на Настройки</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Шаг 4</div>
            <div class="lav-modal__step-caption">Переключить тогл Автообновление на Выключен</div>
          </div>
        </div>

        <div class="lav-modal__video">
          <video controls>
            <source src="${REPO_DIR}/video.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    `;

    paymentMethod = 'Метод оплаты';

    startTrial = '<div class="lav-hat">Начать пробный период</div>';
  } else if (lang == 'es-es') {
    downloadCaption =
      "<div class='lav-head__caption'>Y descarga esta imagen</div>";

    infoBlock = `
    <div class="lav-info">
      <div class="lav-head">
        <div class="lav-head__info">
          <div class="lav-head__title">¡Comienza tus 7 días de prueba!</div>
        </div>
      </div>

      <div class="lav-timeline">
        <!-- Left col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_blue ">Comenzar la prueba gratuita</div>
          <div class="lav-timeline__date lav-timeline__date-from">04.05.2021</div>
          <div class="lav-timeline__image">
            <img src="${REPO_DIR}/img/timeline-left.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">¿Qué obtienes ahora?</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Buscar y guardar las imágenes quieras</li>
            <li class="lav-timeline__item">Descarga gratuitamente 10 imágenes o vectores cualesquiera</li>
            <li class="lav-timeline__item">No se hace el cargo hoy</li>
            <li class="lav-timeline__item">Puedes cancelar la suscripción en cualquier momento antes de que termine la prueba</li>
          </ul>
        </div>

        <!-- Right col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_green">Paga aquí</div>
          <div class="lav-timeline__date lav-timeline__date-to">11.05.2021</div>
          <div class="lav-timeline__image lav-timeline__image-right">
            <img src="${REPO_DIR}/img/timeline-right.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">Y mucho más después de pagar la suscripción</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Activación del plan flexible por 99 dólares al año</li>
            <li class="lav-timeline__item">Descargue cualquier imagen o vector según su plan (10 imágenes o vectores cada mes)</li>
            <li class="lav-timeline__item">Las descargas no utilizadas se transfieren al mes siguiente</li>
            <li class="lav-timeline__item">Las imágenes adicionales cuestan 1$ cada una</li>
          </ul>
        </div>
      </div>

      <div class="lav-footer">
        <div class="lav-footer__caption">Importe a pagar hoy</div>

        <div class="lav-footer__info">
          <div class="lav-footer__price"><span class='lav-curr'>$</span>0.00</div>
          <a href="#" class="lav-footer__cancel">¿Cómo puedo cancelar?</a>
        </div>
      </div>
    </div>
    `;

    summaryBlock = `
    <div class="lav-summary">
      <div class="lav-summary__title">Resumen del pedido</div>
      <div class="lav-summary__caption">la prueba gratuita</div>
      <div class="lav-summary__subprice"><span class='lav-curr'>$</span>0.00</div>
    
      <div class="lav-summary__footer">
        <div class="lav-summary__footer-caption">Resumen</div>
        <div class="lav-summary__footer-value"><span class='lav-curr'>$</span>0.00</div>
      </div>
    </div>
    `;

    modal = `
    <div class="lav-modal">
      <div class="lav-modal__body">
        <!-- Close modal -->
        <button class="lav-modal__close">
          <img src='${REPO_DIR}/img/icon-close.svg'>
        </button>

        <div class="lav-modal__title">¿Cómo puedo cancelar?</div>

        <div class="lav-modal__steps">
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Paso 1</div>
            <div class="lav-modal__step-caption">Ir al perfil</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Paso 2</div>
            <div class="lav-modal__step-caption">Haz clic en la pestaña Menú</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Paso 3</div>
            <div class="lav-modal__step-caption">Haz clic en Configuración</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Paso 4</div>
            <div class="lav-modal__step-caption">Desactiva la opción de renovación automática</div>
          </div>
        </div>

        <div class="lav-modal__video">
          <video controls>
            <source src="${REPO_DIR}/video.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    `;

    paymentMethod = 'Método de pago';

    startTrial = '<div class="lav-hat">Comenzar la prueba gratuita</div>';
  } else if (lang == 'de') {
    downloadCaption =
      "<div class='lav-head__caption'>Und laden Sie dieses Bild herunter</div>";

    infoBlock = `
    <div class="lav-info">
      <div class="lav-head">
        <div class="lav-head__info">
          <div class="lav-head__title">Starten Sie Ihre 7-tägige Probephase!</div>
        </div>
      </div>

      <div class="lav-timeline">
        <!-- Left col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_blue ">Kostenlose Probephase starten</div>
          <div class="lav-timeline__date lav-timeline__date-from">04.05.2021</div>
          <div class="lav-timeline__image">
            <img src="${REPO_DIR}/img/timeline-left.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">Das bekommen Sie sofort:</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Suchen und Speichern von Bildern, die Ihnen gefallen</li>
            <li class="lav-timeline__item">Bis zu 10 Bilder oder Vektorgrafiken kostenlos herunterladen</li>
            <li class="lav-timeline__item">Sie zahlen heute nichts</li>
            <li class="lav-timeline__item">Kündigung jederzeit vor Ablauf der Probephase möglich</li>
          </ul>
        </div>

        <!-- Right col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_green">Sie zahlen hier</div>
          <div class="lav-timeline__date lav-timeline__date-to">11.05.2021</div>
          <div class="lav-timeline__image lav-timeline__image-right">
            <img src="${REPO_DIR}/img/timeline-right.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">Und noch so viel mehr für zahlende Abonnenten</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Flexibler Tarif ab 99 $ pro Jahr</li>
            <li class="lav-timeline__item">Laden Sie beliebige in Ihrem Tarif enthaltene Bilder oder Vektorgrafiken herunter 
            (10 Bilder/Vektorgrafiken pro Monat)</li>
            <li class="lav-timeline__item">Zusätzliche Bilder sind für 1 $ pro Bild erhältlich</li>
            <li class="lav-timeline__item">Ungenutzte Downloads werden auf den folgenden Monat übertragen</li>
          </ul>
        </div>
      </div>

      <div class="lav-footer">
        <div class="lav-footer__caption">Heute fälliger Betrag</div>

        <div class="lav-footer__info">
          <div class="lav-footer__price"><span class='lav-curr'>$</span>0.00</div>
          <a href="#" class="lav-footer__cancel">Wie kann ich kündigen?</a>
        </div>
      </div>
    </div>
    `;

    summaryBlock = `
    <div class="lav-summary">
      <div class="lav-summary__title">Bestellübersicht</div>
      <div class="lav-summary__caption">Kostenlose Probephase</div>
      <div class="lav-summary__subprice"><span class='lav-curr'>$</span>0.00</div>
    
      <div class="lav-summary__footer">
        <div class="lav-summary__footer-caption">Total</div>
        <div class="lav-summary__footer-value"><span class='lav-curr'>$</span>0.00</div>
      </div>
    </div>
    `;

    modal = `
    <div class="lav-modal">
      <div class="lav-modal__body">
        <!-- Close modal -->
        <button class="lav-modal__close">
          <img src='${REPO_DIR}/img/icon-close.svg'>
        </button>

        <div class="lav-modal__title">Wie kann ich kündigen?</div>

        <div class="lav-modal__steps">
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 1</div>
            <div class="lav-modal__step-caption">Profil aufrufen</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 2</div>
            <div class="lav-modal__step-caption">Auf den Tab „Menü“ klicken</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 3</div>
            <div class="lav-modal__step-caption">Auf „Einstellungen“ klicken</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 4</div>
            <div class="lav-modal__step-caption">Den Schieberegler für die automatische Verlängerung auf „Aus“ stellen</div>
          </div>
        </div>

        <div class="lav-modal__video">
          <video controls>
            <source src="${REPO_DIR}/video.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    `;

    paymentMethod = 'Zahlungsmethode';

    startTrial = '<div class="lav-hat">Kostenlose Probephase starten</div>';
  } else if (lang == 'fr') {
    downloadCaption =
      "<div class='lav-head__caption'>Et télécharger cette image</div>";

    infoBlock = `
    <div class="lav-info">
      <div class="lav-head">
        <div class="lav-head__info">
          <div class="lav-head__title">Commencer la période d’essai de 7 jours !</div>
        </div>
      </div>

      <div class="lav-timeline">
        <!-- Left col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_blue ">Démarrer la période d’essai</div>
          <div class="lav-timeline__date lav-timeline__date-from">04.05.2021</div>
          <div class="lav-timeline__image">
            <img src="${REPO_DIR}/img/timeline-left.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">Ce que vous obtenez immédiatement:</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Recherche et enregistrement de vos images préférées</li>
            <li class="lav-timeline__item">Téléchargement gratuit de 10 images ou vecteurs</li>
            <li class="lav-timeline__item">Vous ne payez pas aujourd’hui</li>
            <li class="lav-timeline__item">Annulation gratuite à tout moment avant la fin de la période d’essai</li>
          </ul>
        </div>

        <!-- Right col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_green">Vous payez ici</div>
          <div class="lav-timeline__date lav-timeline__date-to">11.05.2021</div>
          <div class="lav-timeline__image lav-timeline__image-right">
            <img src="${REPO_DIR}/img/timeline-right.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">Et bien plus une fois votre abonnement payé</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Activation d'un Plan Flexible pour 99 $ par an</li>
            <li class="lav-timeline__item">Téléchargez des images et des vecteurs en fonction de votre plan (10 images et vecteurs tous le mois)</li>
            <li class="lav-timeline__item">Transfert des téléchargements inutilisés sur le mois suivant</li>
            <li class="lav-timeline__item">Chaque image supplémentaire pour 1 $</li>
          </ul>
        </div>
      </div>

      <div class="lav-footer">
        <div class="lav-footer__caption">Somme due aujourd’hui</div>

        <div class="lav-footer__info">
          <div class="lav-footer__price"><span class='lav-curr'>$</span>0.00</div>
          <a href="#" class="lav-footer__cancel">Comment puis-je annuler ?</a>
        </div>
      </div>
    </div>
    `;

    summaryBlock = `
    <div class="lav-summary">
      <div class="lav-summary__title">Résumé de la commande</div>
      <div class="lav-summary__caption">la période d’essai</div>
      <div class="lav-summary__subprice"><span class='lav-curr'>$</span>0.00</div>
    
      <div class="lav-summary__footer">
        <div class="lav-summary__footer-caption">Résumé</div>
        <div class="lav-summary__footer-value"><span class='lav-curr'>$</span>0.00</div>
      </div>
    </div>
    `;

    modal = `
    <div class="lav-modal">
      <div class="lav-modal__body">
        <!-- Close modal -->
        <button class="lav-modal__close">
          <img src='${REPO_DIR}/img/icon-close.svg'>
        </button>

        <div class="lav-modal__title">Comment puis-je annuler ?</div>

        <div class="lav-modal__steps">
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Étape 1</div>
            <div class="lav-modal__step-caption">Accéder à votre profil</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Étape 2</div>
            <div class="lav-modal__step-caption">Cliquez sur l’onglet Menu</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Étape 3</div>
            <div class="lav-modal__step-caption">Cliquez sur Configuration</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Étape 4</div>
            <div class="lav-modal__step-caption">Réglez le bouton de renouvellement automotique sur Off</div>
          </div>
        </div>

        <div class="lav-modal__video">
          <video controls>
            <source src="${REPO_DIR}/video.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    `;

    paymentMethod = 'Mode de paiement';

    startTrial = '<div class="lav-hat">Démarrer la période d’essai</div>';
  }

  /***  HotJar ***/

  /***  END_HotJar ***/

  /***  GaEvents ***/
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    if (!label) {
      labael = '';
    }
    if (!value) {
      value = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Experiment - Recently Viewed Block',
        eventAction: action,
        eventLabel: label,
        eventValue: value,
      };
      dataLayer.push(eventObj);
      // console.log('FireEvent', eventObj);
    } catch (e) {
      // console.log(e);
    }
  }
  /***  END_GaEvents ***/

  /***  Translates ***/

  // let recentlyText = 'Recently viewed';
  // let lang = document.querySelector('html').lang;

  // if (lang == 'ru') {
  //   recentlyText = 'Недавно просмотренные';
  // } else if (lang == 'es-es') {
  //   recentlyText = 'Visto recientemente';
  // } else if (lang == 'pt-br') {
  //   recentlyText = 'Visualizado recentemente';
  // } else if (lang == 'it') {
  //   recentlyText = 'Visualizzato recentemente';
  // } else if (lang == 'pl') {
  //   recentlyText = 'Ostatnio oglądane';
  // } else if (lang == 'nl') {
  //   recentlyText = 'Recent bekeken';
  // } else if (lang == 'de') {
  //   recentlyText = 'Zuletzt angesehen';
  // } else if (lang == 'fr') {
  //   recentlyText = 'Vu récemment';
  // } else if (lang == 'tr') {
  //   recentlyText = 'Son Görüntülenen';
  // }

  /***  END_Translates ***/

  /***  InitStyles ***/
  let stylesList = `
  .fields-group__part .field-box {
    margin-left: 0;
  }
  .billing-trial__wrap {
    padding: 0;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    align-items: flex-start;
    margin-bottom: 75px;
  }
  .billing-trial__order-info, .billing-trial__cell-title {
    display: none;
  }
  .lav-info {
    width: 780px;
    max-width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 48px 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 40px 0 rgb(0 0 0 / 8%);
    margin-right: 27px;
  }
  .billing-trial__cell {
    max-width: 403px;
    min-height: 650px;
    padding: 40px;
    padding-top: 64px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 40px 0 rgb(0 0 0 / 8%);
  }
  .billing-trial__cell_benefits {
    display: none;
  }
  .lav-head {
    display: flex;
    align-items: center;
    margin-bottom: 57px;
  }
  .lav-head__caption {
    margin-top: 20px;
    font-size: 16px;
    line-height: 18px;
    color: #3C3C3C;
  }
  .lav-head__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #3C3C3C;
  }
  .lav-head__image {
    margin-right: 32px;
    max-height: 155px;
    max-width: 230px;
    width: auto;
    flex-shrink: 0;
    border-radius: 4px;
  }
  .lav-timeline {
    display: flex;
  }
  .lav-timeline__block {
    flex: 1;
  }
  .lav-timeline__block + .lav-timeline__block {
    margin-left: 15px;
  }
  .lav-timeline__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 3px;
  }
  .lav-timeline__title_blue {
    color: #4792DE;
  }
  .lav-timeline__title_green {
    color: #21C35D;
  }
  .lav-timeline__date {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #696969;
  }
  .lav-timeline__image {
    margin: 17px 0 30px;
    height: 24px;
    display: flex;
    align-items: center;
    margin-left: -7px;
  }
  .lav-timeline__image-right {
    margin-left: -15px;
  }
  .lav-timeline__subtitle {
    margin-bottom: 26px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #3C3C3C;
  }
  .lav-timeline__list {
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .lav-timeline__item {
    position: relative;
    padding-left: 22px;
  }
  .lav-timeline__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
    width: 13px;
    height: 9px;
    background: url(${REPO_DIR}/img/timeline-check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-timeline__item + .lav-timeline__item {
    margin-top: 20px;
  }
  .lav-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 41px;
    padding-top: 31px;
    border-top: 1px solid #DBDBDB;
  }
  .lav-footer__caption {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #3C3C3C;
  }
  .lav-footer__info {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .lav-footer__price {
    margin-right: 36px;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #3C3C3C;
  }
  .lav-footer__cancel {
    font-size: 12px;
    line-height: 20px;
    text-transform: capitalize;
    color: #4792DE;
    transition: 0.2s;
  }
  .lav-footer__cancel:hover {
    opacity: 0.7;
  }
  .lav-hat {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    background: #0E2A54;
    border-radius: 8px 8px 0px 0px;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .billing-process {
    background: #F0F1F3;
    border-radius: 8px;
    padding: 20px 20px 30px;
  }
  @media screen and (min-width: 991px) {
    .billing-trial {
      max-width: 1250px;
    }
  }
  .billing-process_trial .billing-process__btn {
    background-color: #4792de;
    border-color: #4792de;
  }
  .billing-process_trial .billing-process__btn:hover {
    background-color: #2482e2;
  }
  .lav-summary {
    margin-bottom: 20px;
    text-align: left;
  }
  .lav-summary__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #3C3C3C;
  }
  .lav-summary__caption {
    font-size: 16px;
    line-height: 18px;
    color: #3C3C3C;
    margin-top: 20px;
  }
  .lav-summary__subprice {
    font-weight: bold;
    font-size: 36px;
    line-height: 41px;
    color: #3C3C3C;
    margin-top: 5px;
  }
  .lav-summary__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    color: #3C3C3C;
    padding-top: 16px;
    border-top: 1px solid #DBDBDB;
    margin-top: 33px;
  }
  .lav-summary__footer-caption {
    font-size: 18px;
    line-height: 21px;
  }
  .lav-summary__footer-value {
    font-size: 20px;
    line-height: 23px;
  }
  .billing-trial__form .fields-group__wrap {
    height: auto;
  }
  .fields-group__wrap {
    display: block;
  }
  .fields-group__part_half {
    width: 100%;
  }
  .fields-group.focus .fields-group__wrap {
    border-width: 1px;
  }
  .lav-modal {
    position: fixed;
    display: flex;
    padding: 15px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    outline: 0;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(66, 66, 66, 0.73);
    transition: 0.35s;
    pointer-events: none;
    opacity: 0;
  }
  
  .lav-modal_active {
    opacity: 1;
    pointer-events: auto;
  }
  
  .lav-modal__body {
    position: relative;
    margin: auto;
    max-width: 754px;
    min-height: 568px;
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
    padding: 20px 97px 45px;
    background: #F4F4F5;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  
  .lav-modal__close {
    position: absolute;
    top: 17px;
    width: 25px;
    height: 25px;
    right: 17px;
    padding: 0;
    border: 0;
    outline: none;
    line-height: 0;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-modal__close:hover{
    opacity: 0.35;
  }
  .lav-modal__title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #000000;
  }
  .lav-modal__step-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #1F53C9;
    margin-bottom: 5px;
  }
  .lav-modal__step {
    padding: 0 15px;
    max-width: 202px;
    width: 100%;
  }
  .lav-modal__step-caption {
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  .lav-modal__steps {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px 20px;
  }
  .lav-modal__video {
    background: #C4C4C4;
    border-radius: 7px;
    // margin-top: auto;
    margin-bottom: 54px;
  }
  .lav-modal__video video {
    width: 560px;
    height: 349px;
  }
  .billing-process_trial .billing-process__label {
    color: #3C3C3C;
    font-size: 10.5px;
  }
  .billing-process_trial .icon-secure-small {
    width: 14px;
    height: 17px;
    background: url(${REPO_DIR}/img/icon-shield.svg) center no-repeat;
    background-size: contain;
  }
  .billing-trial__currency-select {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 102%;
    right: 0;
  }
  @media (max-width: 1250px) {
    .lav-info {
      flex-shrink: 1;
      min-width: 0;
    }
    .billing-trial__cell {
      min-width: 420px;
    }
  }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles-trial';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);
  /***  END_InitStyles ***/

  /***  Observer ***/
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        if (
          node.classList.contains('wrapper') ||
          node.classList.contains('billing-process')
        ) {
          initExp();
        }
        console.log(node);
      }
    }
  });

  observer.observe(document.querySelector('body'), {
    childList: true,
    subtree: true,
  });
  /***  END_Observer ***/

  // document.body.addEventListener('click', function (e) {
  //   // e.preventDefault();
  //   if (
  //     (e.target.href && e.target.href.includes('trial.html')) ||
  //     (e.target.closest('a') &&
  //       e.target.closest('a').href.includes('trial.html'))
  //   ) {
  //     if (e.target.closest('.file-view-modal')) {
  //       sessionStorage.setItem(
  //         'ItemMaxSizeLoad',
  //         document.querySelector('.view-file-box__image').src
  //       );
  //       console.log(e.target, e.target.closest('a'));
  //     }
  //   }
  // });

  // Start Script
  if (location.href.includes('/subscribe/trial.html')) {
    initExp();
  }

  function initExp() {
    console.log('initExp');
    if (!document.querySelector('.lav-hat')) {
      document
        .querySelector('.billing-trial__cell')
        .insertAdjacentHTML('afterbegin', startTrial);
      document.querySelector('.billing-trial__payment-title').innerText =
        paymentMethod;
    }

    if (!document.querySelector('.lav-info')) {
      buildInfoBlock();
    }
    if (!document.querySelector('.lav-summary')) {
      buildSummaryBlock();
    }
    if (!document.querySelector('.lav-modal')) {
      initModal();
    }

    if (document.querySelector('.billing-trial__currency-select')) {
      document
        .querySelector('.billing-trial__cell')
        .insertAdjacentElement(
          'beforeend',
          document.querySelector('.billing-trial__currency-select')
        );
    }

    // document.querySelectorAll('.lav-curr').forEach(function (currItem) {
    //   if (document.querySelector('.d-curr')) {
    //     currItem.innerText = document.querySelector('.d-curr').innerText;
    //   }
    // });
  }

  function buildInfoBlock() {
    document
      .querySelector('.billing-trial__wrap')
      .insertAdjacentHTML('afterbegin', infoBlock);

    if (sessionStorage.getItem('ItemMaxSizeLoad')) {
      document
        .querySelector('.lav-head')
        .insertAdjacentHTML(
          'afterbegin',
          `<img class="lav-head__image" src="${sessionStorage.getItem(
            'ItemMaxSizeLoad'
          )}" />`
        );
      document
        .querySelector('.lav-head__info')
        .insertAdjacentHTML('beforeend', downloadCaption);
    }

    document.querySelector('.lav-timeline__date-from').innerText =
      new Date().toLocaleDateString();

    document.querySelector('.lav-timeline__date-to').innerText = new Date(
      new Date().getTime() + 604800000
    ).toLocaleDateString();

    if (document.querySelector('.lav-footer__cancel')) {
      document
        .querySelector('.lav-footer__cancel')
        .addEventListener('click', function (e) {
          e.preventDefault();
          document
            .querySelector('.lav-modal')
            .classList.add('lav-modal_active');
        });
    }
  }

  function buildSummaryBlock() {
    document
      .querySelector('.billing-process')
      .insertAdjacentHTML('afterbegin', summaryBlock);
  }

  function initModal() {
    document.querySelector('body').insertAdjacentHTML('beforeend', modal);

    let modalEl = document.querySelector('.lav-modal');

    document
      .querySelector('.lav-modal__close')
      .addEventListener('click', function (e) {
        e.preventDefault();
        modalClose();
      });

    modalEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('lav-modal_active')) {
        modalClose();
      }
    });

    function modalClose() {
      modalEl.classList.remove('lav-modal_active');
    }
  }
})();
