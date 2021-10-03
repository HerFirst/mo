const clock = document.querySelector('h2')

function getClock()
{
	const date = new Date()
	// clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
	clock.innerText = `${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}:${String(date.getSeconds()).padStart(2, 0)}`
}
getClock()
setInterval(getClock, 1000)

 



