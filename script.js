function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
	}
showTime();
setInterval(function () {
	showTime();
}, 1000);
