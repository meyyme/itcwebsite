function convertToFeet() {
  let meters = document.getElementById("meters").value;
  if (meters === "") {
    document.getElementById("result").innerHTML = "Please enter a value.";
    return;
  } 
  let feet = meters * 3.28084;
  document.getElementById("result").innerHTML = meters + "m = " + feet.toFixed(2) + "ft";
}
