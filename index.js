const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const DELAY = 1000;
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

startButton.addEventListener('click', onStartButtonClick);

function onStartButtonClick(e) {
    console.log('CLICK!!!');
    
    timerId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        console.log('color change')
    }, DELAY);
  e.target.disabled = 'true';
  stopButton.addEventListener('click', onStopButtonClick);
}

function onStopButtonClick(e) {
  console.log('stop click');

  clearInterval(timerId);
  startButton.removeAttribute('disabled');
  // startButton.addEventListener('click', onStartButtonClick);
  stopButton.removeEventListener('click', onStopButtonClick);
}