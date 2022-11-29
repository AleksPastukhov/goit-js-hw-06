function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(event) {
  const getNewColor = getRandomHexColor();
  if (Number(refs.inputEl.value) > 0) {
    console.dir(Number(refs.inputEl.value));
  }
  return getNewColor;
}

function createNewBoxItem(bgColor, widhItem, hei itemNumber) {
  const boxItem = document.createElement('div');
  boxItem.classList.add(`item${itemNumber}`);
  boxItem.style.backgroundColor = 'bgColor';
    boxItem.style.width = 'bgColor';
  // boxItem.textContent = elem;
  return boxItem;
}
console.log(createNewBoxItem(getNewColor));

function onDestroyBtnClick(event) {}
