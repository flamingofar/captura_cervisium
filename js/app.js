/** @format */
const beerContainer = document.querySelector("#beer_container");
const sidevognContainer = document.querySelector("#sidevogn_container");
const vandContainer = document.querySelector("#vand_container");
const telefonContainer = document.querySelector("#telefon_container");
const energyBoard = document.querySelector("#energy_board");
const energyCount = document.querySelector("#energy_board_count");
const viser = document.querySelector("#viser");
const face = document.querySelector("#mood_board");

let point;
let promilleTxt;

window.addEventListener("load", loaded);

function loaded() {
	console.log("loaded");
	startGame();
}
function startGame() {
	point = 0;
	promilleTxt = 0;
	energyCount.innerHTML = promilleTxt + "&permil;";
	face.classList.add("face1");
	vandAnimationer();
	beerAnimationer();
	sidevognAnimationer();
	telefonAnimationer();
	startTimer();
}
/*--------------------------------------------------- Vand Funktioner ---------------------------------------------------*/
function vandAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	vandContainer.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	vandContainer.addEventListener("mousedown", clickHandlerVand);
	vandContainer.firstElementChild.addEventListener("animationend", resetVand);

	vandContainer.addEventListener("animationiteration", resetVand);
}
function clickHandlerVand() {
	vandContainer.removeEventListener("mousedown", clickHandlerVand);
	vandContainer.classList.add("pause");
	vandContainer.firstElementChild.classList.add("blow_out");

	// +1 Promille, udskriv point
	promilleTxt -= 0.3;
	point--;

	// Skift barometerbillede
	if (point <= 0) {
		document.querySelector("#energy_board").style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + 1 + ".svg')";

		energyCount.innerHTML = 0 + "&permil;";
	} else {
		document.querySelector("#energy_board").style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + point + ".svg')";
		energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";
	}
	faceChoice();
}
function resetVand() {
	vandContainer.removeEventListener("animationiteration", resetVand);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	vandContainer.classList = "";
	vandContainer.firstElementChild.classList = "";

	vandContainer.classList.add(randomSpd);
	vandContainer.offsetHeight;
	vandContainer.classList.add(randomPos, "rotate_arm");
	vandContainer.addEventListener("animationiteration", resetVand);
	vandContainer.addEventListener("mousedown", clickHandlerVand);
}
function stopVand() {
	vandContainer.classList = "";
	vandContainer.firstElementChild.classList = "";

	vandContainer.removeEventListener("mousedown", clickHandlerVand);
	vandContainer.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	vandContainer.removeEventListener("animationiteration", resetVand);
	vandContainer.removeEventListener("mousedown", clickHandlerVand);
}

/*--------------------------------------------------- Fadøl Funktioner ---------------------------------------------------*/
function beerAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	beerContainer.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Fadøl Animationer
	beerContainer.addEventListener("mousedown", clickHandlerBeer);
	beerContainer.firstElementChild.addEventListener("animationend", resetBeer);
	beerContainer.addEventListener("animationiteration", resetBeer);
}
function clickHandlerBeer() {
	beerContainer.removeEventListener("mousedown", clickHandlerBeer);
	beerContainer.classList.add("pause");
	beerContainer.firstElementChild.classList.add("fade_out");

	// +0.3 promille, ++ point, udskriv point
	promilleTxt += 0.3;
	point++;

	// Skift barometerbillede
	if (point <= 0) {
		energyBoard.style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + 1 + ".svg')";
		face.classList.add("face");

		energyCount.innerHTML = 0 + "&permil;";
	} else if (point >= 10) {
		energyBoard.style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + 10 + ".svg')";
		energyCount.innerHTML = 3 + "&permil;";
		stopSpillet();
	} else {
		energyBoard.style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + point + ".svg')";
		energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";
	}
	faceChoice();
}
function resetBeer() {
	beerContainer.removeEventListener("animationiteration", resetBeer);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	beerContainer.classList = "";
	beerContainer.firstElementChild.classList = "";

	beerContainer.classList.add(randomSpd);
	beerContainer.offsetHeight;
	beerContainer.classList.add(randomPos, "rotate_arm");

	beerContainer.addEventListener("mousedown", clickHandlerBeer);
	beerContainer.addEventListener("animationiteration", resetBeer);
}
function stopBeer() {
	beerContainer.classList = "";
	beerContainer.firstElementChild.classList = "";

	beerContainer.removeEventListener("mousedown", clickHandlerVand);
	beerContainer.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	beerContainer.removeEventListener("animationiteration", resetVand);
	beerContainer.removeEventListener("mousedown", clickHandlerVand);
}

