'use strict';

// Selections
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
let allSquares;

// Variables
let sizeChoice = 16;
let currentColor = 'black';
let isColorSelected = false;
let isRainbowOn = false;
colorNamer.innerText = 'black';
colorNamer.style.color = 'white';
isColorSelected = true;
colorNamer.classList = [];
colorNamer.classList.add('black');

updateSquaresSize(sizeChoice);

function updateSquaresSize(diseredSize) {
  drawingWindow.innerHTML = '';
  let sqrsPixels = drawingWindow.getBoundingClientRect().width / diseredSize;
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
    let sqrsPixels = drawingWindow.getBoundingClientRect().width / diseredSize;
    square.style.width = `${sqrsPixels}px`;
    square.style.height = `${sqrsPixels}px`;
  });
}

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
  if (isNaN(document.getElementById('change-squares').value)) return;
  sizeChoice = document.getElementById('change-squares').value;
  document.getElementById('change-squares').value = '';
  updateSquaresSize(sizeChoice);
});

colors.addEventListener('click', function (e) {
  if (e.target.classList.contains('color')) {
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
    isRainbowOn = false;
  }
});

eraserBtn.addEventListener('click', function (e) {
  allButtons.forEach(function (btn) {
    btn.classList.remove('pressed');
  });
  e.target.classList.add('pressed');
  isColorSelected = true;
  currentColor = 'white';
  colorNamer.classList = [];
  colorNamer.classList.add('white');
  colorNamer.innerText = 'white';
  colorNamer.style.color = 'black';
  colorNamer.style.textShadow = `1px 1px 2px black`;
  isRainbowOn = false;
});

clearBtn.addEventListener('click', function (e) {
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
  isColorSelected = true;
  isRainbowOn = false;
});

rainbowBtn.addEventListener('click', function (e) {
  allButtons.forEach(function (btn) {
    btn.classList.remove('pressed');
  });
  e.target.classList.add('pressed');
  currentColor = 'rainbow';
  colorNamer.classList = [];
  colorNamer.classList.add('rainbow');
  colorNamer.innerText = 'rainbow';
  colorNamer.style.color = 'white';
  isColorSelected = true;
  isRainbowOn = true;
});

colorNamer.parentElement.addEventListener(
  'mouseover',
  (e) => colorNamer.parentElement.style
);

let isMouseDown = false;

const rainbowList = [
  'rgba(255, 0, 0, 1',
  'rgba(255, 154, 0, 1)',
  'rgba(208, 222, 33, 1)',
  'rgba(79, 220, 74, 1)',
  'rgba(63, 218, 216, 1)',
  'rgba(28, 127, 238, 1)',
  'rgba(95, 21, 242, 1)',
  'rgba(186, 12, 248, 1)',
  'rgba(251, 7, 217, 1)',
];

function chooseRainbow() {
  let randomRainbow = Math.trunc(Math.random() * rainbowList.length);
  return rainbowList[randomRainbow];
}

drawingWindow.addEventListener('mousedown', (e) => {
  if (isMouseDown) {
    if (isRainbowOn) {
      e.target.style.backgroundColor = chooseRainbow();
    } else {
      e.target.style.backgroundColor = `${currentColor}`;
    }
  }
  isMouseDown = true;
});
drawingWindow.addEventListener('mouseup', (e) => {
  if (isMouseDown) {
    if (isRainbowOn) {
      e.target.style.backgroundColor = chooseRainbow();
    } else {
      e.target.style.backgroundColor = `${currentColor}`;
    }
  }
  isMouseDown = false;
});

drawingWindow.addEventListener('click', (e) => {
  if (isMouseDown) {
    if (isRainbowOn) {
      e.target.style.backgroundColor = chooseRainbow();
    } else {
      e.target.style.backgroundColor = `${currentColor}`;
    }
  }
});

drawingWindow.addEventListener('mouseover', function (e) {
  if (isMouseDown) {
    if (isRainbowOn) {
      e.target.style.backgroundColor = chooseRainbow();
    } else {
      e.target.style.backgroundColor = `${currentColor}`;
    }
  }
});
