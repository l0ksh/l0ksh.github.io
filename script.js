function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString("en-US", {timeZone: 'Asia/Kolkata'});
	}
showTime();
setInterval(function () {
	showTime();
}, 1000);
