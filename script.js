const drawingWindow = document.querySelector('.drawing--window');
const manipulationWindow = document.querySelector('.manipulation--window');
const colors = document.querySelector('.colors');
const colorNamer = document.querySelector('.color-name');

let sizeChoice = 16;
let currentColor = 'black';

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
  console.log(e.target);
  e.target.style.backgroundColor = `${currentColor}`;
});

window.addEventListener('resize', function () {
  resizeSquares(sizeChoice);
});

colors.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('color')) {
    colorNamer.classList = [];
    colorNamer.innerText = e.target.classList[1];
    colorNamer.style.color = 'white';
    colorNamer.style.textShadow = `1px 1px 2px black`;
    colorNamer.classList.add(e.target.classList[1]);
  }
});

colors.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('color')) {
    colorNamer.classList = [];
    colorNamer.classList.add('color-name');
    colorNamer.innerText = ' ';
  }
});
