// const prompt = require("prompt-sync")();

// let taskList = [];

// while (true){

//   console.log(`\nHi, choose your fav option:
//     1. Add an Item
//     2. See the list
//     3. Delete an Item
//     4. Exit
//   `);

//   let userInput = Number(prompt("Enter your choice: "));

//   if(userInput === 4) {
//     console.log("Exiting game...");
//     break;
//   }

//   switch (userInput) {
//     case 1:
//       let addItem = prompt("Add you TO-Do's: ");
//       taskList.push(addItem);
//       console.log(taskList)
//       break;
//     case 2:
//       console.log(taskList);
//       break;
//     case 3:
//       let deleteItems = Number(prompt("Enter the delete item no: "));
//       let deletedtask = taskList.splice(deleteItems - 1, 1);
//       console.log("Your deleted task: ", deletedtask);
//       console.log("Remaining tasks: ", taskList)
//       break;
//     default:
//       console.log("Invalid Input. Try again.");
//       continue;
//   }
// }

//better approach
const prompt = require("prompt-sync")();

let taskList = [];

function printMenu() {
  console.log(`\nHi, choose your fav option:
    1. Add an Item
    2. See the list
    3. Delete an Item
    4. Exit
  `);
}

function printTasks() {
  if (taskList.length === 0) {
    console.log("Your list is empty.");
    return false;
  }

  console.log("\nYour To-Do List:");
  taskList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });

  return true;
}

function addTask() {
  const addItem = prompt("Add your TO-Do: ");
  if (addItem.trim() === "") {
    console.log("Task cannot be empty.");
    return;
  }

  taskList.push(addItem);
  console.log("Task added successfully.");
}

function deleteTask() {
  if (!printTasks()) return;

  let deleteNumber = Number(prompt("Enter the task number to delete: "));

  if (
    !Number.isInteger(deleteNumber) ||
    deleteNumber < 1 ||
    deleteNumber > taskList.length
  ) {
    console.log("Invalid task number.");
    return;
  }

  const deletedTask = taskList.splice(deleteNumber - 1, 1);
  console.log(`Deleted: ${deletedTask[0]}`);
}

while (true) {
  printMenu();

  let userInput = Number(prompt("Enter your choice: "));

  switch (userInput) {
    case 1:
      addTask();
      break;
    case 2:
      printTasks();
      break;
    case 3:
      deleteTask();
      break;
    case 4:
      console.log("Exiting program...");
      process.exit();
    default:
      console.log("Invalid Input. Try again.");
  }
}