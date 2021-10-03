const images = [
	'0.jpg',
	'1.jpg',
	'2.jpg',
	'3.jpg',
]

let i = Math.floor(Math.random() * images.length)
const image = document.querySelector('img')
image.src = `${images[i]}`
