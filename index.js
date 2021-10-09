window.onload = () => {
  console.log("win loaded");
  function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("sw.js")
        .then((reg) => {
          console.log("Registration successful", reg);
        })
        .catch((e) => console.error("Error during service worker registration:", e));
    } else {
      console.warn("Service Worker is not supported");
    }
  }

  registerServiceWorker();
};
"use strict";
const inpInterestRate = document.getElementById("interestRate");
const inpNumOfYears = document.getElementById("numOfYears");
const inpLoanAmount = document.getElementById("loanAmount");
const btnCalculate = document.getElementById("btnCalculate");
const divMonthlyPayment = document.getElementById("monthlyPayment");
const divTotalInterest = document.getElementById("totalInterest");
const divTotalHouseCost = document.getElementById("totalHouseCost");
const divBreakdown = document.getElementById("breakdown");
const divMonthlyTaxes = document.getElementById("monthlyTaxes");
const divMonthlyTotal = document.getElementById("monthlyTotal");
btnCalculate.addEventListener("click", calculate);
function calculate() {
    let interestRate = parseFloat(inpInterestRate.value);
    let monthlyInterestRate = interestRate / 100 / 12;
    let yearsOfLoan = parseInt(inpNumOfYears.value);
    let totalPayments = yearsOfLoan * 12;
    let loanAmount = parseInt(inpLoanAmount.value);
    let monthlyPayment = pmt(interestRate, yearsOfLoan, loanAmount);
    console.log('loan amount>> ', loanAmount);
    console.log('monthly payment >> ', monthlyPayment);
    console.log('interest rate >> ', interestRate);
    let totalInterest = calculateTotalInterest(loanAmount, yearsOfLoan, monthlyPayment);
    let total = calculateTotalCost(totalInterest, loanAmount);
    let monthlyTaxes = loanAmount * .03 / 12;
    let monthlyTotal = monthlyTaxes + monthlyPayment;
    divMonthlyPayment.innerText = `$${monthlyPayment.toFixed(2)}`;
    divTotalInterest.innerText = `$${totalInterest.toFixed(2)}`;
    divTotalHouseCost.innerText = `$${total.toFixed(2)}`;
    divMonthlyTaxes.innerText = `${monthlyTaxes.toFixed(2)}`;
    divMonthlyTotal.innerText = `$${monthlyTotal.toFixed(2)}`;
    monthlyInterestBreakdown(1, monthlyPayment, monthlyInterestRate, 0, 0, loanAmount);
}
function monthlyInterestBreakdown(month, monthlyPayment, monthlyInterestRate, totalInterestPaid, totalPrincipalPaid, remainingPrincipal) {
    const interestPayment = remainingPrincipal * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    const newTotalInterestPaid = totalInterestPaid + interestPayment;
    const newTotalPrincipalPaid = totalPrincipalPaid + principalPayment;
    const newRemainingPrincipal = remainingPrincipal - principalPayment;
    const tr = newTableRow(month, monthlyPayment, interestPayment, newTotalInterestPaid, principalPayment, newTotalPrincipalPaid, newRemainingPrincipal);
    if (newRemainingPrincipal > 0) {
        monthlyInterestBreakdown(month + 1, monthlyPayment, monthlyInterestRate, newTotalInterestPaid, newTotalPrincipalPaid, newRemainingPrincipal);
    }
}
function newTableRow(month, monthlyPayment, interestPayment, totalInterestPaid, principalPayment, totalPrincipalPaid, remainingPrincipal) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${month}</td>
          <td>${monthlyPayment.toFixed(2)}</td>
          <td>${interestPayment.toFixed(2)}</td>
          <td>${totalInterestPaid.toFixed(2)}</td>
          <td>${principalPayment.toFixed(2)}</td>
          
          <td>${totalPrincipalPaid.toFixed(2)}</td>
          <td>${remainingPrincipal.toFixed(2)}</td>
          `;
    divBreakdown.append(tr);
    return tr;
}
function pmt(interestRate, numOfYears, loanAmount) {
    return ((interestRate / 100 / 12) * loanAmount) / (1 - (1 + (interestRate / 100 / 12)) ** (-numOfYears * 12));
}
function calculateTotalInterest(loanAmount, numOfYears, monthlyPayment) {
    return (loanAmount - numOfYears * 12 * monthlyPayment) * -1;
}
function calculateTotalCost(totalInterest, totalLoanAmount) {
    return totalInterest + totalLoanAmount;
}
