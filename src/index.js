const myForm = document.getElementById('create-task-form');
const myUl = document.getElementById('tasks')

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  myForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    createNewListItem(document.getElementById('new-task-description').value)
  })
});

function createNewListItem(text){
  temp = document.createElement('li');
  temp.innerHTML = text;
  myUl.appendChild(temp);
}
