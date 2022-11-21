const drawingWindow = document.querySelector('.drawing--window');
const manipulationWindow = document.querySelector('.manipulation--window');

function placeSquares(diseredSize) {
  sqrsPixels = drawingWindow.getBoundingClientRect().width / diseredSize;
  for (let i = 0; i < diseredSize ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add(`square${i}`);
    square.style.width = `${sqrsPixels}px`;
    square.style.height = `${sqrsPixels}px`;
    square.style.backgroundColor = 'white';
    drawingWindow.appendChild(square);
  }
}

placeSquares(16);

drawingWindow.addEventListener('mouseover', function (e) {
  e.target.style.backgroundColor = 'black';
});
