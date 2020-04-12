//SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);

//Function

function addTodo(event) {
	// prevent from form submitting
	event.preventDefault();
	//Todo DIV
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//Create LI

	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	// CHECK MARK BUTTON
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn")
	todoDiv.appendChild(completedButton);

	// TRASH BUTTON
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn")
	todoDiv.appendChild(trashButton);

	// APPEND TO A LIST
	todoList.appendChild(todoDiv);

	//CLEAR INPUT VALUE
	todoInput.value = "";

}

//DELETE TODO

function deleteCheck(e) {
	const item = e.target;

	console.log(item.classList);
	//delete todo
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;

		//Delete Animation
		todo.classList.add("fall");
		todo.addEventListener('transitioned', function () {
			todo.remove()
		});
	} else if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}
