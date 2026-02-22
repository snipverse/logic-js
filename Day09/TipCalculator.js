// // function tipCalculator(amount, percentage){
// //   let billAmount = amount;
// //   let tipAmount = (percentage / 100) * billAmount;
// //   console.log(tipAmount);
// // }
// // console.log(tipCalculator(1000,5))
// function tipCalculator(amount, percentages){
//   let billAmount = amount;
//   let tipPercentages = percentages;
//   let tipAmounts = [];
//   for (let i = 0; i < tipPercentages.length; i++) {
//     tipAmounts = (percentages / 100) * billAmount;
//   }
//   return tipAmounts;
// }
// console.log(tipCalculator(1000,[5,10,15]))

function tipCalculator(billAmount, tipPercentage, locale, currency){ 
  let result = [];

  const formatter =  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  });

  for(let i=0; i < tipPercentage.length; i++){
    let calculatedAmount = (tipPercentage[i] * billAmount) / 100;
    // result.push(calculatedAmount);
    result.push(formatter.format(calculatedAmount));  
  }
  return result;
}
console.log(tipCalculator(1000, [5, 10, 15], "en-IN", "INR"));
console.log(tipCalculator(997, [5, 10, 15], "en-US", "USD"));