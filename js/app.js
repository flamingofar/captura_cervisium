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
/*--------------------------------------------------- Knapper ---------------------------------------------------*/
const startKnap = document.querySelector("#start_btn");
const infoPlayKnap = document.querySelector("#play_btn");
/*--------------------------------------------------- Start Skærm ---------------------------------------------------*/
const startScreen = document.querySelector("#start");
const halo = document.querySelector("#halo");
const captura = document.querySelector("#captura");
/*--------------------------------------------------- Info Skærm ---------------------------------------------------*/
const infoScreen = document.querySelector("#info_screen");
/*--------------------------------------------------- Taxa Skærm ---------------------------------------------------*/
const taxaScreen = document.querySelector("#game_over_taxa");
const taxaReplay = document.querySelector("#game_over_replay");
const taxaHome = document.querySelector("#game_over_home");
/*--------------------------------------------------- Game Over Skærm ---------------------------------------------------*/
const gameOverScreen = document.querySelector("#game_over");
const gameOverReplay = document.querySelector("#game_over_replay_alm");
const gameOverHome = document.querySelector("#game_over_home_alm");
const taxaBil = document.querySelector("#taxa_bil");
/*--------------------------------------------------- Level Complete Skærm ---------------------------------------------------*/
const levelCompleteScreen = document.querySelector("#level_complete");
const completeReplay = document.querySelector("#replay");
const completeHome = document.querySelector("#home");

const levelCompleteHeader = document.querySelector("#level_complete_txt");
const levelCompleteTxt = document.querySelector("#txt");
const levelCompleteBeerL = document.querySelector("#beer_left");
const levelCompleteBeerR = document.querySelector("#beer_right");
const levelCompleteFirework1 = document.querySelector("#firework1");
const levelCompleteFirework2 = document.querySelector("#firework2");
const levelCompleteFirework3 = document.querySelector("#firework3");
const levelCompleteFlag = document.querySelector("#dannebrog");
const levelCompleteFigur1 = document.querySelector("#figur_1");
const levelCompleteFigur2 = document.querySelector("#figur_2");
/*--------------------------------------------------- Sounds ---------------------------------------------------*/
const gameSound = document.querySelector("#sound_info_screen");
const gameOverSound = document.querySelector("#sound_game_over");
const taxaSound = document.querySelector("#sound_taxa_game_over");
const levelCompleteSound = document.querySelector("#sound_level_complete");

// Beer
const beerSound1 = document.querySelector("#sound_beer1");
const beerSound2 = document.querySelector("#sound_beer2");
const beerSound3 = document.querySelector("#sound_beer3");
const beerSound4 = document.querySelector("#sound_beer4");

// Vand
const vandSound1 = document.querySelector("#sound_vand1");
const vandSound2 = document.querySelector("#sound_vand2");
const vandSound3 = document.querySelector("#sound_vand3");

/*--------------------------------------------------- Mute Knap ---------------------------------------------------*/
const muteKnap = document.querySelector("#mute_knap");
muteKnap.addEventListener("click", mute);

/*-----------------------------------------------------------------------------------------------------------------*/

let point, promilleTxt;
let muted = true;

window.addEventListener("load", loaded);

