window.addEventListener('load', start);

function start() {
  console.log('Hello');

  activateInput();
}

/*function updateTextInput(val) {
  document.getElementById('valuered').value = val;
}
*/

let red = 0;
let green = 0;
let blue = 0;
let newRed = null;
let newBlue = null;
let newGreen = null;
let redInput = document.querySelector('#redSlider');
let greenInput = document.querySelector('#greenSlider');
let blueInput = document.querySelector('#blueSlider');

function activateInput() {
  redInput.addEventListener('input', changeRed);
  greenInput.addEventListener('input', changeGreen);
  blueInput.addEventListener('input', changeBlue);

  function render() {
    console.log(red);
    console.log(green);
    console.log(blue);
    let display = document.getElementById('colorChange');
    display.style.background = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }

  function changeRed(event) {
    redValue(event.target.value);

    function redValue(newRedValue) {
      red = newRedValue;
      //document.getElementById('#valuered').value = 'red';
      let newRed = document.querySelector('#valueRed');
      newRed.value = red;
    }
    render();
  }

  function changeGreen(event) {
    greenValue(event.target.value);

    function greenValue(newGreenValue) {
      green = newGreenValue;
      let newGreen = document.querySelector('#valueGreen');
      newGreen.value = green;
    }
    render();
  }

  function changeBlue(event) {
    blueValue(event.target.value);

    function blueValue(newBlueValue) {
      blue = newBlueValue;
      let newBlue = document.querySelector('#valueBlue');
      newBlue.value = blue;
    }
    render();
  }
}
