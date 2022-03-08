// Handle open question

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const questionItems = $$(".content__question-item span");

Array.from(questionItems).forEach((item) => {
  item.onclick = function () {
    const currentActive = $(".content__question-item--open");
    if (currentActive)
      currentActive.classList.remove("content__question-item--open");
    if (currentActive !== item.parentNode)
      item.parentNode.classList.toggle("content__question-item--open");
  };
});

// Handle language
// const languageBlock = $(".header__language");
// const lanaguageList = $(".header__language-list");
// languageBlock.onclick = function (e) {
//   console.log(document.activeElement);
// };

// Handle input
const labels = $$(".form label");
console.log(labels);

const inputs = $$(".form input");
console.log(inputs);

const inputWraps = $$(".form__input-wrap > div");

console.log(inputWraps);

Array.from(inputWraps).forEach((item, index) => {
  item.onclick = function () {
    inputs[index].focus();
  };
});

Array.from(inputs).forEach((item, index) => {
  item.onfocus = function () {
    console.log(labels[index]);
    labels[index].classList.add("label--up");
  };

  item.onblur = function () {
    if (item.value === "") labels[index].classList.remove("label--up");
  };
});
