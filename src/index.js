document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById("new-task-description");
  const form = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  form.addEventListener("submit", function(e){
  e.preventDefault();

  let listItem = document.createElement("li");
  listItem.innerText = newTaskDescription.value;
  tasksList.appendChild(listItem)


});

});





// we want to take things from the input form,
// and when the user hits "submit"
// we want their input to be appended to the to-do list
// <ul id="tasks">






// const taskList = new TaskList();
//
// const newTaskForm = document.getElementById("create-task-form");
// const newTaskDescription = document.getElementById("new-task-description");
// const taskList = document.getElementById("list");
// const tasks = document.getElementById("tasks");

// function newTask () {
// let li = document.createElement("li");
// let inputValue = document.getElementById("new-task-description").value;
// let t = document.createTextNode(inputValue);
// li.appendChild(t);
// document.getElementById("tasks").appendChild(li);
//
// document.getElementById("new-task-description").value = "";
// var span = document.createElement("SPAN");
// var txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// li.appendChild(span);
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
// }
