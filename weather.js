const APIKEY = 'cab030110a714497e49bb042ac365a98'

function geoOk(pos) {
	const lat = pos.coords.latitude
	const lng = pos.coords.longitude
	console.log("You live in", lat, lng);

	const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}4&lon=${lng}&appid=${APIKEY}&units=metric`
	fetch(url).then(response => response.json()).then(data => {
		const weather = document.querySelector('#weather span:last-child')
		const city = document.querySelector('#weather span')
		weather.innerText = `/ ${data.main.temp}℃ / ${data.weather[0].main}`
		city.innerText = data.name
	})
}
function geoError() {
	alert("Can't find")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError)

