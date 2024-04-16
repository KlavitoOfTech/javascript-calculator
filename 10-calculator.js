let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

  // Display the calculation when the page first loads.
showCalculation();

function updateCalculation(value) {
  calculation += value;
  showCalculation();

  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', JSON.stringify(calculation));
}

function showCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}