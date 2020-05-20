window.addEventListener('load', start)

var redValue = 0;
var greenValue = 0;
var blueValue = 0;
const redRange = document.querySelector('#redRange');
const greenRange = document.querySelector('#greenRange');
const blueRange = document.querySelector('#blueRange');
const inputTextRed = document.querySelector('#inputTextRed');
const inputTextGreen = document.querySelector('#inputTextGreen');
const inputTextBlue = document.querySelector('#inputTextBlue');

/**
   * function that monitors changes in ranges
 */
function start() {
    redRange.addEventListener('change', modifiyColors);
    greenRange.addEventListener('change', modifiyColors)
    blueRange.addEventListener('change', modifiyColors);

}
/**
 *  function to form the rgb 
 * @param {string} redValue 
 * @param {string} greenValue 
 * @param {string} blueValue 
 * return "rgb(value)";
 */
function composeRGB(redValue, greenValue, blueValue) {
    var rgb = 'Rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    return rgb
};

/**
 * Function with changing colors
 */
function modifiyColors() {
    redValue = redRange.value;
    inputTextRed.value = redValue;
    greenValue = greenRange.value;
    inputTextGreen.value = greenValue;
    blueValue = blueRange.value;
    inputTextBlue.value = blueValue;
    finalColor = composeRGB(redValue, greenValue, blueValue);
    var square = document.getElementById('squareColor');
    square.style.backgroundColor = finalColor;
}



