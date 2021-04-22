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
}
// Vand Funktioner
function vandAnimationer() {
	let randomPos = randomTal();
	document
		.querySelector("#vand_container")
		.classList.add("rotate_arm", randomPos);
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
	let randomPos = randomTal();

	document.querySelector("#vand_container").classList.remove("rotate_arm");
	document.querySelector("#vand_sprite").classList.remove("blow_out");
	document.querySelector("#vand_container").classList.remove("pause");
	document.querySelector("#vand_container").classList.remove("pos6");

	document
		.querySelector("#vand_container")
		.classList.add("rotate_arm", randomPos);
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
}

// Fadøl Funktioner
function beerAnimationer() {
	let randomPos = randomTal();
	document
		.querySelector("#beer_container")
		.classList.add("rotate_arm", randomPos);
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
	document.querySelector("#beer_sprite").classList.add("fade_out");
	document.querySelector("#beer_container").classList.add("pause");
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
	let randomPos = randomTal();

	document.querySelector("#beer_container").className = "";
	document.querySelector("#beer_sprite").className = "";
	// document.querySelector("#beer_container").classList.remove("pause");
	// document.querySelector("#beer_container").classList.remove("pos4");
	document
		.querySelector("#beer_container")
		.classList.add("rotate_arm", randomPos);

	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
}

function randomTal() {
	let randomTal = Math.floor(Math.random() * 10) + 1;
	let randomPos = "pos" + randomTal;
	return randomPos;
}
