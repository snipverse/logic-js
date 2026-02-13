function isLeapYear(year){
  if (typeof year !== "number"){
    throw new Error("Input value should be a number")
  }
  if (year < 0) {
    throw new Error("Year can't be negative");
  }
  if ((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0) {
    //A year must be divisible by 4 but not by 100, unless it is divisible by 400.
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2024);
isLeapYear(2023);
isLeapYear(2000);
isLeapYear(1900);
isLeapYear(-1900);
isLeapYear("sachin");

