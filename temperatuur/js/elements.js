/*function to change the slider*/
function changeSlider() {
  if (document.getElementById('slidercheck_verwarming').checked) {
    document.getElementById('slider-text_verwarming').innerHTML = 'Uit';
    document.getElementById('slider-text-second_verwarming').innerHTML = 'Aan';
    document.getElementById('slider-text-second_verwarming').style.marginLeft = '64px';
    document.getElementById('slider-text-second_verwarming').style.justifyContent = "flex-start";
  }

  else {
    document.getElementById('slider-text_verwarming').innerHTML = 'Aan';
    document.getElementById('slider-text-second_verwarming').innerHTML = 'Uit';
    document.getElementById('slider-text-second_verwarming').style.marginRight = '64px';
    document.getElementById('slider-text-second_verwarming').style.justifyContent = "flex-end";
  }
}

/*function that checks the status of the slider*/
function checkSlider(){
  document.getElementById('slidercheck_verwarming').onchange = function(){
    changeSlider();
  }
}
checkSlider();

/*----------------------------------*/

/*function to change the slider*/
function changeSlider2() {
  if (document.getElementById('slidercheck_aircon').checked) {
    document.getElementById('slider-text_aircon').innerHTML = 'Uit';
    document.getElementById('slider-text-second_aircon').innerHTML = 'Aan';
    document.getElementById('slider-text-second_aircon').style.marginLeft = '64px';
    document.getElementById('slider-text-second_aircon').style.justifyContent = "flex-start";
  }

  else {
    document.getElementById('slider-text_aircon').innerHTML = 'Aan';
    document.getElementById('slider-text-second_aircon').innerHTML = 'Uit';
    document.getElementById('slider-text-second_aircon').style.marginRight = '64px';
    document.getElementById('slider-text-second_aircon').style.justifyContent = "flex-end";
  }
}

/*function that checks the status of the slider*/
function checkSlider2(){
  document.getElementById('slidercheck_aircon').onchange = function(){
    changeSlider2();
  }
}
checkSlider2();


/*----------------------------------------------------------------------------------------*/

function changeTempVoorin(){
  document.getElementById('top_arrow_voorin').onclick = function(){
    var currentTempVoorin = parseInt(document.getElementById('temp_voorin').innerHTML);
    document.getElementById('temp_voorin').innerHTML = currentTempVoorin + 1;
  }

  document.getElementById('bottom_arrow_voorin').onclick = function(){
    var currentTempVoorin = parseInt(document.getElementById('temp_voorin').innerHTML);
    document.getElementById('temp_voorin').innerHTML = currentTempVoorin - 1;
  }
}
changeTempVoorin();


function changeTempAchterin(){
  document.getElementById('top_arrow_achterin').onclick = function(){
    var currentTempAchterin = parseInt(document.getElementById('temp_achterin').innerHTML);
    document.getElementById('temp_achterin').innerHTML = currentTempAchterin + 1;
  }

  document.getElementById('bottom_arrow_achterin').onclick = function(){
    var currentTempAchterin = parseInt(document.getElementById('temp_achterin').innerHTML);
    document.getElementById('temp_achterin').innerHTML = currentTempAchterin - 1;
  }
}
changeTempAchterin();

/*----------------------------------------------------------------------------------------*/

function getSliderValue(){
  var sliderValue = document.getElementById('range_slider').value;
  document.getElementById('slider_value').innerHTML = sliderValue;
}

document.getElementById("range_slider").oninput = function() {
    getSliderValue()
};
