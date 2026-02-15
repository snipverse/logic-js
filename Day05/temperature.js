function celsiusToFahrenheit(celcius) {
  let fahrenheit = (celcius * 9/5) + 32;
  // return `${fehrenheit}°F`;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(50));

function FahrenheitToCelsius(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5/9);
  // return `${celcius}°C`;
  return celcius;
}
console.log(FahrenheitToCelsius(122));
