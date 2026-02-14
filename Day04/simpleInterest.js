function simpleInterest(priAmount, year, rate){
  if (typeof priAmount !== "number" || typeof year !== "number" ||  typeof rate !== "number"){
    throw new Error("Principle amount, interest rates and year all should be a number.")
  }
  let interest = (priAmount * rate * year) / 100;
  interest = interest.toFixed(2);
  return interest;
}
console.log(simpleInterest(1000, 5, 1));
console.log(simpleInterest(20000, 10, 5));
console.log(simpleInterest(20000.88, 8.755, 5));

// console.log(simpleInterest(20000, 8.55, "sachin"));

