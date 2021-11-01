//Businbess logic

function item(name, isDone) {
  this.name = name;
  this.isDone = isDone;
}
let list = [];
let entry = new item("new things");
list.push(entry);


//UI logic
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const input = $("input#todo").val();
    let list = new item(input, 0);
    $("#list").append("<li>" + input + "</li>");
  });
});

if ( click === true) {
  $("#list").pop(click);
}





// Business logic for task """"database""" ( from Matt Cas)

// function ToDoList() {
//   this.tasks = {};
//   this.currentId = 0;
// }

// ToDoList.prototype.assignId = function() {
//   this.currentId +=1;
//   return this.currentId;
// };

// ToDoList.prototype.addTask = function(task) {
//   task.id = this.assignId();
//   this.tasks[task.id] = task;
// };

// ToDoList.prototype.deleteTask = function(id) {
//   if (this.tasks[id] === undefined) {
//     return false;
//   }
//   delete this.tasks[id];
//   return true;
// };

// ToDoList.prototype.completeTask = function(id) {
//   if (this.tasks[id] === undefined) {
//     return false;
//   }
//   this.tasks[id].complete = true;
// };

// ToDoList.prototype.uncompleteTask = function(id) {
//   if (this.tasks[id] === undefined) {
//     return false;
//   }
//   this.tasks[id].complete = false;
// };

// // Business logic for tasks
// function Task(description) {
//   this.task = description;
//   this.complete = false;
// }