const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5/9);
  tempCelsius = Math.round(tempCelsius * 10) / 10;

  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
