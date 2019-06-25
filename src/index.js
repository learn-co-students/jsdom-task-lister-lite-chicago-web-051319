document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let task = document.getElementById("new-task-description");
  let taskForm = document.getElementById("create-task-form");
  let tasksList = document.getElementById("tasks");
  let priority = document.getElementById("priority");
  let ascSort = document.getElementById("sort-ASC");
  let desSort = document.getElementById("sort-DESC");

  // ascSort.addEventListener("click", function(){
  //   let list = document.querySelectorAll("ul#tasks div li")
  //   arr = [list[0]]
  //
  //   for (var i = 0; i < list.length; i++) {
  //     if(list[i].style.color == "red"){
  //       arr.unshift(list[i])
  //     }else if (list[i].style.color == "yellow") {
  //       arr.splice((list.length/2),0,list[i])
  //     }else if (list[i].style.color == "green") {
  //       arr.push(list[i])
  //     }
  //   }
  //
  // });

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let div = document.createElement("div");
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");

    deleteButton.textContent = "X";
    editButton.textContent = "Edit";
    listItem.textContent = task.value;

    if (priority.value == "red") {
      listItem.style.color = "red"
    }else if (priority.value == "yellow") {
      listItem.style.color = "yellow"
    }else if(priority.value == "green"){
      listItem.style.color = "green"
    }

    div.appendChild(listItem);
    div.appendChild(deleteButton);
    div.appendChild(editButton);

    deleteButton.addEventListener("click",function(){
      div.remove();
    });

    editButton.addEventListener("click",function(){
      if (listItem.isContentEditable) {
        listItem.contentEditable = false;
        editButton.textContent = "Edit";
      }else{
        listItem.contentEditable = true
        editButton.textContent = "Save";
      }
    });

    tasksList.appendChild(div);
  });

});

// let asc-sort = document.getElementById("sort-ASC");
// let des-sort = document.getElementById("sort-DESC");
//
// asc-sort.addEventListener("click", function(e) {
//   e.preventDefault();
// });
// des-sort.addEventListener("click", function(e) {
//   e.preventDefault();
// });
