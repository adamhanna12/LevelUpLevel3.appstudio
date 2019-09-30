let response = prompt("Would you like to use one of our complimentary loan calculators? (yes/no)")
for (i = 0; response == "yes"; i++) {
let choice = prompt("Which calculator would you like to use? (car/home)") 
let value = Number(prompt("What is the book value of the " + (choice) + "? (enter the raw number)"))
let interest = Number(prompt("What is the rate of interest on the loan? (enter in decimal form)"))
let term = Number(prompt("What is the term on the loan? (15 or 30)"))

interest = interest + 1

if (choice == "car") {
function carLoanPayment(value, interest, term) {
const carPay = (value * interest) / term
return carPay
  }
alert("The monthly payment on your car will be " + (carLoanPayment(value, interest, term) + "."))

