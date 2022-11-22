const drawingWindow = document.querySelector('.drawing--window');
const manipulationWindow = document.querySelector('.manipulation--window');
const colors = document.querySelector('.colors');
const colorNamer = document.querySelector('.color-name');
const changeSqrBtn = document.querySelector('button');
const eraserBtn = document.querySelector('.eraser--button');
const clearBtn = document.querySelector('.clear--button');
const blackBtn = document.querySelector('.black--button');
const rainbowBtn = document.querySelector('.rainbow--button');
const allButtons = document.querySelectorAll('.buttons');

let sizeChoice = 16;
let currentColor = 'black';
let isColorSelected = false;
colorNamer.innerText = 'black';
colorNamer.style.color = 'white';
colorNamer.classList = [];
colorNamer.classList.add('black');

updateSquaresSize(sizeChoice);

function updateSquaresSize(diseredSize) {
  drawingWindow.innerHTML = '';
  sqrsPixels = drawingWindow.getBoundingClientRect().width / diseredSize;
  for (let i = 0; i < diseredSize ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add(`square`);
    square.classList.add(`square${i}`);
    square.style.width = `${sqrsPixels}px`;
    square.style.height = `${sqrsPixels}px`;
    square.style.backgroundColor = 'white';
    drawingWindow.appendChild(square);
  }
}

function resizeSquares(diseredSize) {
  const allSquares = document.querySelectorAll(`.square`);
  allSquares.forEach((square) => {
    sqrsPixels = drawingWindow.getBoundingClientRect().width / diseredSize;
    square.style.width = `${sqrsPixels}px`;
    square.style.height = `${sqrsPixels}px`;
  });
}

drawingWindow.addEventListener('mouseover', function (e) {
  e.target.style.backgroundColor = `${currentColor}`;
});

window.addEventListener('resize', function () {
  resizeSquares(sizeChoice);
});

colors.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('color') && !isColorSelected) {
    colorNamer.classList = [];
    colorNamer.innerText = e.target.classList[1];
    colorNamer.style.color = 'white';
    colorNamer.style.textShadow = `1px 1px 2px black`;
    colorNamer.classList.add(e.target.classList[1]);
  }
});

colors.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('color') && !isColorSelected) {
    colorNamer.classList = [];
    colorNamer.classList.add('color-name');
    colorNamer.innerText = ' ';
  }
});

changeSqrBtn.addEventListener('click', function (e) {
  e.preventDefault();
  sizeChoice = document.getElementById('change-squares').value;
  document.getElementById('change-squares').value = '';
  updateSquaresSize(sizeChoice);
});

colors.addEventListener('click', function (e) {
  if (e.target.classList.contains('color')) {
    console.log(e.target.dataset.clr);
    currentColor = e.target.dataset.clr;
    colorNamer.classList = [];
    colorNamer.innerText = e.target.classList[1];
    colorNamer.style.color = 'white';
    colorNamer.style.textShadow = `1px 1px 2px black`;
    colorNamer.classList.add(e.target.classList[1]);
    isColorSelected = true;
    allButtons.forEach(function (btn) {
      btn.classList.remove('pressed');
    });
  }
});

eraserBtn.addEventListener('click', function (e) {
  allButtons.forEach(function (btn) {
    btn.classList.remove('pressed');
  });
  e.target.classList.add('pressed');
  currentColor = 'white';
  colorNamer.classList = [];
  colorNamer.innerText = 'white';
  colorNamer.style.color = 'black';
  colorNamer.style.textShadow = `1px 1px 2px black`;
});

clearBtn.addEventListener('click', function (e) {
  allButtons.forEach(function (btn) {
    btn.classList.remove('pressed');
  });
  e.target.classList.add('pressed');
  updateSquaresSize(sizeChoice);
  setTimeout(() => e.target.classList.remove('pressed'), 100);
});

blackBtn.addEventListener('click', function (e) {
  allButtons.forEach(function (btn) {
    btn.classList.remove('pressed');
  });
  e.target.classList.add('pressed');
  currentColor = 'black';
  colorNamer.classList = [];
  colorNamer.classList.add('black');
  colorNamer.innerText = 'black';
  colorNamer.style.color = 'white';
});
