// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

/*As an user, I should be able to type a task into the input field.
As an user, I should be able to click some form of a submit button.
As an user, the task string that I provided should appear on the DOM after the submit button has been activated.*/

/* 
On Click of Create New Task
1. Identify id of the button and assign variable to button
2. Add event listener to button
3. Create callback action
4. Identify id of list 
5. Add <li> node and append as child to <ul>
6. identify task description input field save to const
7. Add value of task description into innerHTML to li node
*/

//1
function newElement() {
let li = document.createElement("li");
let inputValue = document.getElementById("new-task-description").value;
let t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
  alert("You must write something!");
} else {
  document.getElementById("tasks").appendChild(li);
  document.getElementById("new-task-description").value = ''
}

let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}