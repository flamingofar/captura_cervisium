/** @format */
/*--------------------------------------------------- Fadøl ---------------------------------------------------*/
const beerContainer1 = document.querySelector("#beer_container1");
const beerContainer2 = document.querySelector("#beer_container2");
const beerContainer3 = document.querySelector("#beer_container3");
/*--------------------------------------------------- Sidevogn ---------------------------------------------------*/
const sidevognContainer1 = document.querySelector("#sidevogn_container1");
const sidevognContainer2 = document.querySelector("#sidevogn_container2");
/*--------------------------------------------------- Vand ---------------------------------------------------*/
const vandContainer1 = document.querySelector("#vand_container1");
const vandContainer2 = document.querySelector("#vand_container2");
const vandContainer3 = document.querySelector("#vand_container3");
/*--------------------------------------------------- Telefon ---------------------------------------------------*/
const telefonContainer1 = document.querySelector("#telefon_container1");
const telefonContainer2 = document.querySelector("#telefon_container2");
/*--------------------------------------------------- Barometer ---------------------------------------------------*/
const energyBoard = document.querySelector("#energy_board");
const energyCount = document.querySelector("#energy_board_count");
/*--------------------------------------------------- Timer ---------------------------------------------------*/
const viser = document.querySelector("#viser");
const face = document.querySelector("#mood_board");
/*--------------------------------------------------- Blur Box ---------------------------------------------------*/
const blurBox = document.querySelector("#blur_box");

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
	vandContainer1.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	vandContainer2.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	vandContainer3.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Vand Animationer
	vandContainer1.addEventListener("mousedown", clickHandlerVand);
	vandContainer1.addEventListener("animationiteration", resetVand);

	vandContainer2.addEventListener("mousedown", clickHandlerVand);
	vandContainer2.addEventListener("animationiteration", resetVand);

	vandContainer3.addEventListener("mousedown", clickHandlerVand);
	vandContainer3.addEventListener("animationiteration", resetVand);
}
function clickHandlerVand() {
	this.removeEventListener("mousedown", clickHandlerVand);

	this.classList.add("pause");
	this.firstElementChild.classList.add("blow_out");
	this.addEventListener("animationend", resetVand);

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
	this.removeEventListener("animationiteration", resetVand);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	this.classList = "";
	this.firstElementChild.classList = "";

	this.classList.add(randomSpd);
	this.offsetHeight;
	this.classList.add(randomPos, "rotate_arm");
	this.addEventListener("animationiteration", resetVand);
	this.addEventListener("mousedown", clickHandlerVand);
}
function stopVand() {
	vandContainer1.classList = "";
	vandContainer1.firstElementChild.classList = "";

	vandContainer1.removeEventListener("mousedown", clickHandlerVand);
	vandContainer1.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	vandContainer1.removeEventListener("animationiteration", resetVand);
	vandContainer1.removeEventListener("mousedown", clickHandlerVand);

	vandContainer2.classList = "";
	vandContainer2.firstElementChild.classList = "";

	vandContainer2.removeEventListener("mousedown", clickHandlerVand);
	vandContainer2.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	vandContainer2.removeEventListener("animationiteration", resetVand);
	vandContainer2.removeEventListener("mousedown", clickHandlerVand);

	vandContainer3.classList = "";
	vandContainer3.firstElementChild.classList = "";

	vandContainer3.removeEventListener("mousedown", clickHandlerVand);
	vandContainer3.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	vandContainer3.removeEventListener("animationiteration", resetVand);
	vandContainer3.removeEventListener("mousedown", clickHandlerVand);
}

/*--------------------------------------------------- Fadøl Funktioner ---------------------------------------------------*/
function beerAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	beerContainer1.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	beerContainer2.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	beerContainer3.classList.add("rotate_arm", randomPos, randomDel, randomSpd);
	// Fadøl Animationer
	beerContainer1.addEventListener("mousedown", clickHandlerBeer);
	beerContainer1.addEventListener("animationiteration", resetBeer);

	beerContainer2.addEventListener("mousedown", clickHandlerBeer);
	beerContainer2.addEventListener("animationiteration", resetBeer);

	beerContainer3.addEventListener("mousedown", clickHandlerBeer);
	beerContainer3.addEventListener("animationiteration", resetBeer);
}
function clickHandlerBeer() {
	this.removeEventListener("mousedown", clickHandlerBeer);
	this.classList.add("pause");
	this.firstElementChild.classList.add("fade_out");
	this.addEventListener("animationend", resetBeer);

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
	this.removeEventListener("animationiteration", resetBeer);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	this.classList = "";
	this.firstElementChild.classList = "";

	this.classList.add(randomSpd);
	this.offsetHeight;
	this.classList.add(randomPos, "rotate_arm");

	this.addEventListener("mousedown", clickHandlerBeer);
	this.addEventListener("animationiteration", resetBeer);
}
function stopBeer() {
	beerContainer1.classList = "";
	beerContainer1.firstElementChild.classList = "";

	beerContainer1.removeEventListener("mousedown", clickHandlerVand);
	beerContainer1.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	beerContainer1.removeEventListener("animationiteration", resetVand);
	beerContainer1.removeEventListener("mousedown", clickHandlerVand);

	beerContainer2.classList = "";
	beerContainer2.firstElementChild.classList = "";

	beerContainer2.removeEventListener("mousedown", clickHandlerVand);
	beerContainer2.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	beerContainer2.removeEventListener("animationiteration", resetVand);
	beerContainer2.removeEventListener("mousedown", clickHandlerVand);

	beerContainer3.classList = "";
	beerContainer3.firstElementChild.classList = "";

	beerContainer3.removeEventListener("mousedown", clickHandlerVand);
	beerContainer3.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	beerContainer3.removeEventListener("animationiteration", resetVand);
	beerContainer3.removeEventListener("mousedown", clickHandlerVand);
}

