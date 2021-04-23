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
	telefonAnimationer();
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
		"url('assets/ui_elementer/barometer/barometer_" + promille + ".svg')";
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
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
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
		"url('assets/ui_elementer/barometer/barometer_" + promille + ".svg')";
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
		.addEventListener("mousedown", clickHandlerSidevogn);
	document
		.querySelector("#sidevogn_sprite")
		.addEventListener("animationend", resetSidevogn);
	document
		.querySelector("#sidevogn_container")
		.addEventListener("animationiteration", resetSidevogn);
}
function clickHandlerSidevogn() {
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
		"url('assets/ui_elementer/barometer/barometer_" + promille + ".svg')";
}
function resetSidevogn() {
	document
		.querySelector("#sidevogn_container")
		.removeEventListener("animationiteration", resetSidevogn);
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
		.addEventListener("mousedown", clickHandlerSidevogn);
	document
		.querySelector("#sidevogn_container")
		.addEventListener("animationiteration", resetSidevogn);
	console.log(randomPos);
}

// Telefon Funktioner
function telefonAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	document
		.querySelector("#telefon_container")
		.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Fadøl Animationer
	document
		.querySelector("#telefon_container")
		.addEventListener("mousedown", clickHandlerTelefon);
	document
		.querySelector("#telefon_sprite")
		.addEventListener("animationend", resetTelefon);
	document
		.querySelector("#telefon_container")
		.addEventListener("animationiteration", resetTelefon);
}
function clickHandlerTelefon() {
	document
		.querySelector("#telefon_container")
		.removeEventListener("mousedown", clickHandlerTelefon);
	document.querySelector("#telefon_container").classList.add("pause");
	document.querySelector("#telefon_sprite").classList.add("fade_out");
	document.querySelector("#telefon_container").classList.remove("rotate_arm");

	// Vis Taxa Gameover skærm
}
function resetTelefon() {
	document
		.querySelector("#telefon_container")
		.removeEventListener("animationiteration", resetTelefon);
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();

	document.querySelector("#telefon_container").classList = "";
	document.querySelector("#telefon_sprite").classList = "";

	document
		.querySelector("#telefon_container")
		.classList.add(randomDel, randomSpd);
	document.querySelector("#telefon_container").offsetHeight;
	document
		.querySelector("#telefon_container")
		.classList.add(randomPos, "rotate_arm");

	document
		.querySelector("#telefon_container")
		.addEventListener("mousedown", clickHandlerTelefon);
	document
		.querySelector("#telefon_container")
		.addEventListener("animationiteration", resetTelefon);
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
