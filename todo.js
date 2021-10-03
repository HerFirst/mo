const todoForm = document.getElementById('todo-form')
const todoInput = todoForm.querySelector('input')
const todoList = document.getElementById('todo-list')

function saveTodos() {
	localStorage.setItem('todos',JSON.stringify(todos))
}

function paintTodo(newTodo) {
	const li = document.createElement('li')
	const button = document.createElement('button')
	li.innerText = newTodo.text
	li.id = newTodo.id
	button.innerText = 'X'
	button.onclick=onClick
	todoList.appendChild(li)
	li.appendChild(button)
}

function onClick(e) {
	const li = e.path[1];
	li.remove()
	const id = li.id

	todos = todos.filter(item => item.id !== parseInt(id));

	saveTodos()
}

function onSubmit(e) {
	e.preventDefault()
	const newTodo = todoInput.value
	const id = Date.now()

	todos.push({ id: id, text: newTodo })
	paintTodo(todos[todos.length-1])

	saveTodos()
	todoInput.value = ''
}

let todos = JSON.parse(localStorage.getItem('todos'))
if (todos) {
	todos.forEach(paintTodo)
}
else {
	todos=[]
}

todoForm.onsubmit = onSubmit;

