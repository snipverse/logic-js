// basic version
// function alarmClock(hour, minute){

//   const alert = setInterval(() =>{
//     const currentHour = new Date().getHours();
//     const currentMinute = new Date().getMinutes();
//     if (currentHour === hour && minute === currentMinute){
//       console.log("It's alarm time.");
//       clearInterval(alert);
//     }
//   },1000)
// }
// alarmClock(10,6);

//professional approach
// const prompt = require ("prompt-sync")();

// let hour = null;
// while (hour === null){
//   hour = prompt("What hour should the alarm go off?: ");
//   hour = parseInt(hour);
//   if (!Number.isInteger(hour) || hour <0 || hour >23){
//     console.log("Please enter a valid value for hour. Hour should be a positive integer between 0 and 23.")
//     hour = null;
//   }
// }

// let minute = null;
// while (minute === null) {
//   minute = prompt("What minute should the alarm go off?: ");
//   minute = parseInt(minute);
//   if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
//     console.log(
//       "Please enter a valid value for minute. Minute should be a positive integer between 0 and 59.",
//     );
//     minute = null;
//   }
// }

// let second = null;
// while (second === null) {
//   second = prompt("What second should the alarm go off?: ");
//   second = parseInt(second);
//   if (!Number.isInteger(second) || second < 0 || second > 59) {
//     console.log(
//       "Please enter a valid value for second. second should be a positive integer between 0 and 59.",
//     );
//     second = null;
//   }
// }



// const hour = prompt("What hour should the alarm go off?: ");
// const minute = prompt("What minute should the alarm go off: ");
// const second = prompt("What second should the alarm go off: ");

//optimised approach
const prompt = require("prompt-sync")();

function acceptInputFromUser(promptMessage, maxValue, invalidValueMessage){
  let result = null;
  while (result === null){
    result = prompt(promptMessage);
    result = parseInt(result);
    if (!Number.isInteger(result) || result < 0 || result > maxValue) {
      console.log(invalidValueMessage);
      result = null;
    }
  }
  return result;
}

function alarmClock(hour, minute, second) {
  const now = new Date();
  const alarmDate = new Date();
  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);
  alarmDate.setSeconds(second);
  alarmDate.setMilliseconds(0);
  
  //If time already passed today → schedule for tomorrow
  if (alarmDate <= now) {
    alarmDate.setDate(alarmDate.getDate() + 1);
  }
  
  const diff = alarmDate - now;
  
  // if (diff < 0) {
    //   console.log("please provide future time");
    //   return;
    // }
    
  setTimeout(() => {
    console.log("Wake Up Time, My boyyy!");
  }, diff);
}
 
let hour = acceptInputFromUser(
  "What hour should the alarm go off?: ",
  23,
  "Please enter a valid value for hour. Hour should be a positive integer between 0 and 23.",
);

let minute = acceptInputFromUser(
  "What minute should the alarm go off: ",
  59,
  "Please enter a valid value for minute. Minute should be a positive integer between 0 and 59.",
); 

let second = acceptInputFromUser(
  "What second should the alarm go off: ",
  59,
  "Please enter a valid value for second. second should be a positive integer between 0 and 59.",
);

alarmClock(hour, minute, second);