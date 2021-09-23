function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict";
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b/(2*a)]
  } else {
    arr = [((-b + Math.sqrt(d) )/(2 * a)), ((-b - Math.sqrt(d) )/(2 * a))]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  "use strict";
  if (isNaN(Number(percent))) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    return totalAmount;
    }
    if (isNaN(Number(contribution))) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }
    if (isNaN(Number(amount))) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }
    

let credit = amount - contribution;
let creditDate = new Date(date);
let todayDate = new Date();
let creditMonths = creditDate.getMonth() - todayDate.getMonth() + ((creditDate.getFullYear() - todayDate.getFullYear()) * 12);
let interestRate = (percent / 12) / 100;
let monthlyPay = credit * (interestRate + interestRate / (Math.pow((1 + interestRate), creditMonths) - 1));
let totalAmountPay = monthlyPay * creditMonths;
totalAmount = +totalAmountPay.toFixed(2)

  return totalAmount;
}
