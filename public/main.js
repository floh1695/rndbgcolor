function randomInteger(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

function applyColors(r, g, b) {
  document.querySelector('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function backgroundColorChangerFF(f) {
  function ff() {
    red = f(red);
    green = f(green);
    blue = f(blue);
    
    applyColors(red, green, blue);
  }
  return ff;
}

function randomColor() {
  return randomInteger(0, 255);
}

function softColorDelta(color) {
  const softDelta = 10;
  color += randomInteger(-softDelta, softDelta);
  if (color > 255) {
    return 255;
  }
  else if (color < 0) {
    return 0;
  }
  return color;
}

const startingColor = 127;
let red = startingColor;
let green = startingColor;
let blue = startingColor;
let timer = null;
applyColors(red, green, blue);

const main = () => {
  document.querySelector('#changeBackgroundColorButton').addEventListener('click', (event) => {
    backgroundColorChangerFF(randomColor)();
  });
  document.querySelector('#changeBackgroundColorSoftButton').addEventListener('click', (event) => {
    backgroundColorChangerFF(softColorDelta)();
  });
  document.querySelector('#pauseButton').addEventListener('click', (event) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    else {
      timer = setInterval(backgroundColorChangerFF(softColorDelta), 100);
    }
  });
}

document.addEventListener('DOMContentLoaded', main);
