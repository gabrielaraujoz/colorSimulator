window.addEventListener('load', start);

function start() {
  console.log('Hello');
  colorChange();
}

function colorChange() {
  let input = document.querySelectorAll('input');

  for (let i = 0; i < input.length; i++) {
    let red = document.getElementById('redSlider').value;
    let green = document.getElementById('greenSlider').value;
    let blue = document.getElementById('blueSlider').value;

    let display = document.getElementById('colorChange');
    display.style.background = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }
}
