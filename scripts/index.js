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
  
  //*********************// 
  // OPTIONS             //
  //*********************// 
  let optionsCost = 0;
  const electronicCheckbox = document.getElementById("electronic");
  if (electronicCheckbox.checked == true) {
    optionsCost += (3.95 * numOfDays);
  }

  const gpsCheckbox = document.getElementById("gps");
  if (gpsCheckbox.checked == true) {
    optionsCost += (2.95 * numOfDays);
  }

  const roadsideCheckbox = document.getElementById("roadside");
  if (roadsideCheckbox.checked == true) {
    optionsCost += (2.95* numOfDays);
  }
  
  //*********************// 
  // PRICE CALCULATIONS  //
  //*********************// 
  let basePrice = 29.99 * numOfDays;
  let surcharge;
  const yesUnderRadioBtn = document.getElementById("yesUnder");
  if (yesUnderRadioBtn.checked == true) {
    surcharge = basePrice * 0.30;
  }
  else {
    surcharge = 0;
  }
  let totalDue = (basePrice + optionsCost) + surcharge;

  const basePricePara = document.getElementById("basePrice");
  basePricePara.innerHTML = "Car Rental: $" + basePrice.toFixed(2);

  const optionsPara = document.getElementById("optionsCost");
  optionsPara.innerHTML = "Options: $" + optionsCost.toFixed(2);

  const surchargePara = document.getElementById("surcharge");
  surchargePara.innerHTML = "Under 25 surcharge: $" + surcharge.toFixed(2);

  const totalDuePara = document.getElementById("totalDue");
  totalDuePara.innerHTML = "Total due: $" + totalDue.toFixed(2);
}