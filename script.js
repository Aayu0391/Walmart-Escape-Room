const startingTime = 3.5;
let time = startingTime * 60;

const countdownComp = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown(){
	const minutes = Math.floor(time / 60);
	let seconds = time % 60

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownComp.innerHTML = `${minutes}:${seconds}`;
	time--;
}

function redirectPage(){
	window.location = "lose.html"
}

setTimeout('redirectPage()', 211500)


function winPage(){
	var place = document.getElementById("num_place").value;
	if (place == "609") {
		window.location = "win.html"
	}

	if (place != "609") {
		window.alert("Wrong Answer lmao")
	}
}

function firstNumber(){
	window.alert("Is there somethin beneath the first button of the website? :/")
}

function secondNumber(){
	window.alert("Let the clouds clear... :/")
}

function thirdNumber(){
	window.alert("Was something off about the image in the rules section? :/")
}

gsap.from('.logo-title', {autoAlpha: 0, duration: 1, delay: 0.8, y:10})
gsap.from('.ul-item', {autoAlpha: 0, duration: 1, delay: 1, y:10})
gsap.from('.home-title-div', {autoAlpha: 0, duration: 1, delay: 1.15, y:10})
gsap.from('.home-button-div', {autoAlpha: 0, duration: 1, delay: 1.25, y:10})
gsap.from('.hidden', {autoAlpha: 0, duration: 1, delay: 2.25, y:10})

window.sr = ScrollReveal({ reset: true });

sr.reveal('.reveal-div', {
  origin: 'bottom',
  distance: '50px',
  duration: 1800,
  scale: 0.8,
  delay: 200
});