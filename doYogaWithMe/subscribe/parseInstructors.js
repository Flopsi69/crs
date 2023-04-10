let parent = document.querySelector(
  '[data-sfc-unique-id="slider642dea4477279"]'
);
let arr = [];

for (let el of parent.querySelectorAll('article')) {
  let obj = {
    img: el.querySelector('.sfc-indexCard__img').src,
    name: el.querySelector('.sfc-heading__link').innerText.trim(),
    link: el.querySelector('.sfc-heading__link').getAttribute('href'),
    caption: el.querySelector('.sfc-copy__body').innerText.trim(),
  };

  arr.push(obj);
}

console.log(arr);
