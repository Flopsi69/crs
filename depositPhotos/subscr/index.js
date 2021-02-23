function gaEvent(action, label, value) {
  try {
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: 'Experiment — Subscription',
      eventAction: action,
      eventLabel: label,
      eventValue: value
    });
  } catch (e) {}
};

try{
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:410340,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
      hj('trigger', 'Experiment__Subscription');
}
catch (e) { }

gaEvent('loaded', '', '');

/* styles start */
let stylesList = `
  ._2V8TI{
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.16);
    max-width: 950px;
    width: 100%;
    margin: auto;
    border-radius: 0 0 8px 8px;
    z-index: 1;
  }
  .subscribe_upgrade .subscribe__plans-box ._2V8TI{
    max-width: 950px;
    min-height: 475px;
  }
  ._2ZubU {
    max-width: 950px;
  }
  .mixed-plans-constructor__info-box {
    width: 100%;
    padding-right: 0;
  }
  .plans__head {
    position: relative;
    z-index: 10;
    margin-bottom: -1px;
    display: flex;
    max-width: 950px;
    width: 100%;
  }
  .plans__head-item {
    flex: 1;
    font-weight: 400;
    padding: 18px;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: #3C3C3C;
    background-color: #E1EFFD;
    cursor: pointer;
    transition: .5s;
  }
  .plans__head-item:first-child {
    border-radius: 8px 0 0 0;
  }
  .plans__head-item:last-child {
    border-radius: 0px 8px 0 0;
  }
  .plans__head-item.active {
    background-color: #fff;
    font-weight: 700;
    pointer-events: none;
  }
  .plans__head-item:hover {
    background-color: #b5cae0;
  }
  .subscribe__main-block form>h2,.subscribe__main-block form:before  {
    display: none;
  }
  .subscribe__main-block form {
    box-shadow: none;
  }
  ._3co48 {
    font-size: 15px;
    padding: 5px 12px;
    border-radius: 20px;
    margin-left: 8px;
    top: -3px;
    display: inline-block;
    height: auto;
  }
  ._1HGbz {
    font-size: 20px;
  }
  .subscribe__main-block form button {
    font-size: 22px;
    max-width: 385px;
    height: 65px;
    border-radius: 50px;
    margin-top: 55px;
  }
  // ._1loUB {
  //   border-radius: 0 50px 50px 0;
  // }
  // Todo
  // .plans__currency-box {
  //   right: 0;
  //   bottom: -50px;
  //   margin: 0;
  // }
  // .currency-select_watery {
  //   margin-top: 0;
  // }
  // .plan-constructor__subproducts-box {
  //   margin-bottom: 20px;
  // }
  // .plan-constructor .plan-constructor__footer {
  //   padding-top: 55px;
  // }
  ._1fz6A {
    margin: 0;
  }
  .plan-constructor_ahead .plan-constructor__buy, .plan-constructor__buy {
    height: 62px;
    border-radius: 50px;
    max-width: 385px;
    width: 100%;
  }
  .subscribe_upgrade .subscribe__group-content {
    margin-bottom: 20px;
  }
  ._pwXQx {
    margin: 0 7px;
    transform: scale(1.2);
  }
  .go-plan-wrap {
    display: flex;
    width: 100%;
    max-width: 700px;
  }
  ._2V8TI>form {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    margin: auto!important;
    padding-bottom: 60px;
  }
  ._gfk8o {
    margin-bottom: 60px;
  }
  ._2V8TI>form.active {
    position: static;
    opacity: 1;
    pointer-events: auto;
  }
  .plans__container_image .plan-constructor:not(.mixed-plans-constructor) {
    max-width: 730px;
  }
  .plan-constructor__title {
    display: none;
  }
  .plan-constructor_ahead, .plan-constructor {
    padding-top: 15px;
  }
  .plan-constructor .plan-constructor__offers-cell {
    padding: 0;
    max-width: 330px;
    margin-left: auto;
  }
  .mixed-plans-constructor__info-box {
    padding-left: 0;
  }
  .plan-constructor__advantage-item+.plan-constructor__advantage-item {
    margin-top: 13px;
  }
  ._2S8dJ {
    display: none;
  }
  .plan-constructor__advantage-item img {
    display: none;
  }
  .plan-constructor__advantage-item.exluded {
    text-decoration: line-through;
  }
  .plan-constructor__advantage-item.exluded i {
    display: none
  }
  .plan-constructor__advantage-item.exluded img {
    position: absolute;
    left: 0;
    top: 3px;
    display: block;
  }
  .plans__box>form:last-child .plan-constructor__frame-row+.plan-constructor__frame-row   {
    height: 300px;
  }
  ._fYu4S {
    color: #525252;
    font-weight: bold;
  }
  .offer-row__amount .offer-row__popular {
    top: -3px;
  }
  ._fYu4S .price-capt {
    background: #FFD6D6;
    border-radius: 10px;
    padding: 3px 6px;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    color: #E74C3C;
    position: relative;
    top: -2px;
  }
  ._15kW6 {
      color: #fff;
      border: none;
      background-color: #4792de;
  }
  ._15kW6:hover {
    background-color: #2482E2!important;
  }
  #root>.wrapper {
    opacity: 1;
  }
`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* styles end */