/*--------------------------------------------------- Sidevogn Funktioner ---------------------------------------------------*/
function sidevognAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	sidevognContainer.classList.add(
		"rotate_arm",
		randomPos,
		randomDel,
		randomSpd
	);
	// Fadøl Animationer
	sidevognContainer.addEventListener("mousedown", clickHandlerSidevogn);
	sidevognContainer.firstElementChild.addEventListener(
		"animationend",
		resetSidevogn
	);
	sidevognContainer.addEventListener("animationiteration", resetSidevogn);
}
function clickHandlerSidevogn() {
	sidevognContainer.removeEventListener("mousedown", clickHandlerSidevogn);
	sidevognContainer.classList.add("pause");
	sidevognContainer.firstElementChild.classList.add("fade_out");
	console.log("clicked");
	// +0.6 Promille, ++ point, udskriv point
	promilleTxt += 0.6;
	point += 2;

	// Skift barometerbillede
	if (point <= 0) {
		energyBoard.style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + 1 + ".svg')";

		energyCount.innerHTML = 0 + "&permil;";
	} else if (point >= 10) {
		energyBoard.style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + 10 + ".svg')";
		energyCount.innerHTML = 3 + "&permil;";

		stopSpillet();
	} else {
		energyBoard.style.backgroundImage =
			"url('assets/ui_elementer/barometer/barometer_" + point + ".svg')";
		energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";
	}
	faceChoice();
}
function resetSidevogn() {
	sidevognContainer.firstElementChild.removeEventListener(
		"animationend",
		resetSidevogn
	);
	sidevognContainer.removeEventListener("animationiteration", resetSidevogn);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	sidevognContainer.classList = "";
	sidevognContainer.firstElementChild.classList = "";

	sidevognContainer.classList.add(randomSpd);
	sidevognContainer.offsetHeight;
	sidevognContainer.classList.add(randomPos, "rotate_arm");

	sidevognContainer.addEventListener("mousedown", clickHandlerSidevogn);
	sidevognContainer.addEventListener("animationiteration", resetSidevogn);
	sidevognContainer.firstElementChild.addEventListener(
		"animationend",
		resetSidevogn
	);
}
function stopSidevogn() {
	sidevognContainer.classList = "";
	sidevognContainer.firstElementChild.classList = "";

	sidevognContainer.removeEventListener("mousedown", clickHandlerVand);
	sidevognContainer.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	sidevognContainer.removeEventListener("animationiteration", resetVand);
	sidevognContainer.removeEventListener("mousedown", clickHandlerVand);
}

/*--------------------------------------------------- Telefon Funktioner ---------------------------------------------------*/
function telefonAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	telefonContainer.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Fadøl Animationer
	telefonContainer.addEventListener("mousedown", clickHandlerTelefon);
	telefonContainer.firstElementChild.addEventListener(
		"animationend",
		resetTelefon
	);
	telefonContainer.addEventListener("animationiteration", resetTelefon);
}
function clickHandlerTelefon() {
	telefonContainer.removeEventListener("mousedown", clickHandlerTelefon);
	telefonContainer.classList.add("pause");
	telefonContainer.firstElementChild.classList.add("fade_out");

	// Vis Taxa Gameover skærm
}
function resetTelefon() {
	telefonContainer.removeEventListener("animationiteration", resetTelefon);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	telefonContainer.classList = "";
	telefonContainer.firstElementChild.classList = "";

	telefonContainer.classList.add(randomSpd);
	telefonContainer.offsetHeight;
	telefonContainer.classList.add(randomPos, "rotate_arm");

	telefonContainer.addEventListener("mousedown", clickHandlerTelefon);
	telefonContainer.addEventListener("animationiteration", resetTelefon);
}
function stopTelefon() {
	telefonContainer.classList = "";
	telefonContainer.firstElementChild.classList = "";

	telefonContainer.removeEventListener("mousedown", clickHandlerVand);
	telefonContainer.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	telefonContainer.removeEventListener("animationiteration", resetVand);
	telefonContainer.removeEventListener("mousedown", clickHandlerVand);
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
function startTimer() {
	viser.classList.add("timer");
	viser.addEventListener("animationend", stopSpillet);
}
function stopSpillet() {
	stopBeer();
	stopSidevogn();
	stopTelefon();
	stopVand();
	faceChoice;
}
function faceChoice() {
	if (point == 10) {
		face.classList.add("face3");
	} else if (point > 3 && point < 10) {
		face.classList.add("face2");
	} else face.classList.add("face1");
}
