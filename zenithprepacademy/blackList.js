const inputEl = document.querySelector('input[name="email"]');
const blackList = [
  'bizbuyblah',
  'lubde',
  'bitvoo',
  'ezgiant',
  'dni8',
  'triots',
  'dealerspecialties',
  'bracc',
  'temporary-mail',
  'fsouda',
  'ggusd',
  'jollyfree',
  'cmeinbox',
  'crtsec',
  'paxven',
  'nightorb',
  'fandua',
  'chotunai',
  'iucake',
  'mirtox',
  'eurokool',
  'laserlip',
  'fanneat',
  'jobsfeel',
  'mustbeit',
  'ngopy',
  'mailinator',
  'runte.org',
  'aosod',
  'ritchie',
  'otanhome',
  'satterfield',
  'wwgoc',
  'pubpng',
  'jourrapide',
  'wiroute',
  'wifame',
  'wireps',
  'vootin',
  'qq',
  'buckeye-express',
  'teleworm.us',
  'dayrep',
  'v2ssr',
  'test',
  'youke1',
  'gpipes',
  'rolenot',
  'luxeic',
  'valanides',
  'razuz',
  'rhyta',
  'galcake',
  'asoflex',
  'oniecan',
  'huvacliq',
];
function validateEmailByDomain() {
  // console.log('validate');
  if (
    inputEl.value &&
    inputEl.value.includes('@') &&
    inputEl.value.includes('.') &&
    blackList.includes(inputEl.value.split('@')[1].split('.')[0])
  ) {
    // console.log('Failed validate!')
    inputEl.style.borderColor = 'rgb(185, 21, 23)';
    inputEl.style.borderWidth = '3px';
    for (let item of inputEl
      .closest('.innerContent')
      .querySelectorAll('input')) {
      if (item.name !== 'email') item.removeAttribute('style');
    }
    return false;
  }
  // console.log('Successed validate!')
  return true;
}
document
  .querySelector('a[href="#submit-form"]')
  .addEventListener('click', function (e) {
    if (!validateEmailByDomain()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      // console.log("** Submit Error **");
      return;
    }
    // console.log("** Submit Success **");
  });
document.addEventListener('keydown', function (e) {
  if (
    e.target.tagName === 'INPUT' &&
    e.target.type !== 'submit' &&
    e.target.tagName !== 'TEXTAREA' &&
    e.keyCode === 13 &&
    !validateEmailByDomain()
  ) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
    // console.log("** Enter Failed **");
    return false;
  }
  // console.log("** Enter Success **");
});
