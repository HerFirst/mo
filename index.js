const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a")
const greeting = document.querySelector("h1")
const HIDDEN_CLASS = 'hidden'

function printGreeting() {
	greeting.classList.remove('hidden')
	greeting.innerText = `Hello ${userName}`
}

if (userName = localStorage.getItem('username'))
{
	printGreeting()
}
else
	loginForm.classList.remove('hidden'),
	loginForm.onsubmit = onSubmit,
	
link.addEventListener('click', onClick)

function onSubmit(arg) {
	arg.preventDefault()
	loginForm.classList.add('hidden')
	userName = loginInput.value
	localStorage.setItem('username', userName)
	printGreeting()
}