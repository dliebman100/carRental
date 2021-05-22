"use strict"

window.onload = function() {
  //connect calculate Pay (hourly) button to event handler
  const totalCostBtn = document.getElementById("totalCostBtn");
  totalCostBtn.onclick = totalCostBtnClicked;
}

function totalCostBtnClicked() {
  const pickupDateField = document.getElementById("pickupDate");
  let pickupDate = Number(pickupDateField.value);

  const numOfDaysField = document.getElementById("numOfDays");
  let numOfDays = Number(numOfDaysField.value);
  
  //paragraphs, divs, spans use innerHTML
  let optionsCost = 0;
  const electronicCheckbox = document.getElementById("electronic");
  if (electronicCheckbox.checked == true) {
    optionsCost += 3.95;
  }

  const gpsCheckbox = document.getElementById("gps");
  if (gpsCheckbox.checked == true) {
    optionsCost += 2.95;
  }

  const roadsideCheckbox = document.getElementById("roadside");
  if (roadsideCheckbox.checked == true) {
    optionsCost += 2.95;
  }
  
  //*********************// 
  // PRICE CALCULATIONS  //
  //*********************// 
  let basePrice = 29.99 * numOfDays;
  let surcharge;
  const yesUnderRadioBtn = document.getElementById("yesUnder");
  if (yesUnderRadioBtn.checked == true) {
    surcharge = 0.25;
  }
  else {
    surcharge = 0;
  }
  let totalDue = (basePrice + optionsCost) + (basePrice * surcharge);
 
  const carRentalPara = document.getElementById("carRental");
  carRentalPara.innerHTML = "Car Rental: $" + carRental.toFixed(2);

  const optionsPara = document.getElementById("options");
  optionsPara.innerHTML = "Options: $" + options.toFixed(2);

  const underChargePara = document.getElementById("underCharge");
  underChargePara.innerHTML = "Under 25 surcharge: $" + underCharge.toFixed(2);

  const totalDuePara = document.getElementById("totalDue");
  totalDuePara.innerHTML = "Total due: $" + totalDue.toFixed(2);

}