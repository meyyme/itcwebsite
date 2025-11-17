function convertToMeters() {
      let feet = document.getElementById("feet").value;
      if (feet == "") {
        document.getElementById("result").innerHTML = "Please enter a value.";
        return;
      } 
      let meters = (feet * 0.3048);
      document.getElementById("result").innerHTML = 
       feet + "ft = " + meters.toFixed(2) + "m";
    }