function convertToCelsius() {
  let fahrenheit = document.getElementById("fahrenheit").value;

  if (fahrenheit === "") {
    document.getElementById("result").innerHTML = "Please enter a value.";
    return;
  }

  let celsius = (fahrenheit - 32) * 5 / 9;

  document.getElementById("result").innerHTML = 
    fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
}
