let choice = prompt("Which loan calculator would you like to use? (car or home)")
let value = Number(prompt(`What is the book value of the ${choice}? Enter the raw number.`))
let intrest = Number(prompt("What is the rate of intrest on the loan? (enter in decimal form)"))
let term = Number(prompt("What is the term on the loan? (can only be 15 or 30 years)"))

intrest = intrest + 1

if (choice == "car") {
function carLoanPayment(value, intrest, term) {
const carPay = (value * intrest) / term
return carPay
  }
alert("The monthly payment on your car will be " + (carLoanPayment(value, intrest, term) + "."))
} 
