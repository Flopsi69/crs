let starsArr = {};
let arr = {};

fillArr();
function fillArr() {
  handleClick(document.querySelector('.customiser-card--fabric'));
  console.log(arr);
}

async function handleClick(card) {
  card.querySelector('.sample__button').click();

  await delay(500);

  const caption = document
    .querySelector('.modal__content tr td')
    .textContent.trim();
  const title = card
    .querySelector('.customiser-card__title')
    .textContent.trim();
  const stars = document
    .querySelector('.modal__content tr + tr td')
    .querySelectorAll('.tc--river-bed').length;

  console.log(caption, stars, title);

  if (!starsArr[stars]) starsArr[stars] = [];
  if (!arr[caption]) arr[caption] = [];

  starsArr[stars].push(title);
  arr[caption].push(title);

  const nextEl = card.closest('li').nextElementSibling;
  // console.log('nextEl', nextEl);

  if (nextEl) {
    handleClick(nextEl);
  } else {
    console.log(arr);
    console.log(starsArr);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