const plansHeader = `
  <div class="plans__head">
    <div class="plans__head-item active" data-tab-name="subscribe">Subscription</div>
    <div class="plans__head-item" data-tab-name="demand">On demand</div>
  </div>
`;


let advantages;
let perMonth;
getAdvantages(location.hostname.split(".")[0]);

function getAdvantages(lang) {
  const advantagesEN = `
    <div class="mixed-plans-constructor__info-box _info-box">
      <ul class="plan-constructor__advantages" style='line-height: 1.5'>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Download files any time within a year</li>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Full access to our library</li>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Download photos and vectors (JPG, EPS and AI)</li>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>All file sizes</li>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Print or digital use </li>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Use for marketing and advertising</li>
          <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Printing rights - <strong>up to</strong> 500,000 copies</li>
          <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Life-long rights to use images</li>

          <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
          <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
          Use for items for resale
          </li>
          <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
          <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
          Use in merchandise and promotional items for sale or distribution
          </li>
      </ul>
    </div>
  `;

  const advantagesCS = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Stahujte soubory kdykoli v průběhu roku
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Plný přístup do naší knihovny
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Stahujte fotografie a vektory (JPG, EPS a AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Všechny velikosti souborů
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Tisk nebo digitální použití
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Použití pro marketing a reklamu
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Práva na tisk – více než 500 000 kopií
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Celoživotní práva na používání snímků
      </li>

      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Použití pro zboží k dalšímu prodeji
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Použití pro reklamní předměty a zboží k prodeji nebo distribuci
      </li>
    </ul>
  </div>
  `;

  const advantagesDE = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Dateien jederzeit innerhalb eines Jahres herunterladen
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Vollständiger Zugriff auf unsere Bibliothek
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Fotos und Vektorgrafiken herunterladen (.JPG, .EPS und .AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Alle Dateigrößen
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Für Druck- oder Digitalmedien
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Gestaltung von Marketing- und Werbematerialien
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Druckberechtigungen – mehr als 500 000 Exemplare
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Lebenslang gültige Nutzungsrechte für Bilder
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Darstellung von Artikeln für den Weiterverkauf
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Gestaltung von Merchandising- oder Werbeartikeln für den Verkauf oder Vertrieb
      </li>
    </ul>
  </div>
  `;

  const advantagesEL = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Κατεβάστε αρχεία οποιαδήποτε στιγμή στο διάστημα ενός έτους
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Πλήρης πρόσβαση στη βιβλιοθήκη μας
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Κατεβάστε φωτογραφίες και διανυσματικά αρχεία (JPG, EPS και AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Αρχεία όλων των μεγεθών
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Για εκτύπωση ή ψηφιακή χρήση
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Χρήση για σκοπούς μάρκετινγκ και διαφήμισης
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Δικαιώματα εκτύπωσης - πάνω από 500.000 αντίγραφα
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Ισόβια δικαιώματα χρήσης για τις φωτογραφίες
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Χρήση για αντικείμενα για μεταπώληση
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Χρήση σε εμπορεύματα και προωθητικά προϊόντα για πώληση ή διανομή
      </li>
    </ul>
  </div>
  `;

  const advantagesES = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Descargue archivos en cualquier momento en un plazo de un año
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Acceso completo a nuestra biblioteca
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Descargue fotos y vectores (JPG, EPS y AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Todos los tamaños de archivos
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Impresión o uso digital
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Para marketing o publicidad
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Derechos de impresión: más de 500 000 copias
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Derechos perpetuos para usar las imágenes
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Uso de elementos para la reventa
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Uso en mercadería y artículos promocionales para venta o distribución
      </li>
    </ul>
  </div>
  `;

  const advantagesFL = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Lataa tiedostot milloin tahansa vuoden aikana
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Kirjastomme täysi käyttöoikeus
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Lataa valokuvia ja vektorigrafiikkaa (JPG, EPS ja AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Kaikki tiedostokoot
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Painotuotteet ja digitaalinen käyttö
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Markkinointi- ja mainoskäyttö
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Tulostusoikeudet – yli 500 000 kopiota
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Kuvien elinikäiset käyttöoikeudet
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Käyttö myyntiin tarkoitetuissa tuotteissa
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Käyttö myyntiin tai jakeluun tarkoitetuissa kauppatavaroissa tai mainostuotteissa
      </li>
    </ul>
  </div>
  `;

  const advantagesFR = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Téléchargez des fichiers quand vous voulez pendant un an
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Bénéficiez d’un accès complet à notre bibliothèque
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Téléchargez des photos et des images vectorielles (formats JPG, EPS et AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Fichiers de toutes tailles
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pour impression ou affichage numérique
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pour le marketing et la publicité
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Droits d’impression - plus de 500 000 copies
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Droit d'utiliser les images à vie
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Pour les articles destinés à la revente
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Pour les marchandises et les articles promotionnels à la vente ou à la distribution
      </li>
    </ul>
  </div>
  `;

  const advantagesHU = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Töltse le egy éven belül bármikor a fájlokat
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Teljes hozzáférés a könyvtárunkhoz
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Fotók és vektorképek letöltése (JPG, EPS és AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Minden fájlméret
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Nyomtatott vagy digitális használatra
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Marketinghez és reklámozáshoz
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Nyomtatási jogok - több mint 500 000 másolat
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Élethosszig tartó használati jog a képekre
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Továbbértékesítéshez
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Árucikkek és reklámtárgyak értékesítéséhez és forgalmazásához
      </li>
    </ul>
  </div>
  `;

  const advantagesIT = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Scarica file in qualsiasi momento entro un anno
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Accesso completo al nostro archivio
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Scarica foto e vettori (JPG, EPS e AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Tutte le dimensioni del file
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Stampa o uso digitale
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Uso per marketing e pubblicità
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Diritti di stampa - più di 500.000 copie
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Diritti a vita sull’uso delle immagini
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Uso per articoli per la rivendita
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Uso per merchandising e articoli promozionali destinati a vendita o distribuzione
      </li>
    </ul>
  </div>
  `;

  const advantagesJA = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        1年以内はいつでもファイルのダウンロードが可能
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        すべてのライブラリーへアクセス
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        写真とベクターのダウンロード（JPG、EPS、AI）
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        すべてのファイルサイズ
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        印刷またはデジタルでの使用
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        マーケティングや広告での使用
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        印刷権 - 500,000部以上
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        画像使用の永久権
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        再販アイテムでの使用
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        販売または流通のための商品や販促品での使用
      </li>
    </ul>
  </div>
  `;

  const advantagesKO = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        연중 언제든지 파일 다운로드
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        라이브러리에 대한 모든 권한
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        사진 및 벡터 다운로드(JPG, EPS, AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        모든 파일 크기
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        인쇄 또는 디지털 사용
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        마케팅 및 광고에 사용
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        인쇄 권한 - 500,000부 초과
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        이미지 장기 사용 권한
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        재판매용 아이템에 사용
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        판매 또는 배포용 상품과 프로모션 아이템에 사용
      </li>
    </ul>
  </div>
  `;

  const advantagesPL = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pobieranie plików o dowolnej porze w ciągu roku
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pełny dostęp do naszej biblioteki
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pobieranie zdjęć i grafik wektorowych (JPG, EPS i AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pliki w każdym rozmiarze
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Wersje drukowane lub cyfrowe
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Możliwość wykorzystania z marketingu i reklamie
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Prawa do druku – ponad 500 000 kopii
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Bezterminowe prawa do wykorzystywania obrazów
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Możliwość stosowania na artykułach przeznaczonych do sprzedaży
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Możliwość stosowania na artykułach handlowych i promocyjnych, przeznaczonych do sprzedaży lub dystrybucji
      </li>
    </ul>
  </div>
  `;

  const advantagesPT = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Descarregar os ficheiros a qualquer altura, no prazo de um ano
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pleno acesso à nossa biblioteca
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Descarregar fotos e vetores (JPG, EPS e AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Todos os tamanhos de ficheiro
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Impressão ou utilização digital
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Utilização para comercialização e publicidade
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Direitos de impressão - mais de 500 000 cópias
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Direitos vitalícios para utilização de imagens
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Utilização no que respeita a artigos para revenda
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Utilização em mercadorias e artigos promocionais para venda ou distribuição
      </li>
    </ul>
  </div>
  `;

  const advantagesTR = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Yıl içinde istediğiniz dosyayı indirin
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Kütüphanemize tam erişim
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Fotoğraf ve vektör indirin (JPG, EPS ve AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Tüm dosya boyutları
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Baskı veya dijital kullanım
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pazarlama ve reklam amaçlı kullanım
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Baskı alma hakkı - 500.000’den fazla kopya
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Görselleri yaşam boyu kullanma hakkı
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Ürünlerin yeniden satış için kullanımı
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Satış veya dağıtım amaçlı ticari ve promosyon ürünleri kullanımı
      </li>
    </ul>
  </div>
  `;

  const advantagesZH = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        一年内可随时下载文件
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        对我们的图书馆有完全访问权
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        下载照片和矢量图（JPG、EPS 和 AI）
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        所有文件大小
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        供打印或数字用途
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        用于营销和广告
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        印刷权——超过 500,000 份
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        终身使用图像的权利
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        用于供转售的物品
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        用于销售和分发的商品和促销品
      </li>
    </ul>
  </div>
  `;

  const advantagesEsM = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Descargue los archivos en cualquier momento durante un año
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Acceso completo a nuestra biblioteca
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Descargue fotos y vectores (JPG, EPS y AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Archivos de cualquier tamaño
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Para uso físico o digital
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Para marketing y publicidad
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Derechos de impresión: más de 500 000 copias
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Derechos vitalicios para usar las imágenes
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Artículos aptos para la reventa
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Uso como artículos promocionales y productos de marca, para su venta o distribución
      </li>
    </ul>
  </div>
  `;

  const advantagesID = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pengunduhan file kapan saja dalam setahun
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Akses penuh ke perpustakaan kami
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pengunduhan foto dan vektor (JPG, EPS dan AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Semua ukuran file
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Penggunaan cetak atau digital
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Penggunaan untuk pemasaran dan iklan
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Hak pencetakan - lebih dari 500.000 salinan
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Hak seumur hidup untuk menggunakan gambar
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Penggunaan untuk item yang dijual kembali
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Penggunaan dalam item promosi dan barang dagangan untuk penjualan atau distribusi
      </li>
    </ul>
  </div>
  `;

  const advantagesPtB = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Transfira os ficheiros a qualquer momento durante um ano
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Acesso completo à sua galeria
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Transfira fotografias e vetores (JPG, EPS e AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Todos os tamanhos de ficheiros
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Utilização impressa ou digital
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Utilização para marketing e publicidade
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Direitos de impressão – mais de 500 000 cópias
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Direitos perpétuos de utilização de imagens
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Utilização para itens para revenda
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Utilização em merchandise e itens promocionais para venda ou distribuição
      </li>
    </ul>
  </div>
  `;

  const advantagesNL = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Download bestanden op elk moment binnen een jaar
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Volledige toegang tot onze bibliotheek
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Download foto's en vectoren (JPG, EPS en AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Elke bestandsgrootte
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Printen of digitaal gebruik
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Gebruik voor marketing en reclame
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Drukrechten - meer dan 500.000 kopieën
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Levenslang recht op gebruik van afbeeldingen
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Gebruik voor artikelen in de verkoop
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Gebruik voor merchandise en promotiemateriaal voor verkoop en distributie
      </li>
    </ul>
  </div>
  `;

  const advantagesSW = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Ladda ner filer när som helst inom ett år
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Fullständig åtkomst till vår bildbank
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Hämta foton och vektorer (JPG, EPS och AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Alla filstorlekar ingår i paketet
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        För tryck eller digital användning
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Användning för marknadsföring och reklam
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Tryckupplagor upp till 500,000 utskrifter enligt Standard fleranvändarlicens och mer än 500,000 utskrifter enligt Utökad licens
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Livslånga rättigheter för att använda bilderna
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Används för artiklar för återförsäljning
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Används i varor och reklamartiklar för försäljning eller distribution
      </li>
    </ul>
  </div>
  `;

  const advantagesNW = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Last ned filer når som helst i løpet av et år
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Full tilgang til biblioteket vårt
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Last ned foto og vektorer (JPG, EPS og AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pakken inneholder alle filstørrelser
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Trykk eller digital bruk
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Bruk til markedsføring og annonser
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Trykkerettigheter – opptil 500,000 eksemplarer med Standard og over 500,000 eksemplarer med Utvidet lisens
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Livslange rettigheter til bildebruk
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Brukes til gjenstander for videresalg
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Brukes i varer og salgsfremmende gjenstander for salg eller distribusjon
      </li>
    </ul>
  </div>
  `;

  const advantagesDN = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Download filer når som helst inden for et år
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Fuld adgang til vores bibliotek
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Download fotos og vektorer (JPG, EPS og AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Pakken inkluderer alle filstørrelser
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Print eller digital brug
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Brug til markedsføring og reklame
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Udskrivningsrettigheder – op til 500,000 kopier som standard og mere end 500,000 kopier ved udvidet licens
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Livslange rettigheder til at bruge billeder
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Brug til genstande til videresalg
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Brug i merchandise og reklameartikler til salg eller distribution
      </li>
    </ul>
  </div>
  `;

  const advantagesUA = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Завантажуйте файли будь-коли протягом року
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Повний доступ до нашої бібліотеки
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Завантаження фото і векторів (jpg, EPS і AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        До пакету входять всі розміри зображень
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Використання в друкованому чи цифровому вигляді (з будь-якою метою, зокрема в товарах для перепродажу)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Використання для маркетингу та реклами
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Наклад до 500,000 екземплярів за Стандартною ліцензією та понад 500,000 екземплярів за Розширеною ліцензією
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Довічне право на використання зображень
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Використання для предметів або перепродажу
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Використання у сувенірній та рекламній продукції для продажу чи розповсюдження
      </li>
    </ul>
  </div>
  `;

  const advantagesRU = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Скачивайте файлы в любое время в течение года
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Полный доступ к библиотеке файлов
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Скачивание фотографий и векторов (JPG, EPS и AI)
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Все размеры файлов включены в пакет
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Печать или цифровое использование
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Использование для маркетинга и рекламы
      </li>
      <li class="plan-constructor__advantage-item advantage-toggle-text"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Тираж до 500,000 копий по Стандартной и более 500,000 копий по Расширенной лицензии
      </li>
      <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        Бессрочные права на использование изображений
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Использование для предметов для перепродажи
      </li>
      <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Использование в товарах и рекламных изделиях для продажи или распространения
      </li>
    </ul>
  </div>
  `;

  let langCurrent = lang.toLowerCase();
  if (location.pathname.split("/")[1].length == 2) {
    langCurrent = location.pathname.split("/")[1];
  }

  switch (langCurrent) {
    case "ru":
      advantages = advantagesRU;
      perMonth = "в месяц";
      break;
    case "de":
      advantages = advantagesDE;
      perMonth = "Pro Monat";
      break;
    case "fr":
      advantages = advantagesFR;
      perMonth = "Par mois";
      break;
    case "sp":
      advantages = advantagesES;
      perMonth = "Al mes";
      break;
    case "it":
      advantages = advantagesIT;
      perMonth = "Al mese";
      break;
    case "pt":
      advantages = advantagesPT;
      perMonth = "Por mês";
      break;
    case "pl":
      advantages = advantagesPL;
      perMonth = "Miesięcznie";
      break;
      // TODO
    case "nl":
      advantages = advantagesNL;
      perMonth = "Per maand";
      break;
    case "jp":
      advantages = advantagesJA;
      perMonth = "１か月につき";
      break;
    case "cz":
      advantages = advantagesCS;
      perMonth = "Za měsíc";
      break;
    case "se":
      advantages = advantagesSW;
      perMonth = "per månad";
      break;
    case "cn":
      advantages = advantagesZH;
      perMonth = "每月";
      break;
    case "tr":
      advantages = advantagesTR;
      perMonth = "Aylık";
      break;
    case "mx":
      advantages = advantagesEsM;
      perMonth = "Al mes";
      break;
    case "gr":
      advantages = advantagesEL;
      perMonth = "Ανά μήνα";
      break;
    case "ko":
      advantages = advantagesKO;
      perMonth = "매월";
      break;
    case "br":
      advantages = advantagesPtB;
      perMonth = "Por mês";
      break;
    case "hu":
      advantages = advantagesHU;
      perMonth = "Havonta";
      break;
    case "ua":
      advantages = advantagesUA;
      perMonth = "в місяць";
      break;
    case "id":
      advantages = advantagesID;
      perMonth = "Per bulan";
      break;
    // case "th":
    //   advantages = advantagesTH;
    //   perMonth = perMonthTH;
    //   break;
    case "no":
      advantages = advantagesNW;
      perMonth = "per måned";
      break;
    case "da":
      advantages = advantagesDN;
      perMonth = "om måneden";
      break;
    case "fi":
      advantages = advantagesFL;
      perMonth = "Kuukaudessa";
      break;
    default:
      advantages = advantagesEN;
      perMonth = "per month";
      break;
  }
  console.log(advantages);
};




let activeIndex = '1';
let observer = new MutationObserver(cbMutations);
observer.observe(document.querySelector('#root'), {childList: true, subtree: true, characterDataOldValue: true});

document.querySelector("._2V8TI").insertAdjacentHTML("beforebegin", plansHeader);

document.querySelectorAll(".plans__head-item").forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    activeIndex = activeIndex == '1' ? '2' : '1';
    if (el.dataset.tabName == 'demand') {
      gaEvent('click on button', 'Payment method — On demand tab', '');
    } else if(el.dataset.tabName == 'subscribe'){
      gaEvent('click on button', 'Payment method — Subscription tab', '');
    }
    initTempStyles(activeIndex);
    document.querySelector('.plans__head-item.active').classList.remove('active');
    this.classList.add('active');
  })
})

document.addEventListener("click", e => {
    if (e.target.classList.contains("_pwXQx") || e.target.classList.contains("cmp-currency-select-list__option-title") || e.target.classList.contains("cmp-currency-select-list__option-description") || e.target.classList.contains("cmp-currency-select-list__option _currency")) {
      activateYearly();
    }
})
activateYearly();

function initTempStyles() {
  if (document.querySelector("#tempStyles")) {
    document.querySelector("#tempStyles").remove();
  }

  stylesListTemp = `
    ._2V8TI>form:nth-child(${activeIndex}){
      position: static;
      opacity: 1;
      pointer-events: auto;
    }
  `;

  let stylesTemp = document.createElement('style');
  stylesTemp.innerHTML = stylesListTemp;
  stylesTemp.id = 'tempStyles';
  document.body.appendChild(stylesTemp);
}

initTempStyles(activeIndex);


setTimeout(addAdvantages, 1500);

function addAdvantages() {
  if (!document.querySelector('.plan-constructor__advantages')) {
    document.querySelector("._2ZubU ._2qbdE").insertAdjacentHTML("beforebegin", "<div class='go-plan-wrap'></div>");
    document.querySelector('.go-plan-wrap').insertAdjacentElement("afterbegin", document.querySelector("._2ZubU ._2qbdE"));
    document.querySelector('.go-plan-wrap').insertAdjacentHTML("afterbegin", advantages);

    document.querySelectorAll("._278to li").forEach(function (el, i) {
      
      el.addEventListener("click", function () {
        console.log("click");
        if (activeIndex == 2) {
          let toggleText = document.querySelector('.advantage-toggle-text').innerText;
          // addAdvantages();
          if (document.querySelector("._2ZubU").name == 16) {
            document.querySelectorAll('.exluded-trigger').forEach(function (el) {
              el.classList.remove('exluded');
              // toggleText =  = 'more than';
            }) 
          } else {
            document.querySelectorAll('.exluded-trigger').forEach(function (el) {
              el.classList.add('exluded');
              // document.querySelector('.advantage-toggle-text').innerText = 'up to';
            }) 
          }
        }
      })
    })
  }
}

// setTimeout(() => {;
  // let subscribeWrapEl = document.querySelector('.subscribe__plans-box');
 
// }, 1000);

function cbMutations(mutations) {
  for (let mutation of mutations) {
    for(let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      // console.log(node);
      if (node.classList.contains("_13T5U")) {
        console.log('yes');
        addAdvantages();
        document.querySelector("._2V8TI").insertAdjacentHTML("beforebegin", plansHeader);
        document.querySelectorAll(".plans__head-item").forEach(el => {
          el.addEventListener('click', function (e) {
            e.preventDefault();
            activeIndex = activeIndex == '1' ? '2' : '1';
            if (el.dataset.tabName == 'demand') {
              gaEvent('click on button', 'Payment method — On demand tab', '');
            } else if(el.dataset.tabName == 'subscribe'){
              gaEvent('click on button', 'Payment method — Subscription tab', '');
            }
            initTempStyles(activeIndex);
            document.querySelector('.plans__head-item.active').classList.remove('active');
            this.classList.add('active');
          })
        })
        activateYearly();
      }
    }
  }
}

function activateYearly() {
  if (document.querySelector('._3yrOV ._2DSr9') && document.querySelector("._pwXQx").dataset.key == "true") {
    document.querySelectorAll("._3yrOV ._2DSr9").forEach(function (el, i) {
      if (el.querySelector('._Ps3yf .d-curr')) {
        let priceEl = el.querySelector('._fYu4S');
        let currency = el.querySelector('.d-curr').innerText;
        let price = el.querySelector('._fYu4S').innerText.match(/[\s\d]+/)[0].replaceAll(' ', '');
        let pricePerMonth = parseFloat(((price / 12).toFixed(2)).replaceAll(',', '.'));
        let priceUpdated;
        if (parseInt(priceEl.innerText)) {
          priceUpdated = `${pricePerMonth}&nbsp;${currency} ${perMonth} `;
        } else {
          priceUpdated = `${currency}${pricePerMonth} ${perMonth} `;
        }
        priceEl.innerHTML = priceUpdated; 
      }

      // let discount;
      // switch (i) {
      //   case 0:
      //     discount = '14';
      //     break;
      //   case 3:
      //     discount = '16';
      //     break;
      
      //   default:
      //     discount = '15';
      //     break;
      // }
    
      // if (!el.classList.contains('offer-row_active')) {
        // priceUpdated += `<span class='price-capt'>Save ${discount}%</span>`;
      // }

      // if (el.querySelector('.offer-row__popular')) {
      //   el.querySelector('.offer-row__amount').insertAdjacentElement('beforeend', el.querySelector('.offer-row__popular'));
      // }

    })
  }
}

