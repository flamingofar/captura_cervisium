/** @format */

let promille;

window.addEventListener("load", loaded);

function loaded() {
	console.log("loaded");
	startGame();
}
function startGame() {
	promille = 0;
	document.querySelector("#energy_board_count").innerHTML =
		promille + "&permil;";
	console.log(promille);
	vandAnimationer();
	beerAnimationer();
	sidevognAnimationer();
}
// Vand Funktioner
function vandAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	document
		.querySelector("#vand_container")
		.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
	document
		.querySelector("#vand_sprite")
		.addEventListener("animationend", resetVand);

	document
		.querySelector("#vand_container")
		.addEventListener("animationiteration", resetVand);
}
function clickHandlerVand() {
	document
		.querySelector("#vand_container")
		.removeEventListener("mousedown", clickHandlerVand);
	document.querySelector("#vand_container").classList.add("pause");
	document.querySelector("#vand_sprite").classList.add("blow_out");
	document.querySelector("#vand_container").classList.remove("rotate_arm");

	// +1 Promille, udskriv point
	promille--;
	console.log(promille);
	document.querySelector("#energy_board_count").innerHTML =
		promille + "&permil;";

	// Skift barometerbillede
	document.querySelector("#energy_board").style.backgroundImage =
		"url('assets/ui_elementer/barometer/barometer_2.svg')";
}
function resetVand() {
	document
		.querySelector("#vand_container")
		.removeEventListener("animationiteration", resetVand);
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();

	document.querySelector("#vand_container").classList = "";
	document.querySelector("#vand_sprite").classList = "";

	document.querySelector("#vand_container").classList.add(randomDel, randomSpd);
	document.querySelector("#vand_container").offsetHeight;
	document
		.querySelector("#vand_container")
		.classList.add(randomPos, "rotate_arm");
	document
		.querySelector("#vand_container")
		.addEventListener("animationiteration", resetVand);
}

// Fadøl Funktioner
function beerAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	document
		.querySelector("#beer_container")
		.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Fadøl Animationer
	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
	document
		.querySelector("#beer_sprite")
		.addEventListener("animationend", resetBeer);
	document
		.querySelector("#beer_container")
		.addEventListener("animationiteration", resetBeer);
}
function clickHandlerBeer() {
	document
		.querySelector("#beer_container")
		.removeEventListener("mousedown", clickHandlerBeer);
	document.querySelector("#beer_container").classList.add("pause");
	document.querySelector("#beer_sprite").classList.add("fade_out");
	document.querySelector("#beer_container").classList.remove("rotate_arm");

	// +1 Promille, udskriv point
	promille++;

	document.querySelector("#energy_board_count").innerHTML =
		promille + "&permil;";

	// Skift barometerbillede
	document.querySelector("#energy_board").style.backgroundImage =
		"url('assets/ui_elementer/barometer/barometer_10.svg')";
}
function resetBeer() {
	document
		.querySelector("#beer_container")
		.removeEventListener("animationiteration", resetBeer);
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();

	document.querySelector("#beer_container").classList = "";
	document.querySelector("#beer_sprite").classList = "";

	document.querySelector("#beer_container").classList.add(randomDel, randomSpd);
	document.querySelector("#beer_container").offsetHeight;
	document
		.querySelector("#beer_container")
		.classList.add(randomPos, "rotate_arm");

	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
	document
		.querySelector("#beer_container")
		.addEventListener("animationiteration", resetBeer);
	console.log(randomPos);
}

// Sidevogn Funktioner
function sidevognAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	document
		.querySelector("#sidevogn_container")
		.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Fadøl Animationer
	document
		.querySelector("#sidevogn_container")
		.addEventListener("mousedown", clickHandlersidevogn);
	document
		.querySelector("#sidevogn_sprite")
		.addEventListener("animationend", resetsidevogn);
	document
		.querySelector("#sidevogn_container")
		.addEventListener("animationiteration", resetsidevogn);
}
function clickHandlersidevogn() {
	document
		.querySelector("#sidevogn_container")
		.removeEventListener("mousedown", clickHandlersidevogn);
	document.querySelector("#sidevogn_container").classList.add("pause");
	document.querySelector("#sidevogn_sprite").classList.add("fade_out");
	document.querySelector("#sidevogn_container").classList.remove("rotate_arm");

	// +1 Promille, udskriv point
	promille += 2;

	document.querySelector("#energy_board_count").innerHTML =
		promille + "&permil;";

	// Skift barometerbillede
	document.querySelector("#energy_board").style.backgroundImage =
		"url('assets/ui_elementer/barometer/barometer_7.svg')";
}
function resetsidevogn() {
	document
		.querySelector("#sidevogn_container")
		.removeEventListener("animationiteration", resetsidevogn);
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();

	document.querySelector("#sidevogn_container").classList = "";
	document.querySelector("#sidevogn_sprite").classList = "";

	document
		.querySelector("#sidevogn_container")
		.classList.add(randomDel, randomSpd);
	document.querySelector("#sidevogn_container").offsetHeight;
	document
		.querySelector("#sidevogn_container")
		.classList.add(randomPos, "rotate_arm");

	document
		.querySelector("#sidevogn_container")
		.addEventListener("mousedown", clickHandlersidevogn);
	document
		.querySelector("#sidevogn_container")
		.addEventListener("animationiteration", resetsidevogn);
	console.log(randomPos);
}

/*--------------------------------------------------- Model Funktioner ---------------------------------------------------*/
function randomTal() {
	let randomTal = Math.floor(Math.random() * 10) + 1;
	let randomPos = "pos" + randomTal;
	return randomPos;
}
function randomDelay() {
	let randomTal = Math.floor(Math.random() * 4) + 1;
	let randomDelay = "delay" + randomTal;
	return randomDelay;
}
function randomSpeed() {
	let randomTal = Math.floor(Math.random() * 4) + 1;
	let randomSpeed = "speed" + randomTal;
	return randomSpeed;
}