/*--------------------------------------------------- Sidevogn Funktioner ---------------------------------------------------*/
function sidevognAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	sidevognContainer1.classList.add(
		"rotate_arm",
		randomPos,
		randomDel,
		randomSpd
	);
	sidevognContainer2.classList.add(
		"rotate_arm",
		randomPos,
		randomDel,
		randomSpd
	);
	// Fadøl Animationer
	sidevognContainer1.addEventListener("mousedown", clickHandlerSidevogn);
	sidevognContainer1.addEventListener("animationiteration", resetSidevogn);

	sidevognContainer2.addEventListener("mousedown", clickHandlerSidevogn);
	sidevognContainer2.addEventListener("animationiteration", resetSidevogn);
}
function clickHandlerSidevogn() {
	this.removeEventListener("mousedown", clickHandlerSidevogn);
	this.classList.add("pause");
	this.firstElementChild.classList.add("fade_out");
	this.addEventListener("animationend", resetSidevogn);

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
	this.removeEventListener("animationend", resetSidevogn);
	this.removeEventListener("animationiteration", resetSidevogn);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	this.classList = "";
	this.firstElementChild.classList = "";
	this.classList.add(randomSpd);
	this.offsetHeight;
	this.classList.add(randomPos, "rotate_arm");

	this.addEventListener("mousedown", clickHandlerSidevogn);
	this.addEventListener("animationiteration", resetSidevogn);
}
function stopSidevogn() {
	sidevognContainer1.classList = "";
	sidevognContainer1.firstElementChild.classList = "";

	sidevognContainer1.removeEventListener("mousedown", clickHandlerVand);
	sidevognContainer1.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	sidevognContainer1.removeEventListener("animationiteration", resetVand);
	sidevognContainer1.removeEventListener("mousedown", clickHandlerVand);

	sidevognContainer2.classList = "";
	sidevognContainer2.firstElementChild.classList = "";

	sidevognContainer2.removeEventListener("mousedown", clickHandlerVand);
	sidevognContainer2.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	sidevognContainer2.removeEventListener("animationiteration", resetVand);
	sidevognContainer2.removeEventListener("mousedown", clickHandlerVand);
}

/*--------------------------------------------------- Telefon Funktioner ---------------------------------------------------*/
function telefonAnimationer() {
	let randomPos = randomTal();
	let randomDel = randomDelay();
	let randomSpd = randomSpeed();
	// Random Position, delay og rotation animation
	telefonContainer1.classList.add(
		"rotate_arm",
		randomPos,
		randomDel,
		randomSpd
	);
	telefonContainer2.classList.add(
		"rotate_arm",
		randomPos,
		randomDel,
		randomSpd
	);
	// Fadøl Animationer
	telefonContainer1.addEventListener("mousedown", clickHandlerTelefon);
	telefonContainer1.addEventListener("animationiteration", resetTelefon);
	telefonContainer2.addEventListener("mousedown", clickHandlerTelefon);
	telefonContainer2.addEventListener("animationiteration", resetTelefon);
}
function clickHandlerTelefon() {
	this.removeEventListener("mousedown", clickHandlerTelefon);
	this.classList.add("pause");
	this.firstElementChild.classList.add("fade_out");

	// Vis Taxa Gameover skærm
}
function resetTelefon() {
	this.removeEventListener("animationiteration", resetTelefon);
	let randomPos = randomTal();
	let randomSpd = randomSpeed();

	this.classList = "";
	this.firstElementChild.classList = "";

	this.classList.add(randomSpd);
	this.offsetHeight;
	this.classList.add(randomPos, "rotate_arm");

	this.addEventListener("mousedown", clickHandlerTelefon);
	this.addEventListener("animationiteration", resetTelefon);
}
function stopTelefon() {
	telefonContainer1.classList = "";
	telefonContainer1.firstElementChild.classList = "";

	telefonContainer1.removeEventListener("mousedown", clickHandlerVand);
	telefonContainer1.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	telefonContainer1.removeEventListener("animationiteration", resetVand);
	telefonContainer1.removeEventListener("mousedown", clickHandlerVand);

	telefonContainer2.classList = "";
	telefonContainer2.firstElementChild.classList = "";

	telefonContainer2.removeEventListener("mousedown", clickHandlerVand);
	telefonContainer2.firstElementChild.removeEventListener(
		"animationend",
		resetVand
	);

	telefonContainer2.removeEventListener("animationiteration", resetVand);
	telefonContainer2.removeEventListener("mousedown", clickHandlerVand);
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
	if (point >= 10) {
		face.classList.add("face3");
		blurBox.classList.add("blur3");
	} else if (point > 3 && point < 10) {
		face.classList.add("face2");
		blurBox.classList.add("blur2");
	} else {
		face.classList.add("face1");
		blurBox.classList.add("blur1");
	}
}