function loaded() {
	console.log("loaded");
	startScreenFn();
	infoScreenFn();
	startGame();
}
function startGame() {
	point = 0;
	promilleTxt = 0;
	energyBoard.classList.add("barometer1");
	energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";
	face.classList.add("face1");
	vandAnimationer();
	beerAnimationer();
	sidevognAnimationer();
	telefonAnimationer();
	mute();
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
	this.addEventListener("mousedown", clickHandlerVand);

	//Animationer
	this.classList.add("pause");
	this.firstElementChild.classList.add("fade_out");
	this.addEventListener("animationend", resetVand);

	// +1 Promille, udskriv point
	promilleTxt -= 0.3;
	point--;
	energyBoard.classList = "";
	energyBoard.classList.add("barometer" + point);
	energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";

	// Skift barometerbillede
	let randTal = Math.floor(Math.random() * 3) + 1;
	if (point <= 0) {
		energyCount.innerHTML = 0 + "&permil;";
		energyBoard.classList.add("barometer1");
	}
	// Afspil lyde
	if (randTal == 1) {
		vandSound1.play();
	} else if (randTal == 2) {
		vandSound2.play();
	} else {
		vandSound3.play();
	}

	faceChoice();
}
function resetVand() {
	this.addEventListener("animationiteration", resetVand);
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
	this.firstElementChild.classList.add("blow_out");
	this.addEventListener("animationend", resetBeer);

	// +0.3 promille, ++ point, udskriv point
	promilleTxt += 0.3;
	point++;
	energyBoard.classList = "";
	energyBoard.classList.add("barometer" + point);
	energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";

	// Skift barometerbillede
	if (point <= 0) {
		energyCount.innerHTML = 0 + "&permil;";
	} else if (point >= 10) {
		levelCompleteScreenFn();
	} else {
	}
	faceChoice();

	// Afspil lyde
	afspilBeerLyd();
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
	this.firstElementChild.classList.add("blow_out");
	this.addEventListener("animationend", resetSidevogn);

	// +0.6 Promille, ++ point, udskriv point
	promilleTxt += 0.6;
	point += 2;
	energyBoard.classList = "";
	energyBoard.classList.add("barometer" + point);
	energyCount.innerHTML = Math.round(promilleTxt * 100) / 100 + "&permil;";

	// Skift barometerbillede
	if (point <= 0) {
		energyCount.innerHTML = 0 + "&permil;";
	} else if (point >= 10) {
		levelCompleteScreenFn();
	} else {
	}
	faceChoice();

	// Afspil lyde
	afspilBeerLyd();
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
	this.addEventListener("animationend", resetTelefon);
	taxaScreenFn();
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

/*--------------------------------------------------- Start Skærm Funktioner ---------------------------------------------------*/
function startScreenFn() {
	captura.removeEventListener("animationend", addHideAnimation);
	halo.classList = "";
	captura.classList = "";
	startKnap.addEventListener("click", visInfo);
	startKnap.classList.add("pulse");
	halo.classList.add("text_reveal", "delay2");
	captura.classList.add("text_reveal");
}
function visInfo() {
	captura.addEventListener("animationend", addHideAnimation);
	startKnap.removeEventListener("click", visInfo);
	startKnap.classList.remove("pulse");
	halo.classList.remove("text_reveal", "delay2");
	captura.classList.remove("text_reveal");

	halo.classList.add("text_reveal_reverse", "delay2");
	captura.classList.add("text_reveal_reverse");
	infoScreen.classList = "";

	// Afspil Spil Musik
	gameSound.play();
}

/*--------------------------------------------------- Info Skærm Funktioner ---------------------------------------------------*/
function infoScreenFn() {
	infoPlayKnap.addEventListener("click", skjulInfo);
}
function skjulInfo() {
	console.log("tiden starter");
	infoScreen.classList.add("hide_kf");

	startTimer();
}

/*--------------------------------------------------- Level Complete Skærm Funktioner ---------------------------------------------------*/
function levelCompleteScreenFn() {
	// Animationer
	levelCompleteHeader.classList.add("level_complete_reveal");
	levelCompleteTxt.classList.add("level_complete_reveal", "delay1");
	levelCompleteBeerL.classList.add("level_complete_reveal", "delay2");
	levelCompleteBeerR.classList.add("level_complete_reveal", "delay2");
	levelCompleteFirework1.classList.add("level_complete_reveal", "delay3");
	levelCompleteFirework2.classList.add("level_complete_reveal", "delay3");
	levelCompleteFirework3.classList.add("level_complete_reveal", "delay3");
	levelCompleteFlag.classList.add("level_complete_reveal", "delay1");
	levelCompleteFigur1.classList.add("level_complete_reveal", "delay4");
	levelCompleteFigur2.classList.add("level_complete_reveal", "delay4");

	fjernTrykLyde();
	levelCompleteScreen.classList = "";
	levelCompleteScreen.classList.add("unhide");
	viser.classList = "";
	completeReplay.addEventListener("click", replay);
	completeHome.addEventListener("click", home);

	// Aspil Lyd
	gameSound.pause();
	gameSound.currentTime = 0;

	levelCompleteSound.volume = 0.2;
	levelCompleteSound.play();
}
/*--------------------------------------------------- Game Over Skærm Funktioner ---------------------------------------------------*/
function gameOverScreenFn() {
	console.log("Game Over");
	gameOverScreen.classList.add("unhide");
	viser.classList = "";
	gameOverReplay.addEventListener("click", replay);
	gameOverHome.addEventListener("click", home);

	gameSound.pause();
	gameOverSound.play();
}
/*--------------------------------------------------- Game Over Taxa Skærm Funktioner ---------------------------------------------------*/
function taxaScreenFn() {
	taxaScreen.classList.add("unhide");
	viser.classList = "";

	taxaBil.classList.add("taxa_drive");

	taxaReplay.addEventListener("click", replay);
	taxaHome.addEventListener("click", home);

	gameSound.pause();
	taxaSound.play();
}

/*--------------------------------------------------- Mute Knap Fn---------------------------------------------------*/
function mute() {
	if (muted == false) {
		muteAlt();
		muteKnap.classList = "";
		muteKnap.classList.add("muted");
		muted = true;
	} else {
		unMuteAlt();
		muteKnap.classList = "";
		muteKnap.classList.add("unmuted");
		muted = false;
	}
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
	viser.classList.remove("timer");
	viser.removeEventListener("animationend", stopSpillet);
	stopBeer();
	stopSidevogn();
	stopTelefon();
	stopVand();
	if (point == 10) {
		levelCompleteScreen.classList.add("unhide");
	} else {
		gameOverScreenFn();
	}
}
function faceChoice() {
	if (point >= 8 || point == 10) {
		face.classList.add("face3");
		blurBox.classList.add("blur3");
	} else if (point > 5 && point < 8) {
		face.classList.add("face2");
		blurBox.classList.add("blur2");
	} else if (point > 2 && point <= 5) {
		blurBox.classList.add("blur1");
	} else {
		face.classList.add("face1");
	}
}
function addHideAnimation() {
	startScreen.classList.add("hide_kf");
}
function replay() {
	infoScreen.classList = "";
	startScreen.classList = "";
	taxaScreen.classList = "";
	gameOverScreen.classList = "";
	levelCompleteScreen.classList = "";
	viser.classList = "";
	blurBox.classList = "";
	energyBoard.classList = "";
	face.classList = "";

	infoScreen.classList.add("unhide");
	startScreen.classList.add("hide");
	taxaScreen.classList.add("hide");
	gameOverScreen.classList.add("hide");
	levelCompleteScreen.classList.add("hide");

	// Lyde resettes
	resetLyde();

	startGame();
	mute();
}
function home() {
	infoScreen.classList = "";
	startScreen.classList = "";
	taxaScreen.classList = "";
	gameOverScreen.classList = "";
	levelCompleteScreen.classList = "";
	viser.classList = "";
	blurBox.classList = "";
	energyBoard.classList = "";
	face.classList = "";

	infoScreen.classList.add("hide");
	startScreen.classList.add("unhide");
	taxaScreen.classList.add("hide");
	gameOverScreen.classList.add("hide");
	levelCompleteScreen.classList.add("hide");
	loaded();

	resetLyde();
	gameSound.pause();
	mute();
}

function afspilBeerLyd() {
	let randTal = Math.floor(Math.random() * 4) + 1;

	if (randTal == 1) {
		beerSound1.play();
	} else if (randTal == 2) {
		beerSound2.play();
	} else if (randTal == 3) {
		beerSound3.play();
	} else {
		beerSound4.play();
	}
}
function fjernTrykLyde() {
	console.log("Pause");
	beerSound1.pause();
	beerSound1.volume = 0;
	beerSound1.currentTime = 0;

	beerSound2.pause();
	beerSound2.volume = 0;
	beerSound2.currentTime = 0;

	beerSound3.pause();
	beerSound2.volume = 0;
	beerSound3.currentTime = 0;

	beerSound4.pause();
	beerSound4.volume = 0;
	beerSound4.currentTime = 0;

	vandSound1.pause();
	vandSound1.volume = 0;
	vandSound1.currentTime = 0;

	vandSound2.pause();
	vandSound2.volume = 0;
	vandSound2.currentTime = 0;

	vandSound3.pause();
	vandSound3.volume = 0;
	vandSound3.currentTime = 0;
}

function resetLyde() {
	console.log("Pause");
	beerSound1.pause();
	beerSound1.currentTime = 0;

	beerSound2.pause();
	beerSound2.currentTime = 0;

	beerSound3.pause();
	beerSound3.currentTime = 0;

	beerSound4.pause();
	beerSound4.currentTime = 0;

	vandSound1.pause();
	vandSound1.currentTime = 0;

	vandSound2.pause();
	vandSound2.currentTime = 0;

	vandSound3.pause();
	vandSound3.currentTime = 0;

	gameSound.play();
	gameSound.currentTime = 0;

	gameOverSound.pause();
	gameOverSound.currentTime = 0;

	taxaSound.pause();
	taxaSound.currentTime = 0;

	levelCompleteSound.pause();
	levelCompleteSound.currentTime = 0;
}
function muteAlt() {
	beerSound1.volume = 0;
	beerSound2.volume = 0;
	beerSound3.volume = 0;
	beerSound4.volume = 0;
	vandSound1.volume = 0;
	vandSound2.volume = 0;
	vandSound3.volume = 0;

	gameSound.volume = 0;
	gameOverSound.volume = 0;
	taxaSound.volume = 0;
	levelCompleteSound.volume = 0;
}
function unMuteAlt() {
	beerSound1.volume = 1;
	beerSound2.volume = 1;
	beerSound2.volume = 1;
	beerSound4.volume = 1;
	vandSound1.volume = 1;
	vandSound2.volume = 1;
	vandSound3.volume = 1;

	gameSound.volume = 0.25;
	gameOverSound.volume = 1;
	taxaSound.volume = 1;
	levelCompleteSound.volume = 1;
}
