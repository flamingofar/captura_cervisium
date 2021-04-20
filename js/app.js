/** @format */

window.addEventListener("load", loaded);

function loaded() {
	console.log("loaded");

	// Vand Animationer
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
	document
		.querySelector("#vand_sprite")
		.addEventListener("animationend", resetVand);
	document
		.querySelector("#vand_sprite")
		.addEventListener("animationiteration", resetVand);
	document
		.querySelector("#vand_container")
		.addEventListener("animationiteration", resetAnimationDoneVand);

	// Fadøl Animationer
	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
	document
		.querySelector("#beer_sprite")
		.addEventListener("animationend", resetBeer);
	document
		.querySelector("#beer_container")
		.addEventListener("animationiteration", resetAnimationDoneBeer);
}

function clickHandlerVand() {
	document.querySelector("#vand_sprite").classList.add("blow_out");
	document.querySelector("#vand_container").classList.add("pause");
}
function resetVand() {
	document.querySelector("#vand_sprite").classList.remove("blow_out");
	document.querySelector("#vand_container").classList.remove("pause");
	document.querySelector("#vand_container").classList.remove("pos6");
	document.querySelector("#vand_container").classList.add("pos1");
}

function resetAnimationDoneVand() {
	document.querySelector("#vand_sprite").classList.remove("fade_out");
	document.querySelector("#vand_container").classList.remove("pause");
	document.querySelector("#vand_container").classList.remove("pos6");
	document.querySelector("#vand_container").classList.add("pos2");
}
function clickHandlerBeer() {
	document.querySelector("#beer_sprite").classList.add("fade_out");
	document.querySelector("#beer_container").classList.add("pause");
}
function resetBeer() {
	document.querySelector("#beer_sprite").classList.remove("fade_out");
	document.querySelector("#beer_container").classList.remove("pause");
	document.querySelector("#beer_container").classList.remove("pos4");
	document.querySelector("#beer_container").classList.add("pos8");
}
function resetAnimationDoneBeer() {
	document.querySelector("#beer_sprite").classList.remove("fade_out");
	document.querySelector("#beer_container").classList.remove("pause");
	document.querySelector("#beer_container").classList.remove("pos4");
	document.querySelector("#beer_container").classList.add("pos10");
}
