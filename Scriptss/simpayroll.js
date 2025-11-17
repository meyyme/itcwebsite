let payrollList = [];

function addEmployee() {
  let name = document.getElementById("name").value.trim();
  let days = parseFloat(document.getElementById("days").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let deduction = parseFloat(document.getElementById("deduction").value);

  if (!name || isNaN(days) || isNaN(rate) || isNaN(deduction) || days < 0 || rate < 0 || deduction < 0) {
    alert("Please enter valid employee information.");
    return;
  }

  let gross = days * rate;
  let net = gross - deduction;

  payrollList.push({ name, days, rate, deduction, gross, net });
  updateTable();


  document.getElementById("name").value = "";
  document.getElementById("days").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("deduction").value = "";
}

function deleteEmployee() {
  let line = prompt("Enter the line number of the employee to delete:");

  let index = parseInt(line) - 1;
  if (isNaN(index) || index < 0 || index >= payrollList.length) {
    alert("Invalid line number.");
    return;
  }

  payrollList.splice(index, 1);
  updateTable();
}

function updateTable() {
  let tbody = document.getElementById("payrollTable").getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  payrollList.forEach((emp, i) => {
    let row = tbody.insertRow();
    row.insertCell(0).innerText = i + 1;
    row.insertCell(1).innerText = emp.name;
    row.insertCell(2).innerText = emp.days;
    row.insertCell(3).innerText = emp.rate.toFixed(2);
    row.insertCell(4).innerText = emp.gross.toFixed(2);
    row.insertCell(5).innerText = emp.deduction.toFixed(2);
    row.insertCell(6).innerText = emp.net.toFixed(2);
  });
}
