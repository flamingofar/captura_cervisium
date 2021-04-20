/** @format */

window.addEventListener("load", loaded);

function loaded() {
	console.log("loaded");
	document.querySelector("#vand_container").classList.add("rotate_arm", "pos6");
	document.querySelector("#beer_container").classList.add("rotate_arm", "pos4");

	// Vand Animationer
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
	document
		.querySelector("#vand_sprite")
		.addEventListener("animationend", resetVand);

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
// Vand Funktioner
function clickHandlerVand() {
	document
		.querySelector("#vand_container")
		.removeEventListener("mousedown", clickHandlerVand);
	document.querySelector("#vand_container").classList.add("pause");
	document.querySelector("#vand_sprite").classList.add("blow_out");
	document.querySelector("#vand_container").classList.remove("rotate_arm");
}
function resetVand() {
	document.querySelector("#vand_container").classList.remove("rotate_arm");
	document.querySelector("#vand_sprite").classList.remove("blow_out");
	document.querySelector("#vand_container").classList.remove("pause");
	document.querySelector("#vand_container").classList.remove("pos6");

	document.querySelector("#vand_container").classList.add("rotate_arm", "pos1");
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
}

function resetAnimationDoneVand() {
	document.querySelector("#vand_sprite").classList.remove("blow_out");
	document.querySelector("#vand_container").classList.remove("pause");
	document.querySelector("#vand_container").classList.remove("pos6");
	document.querySelector("#vand_container").classList.add("pos2");
	document
		.querySelector("#vand_container")
		.addEventListener("mousedown", clickHandlerVand);
}

// Fadøl Funktioner
function clickHandlerBeer() {
	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
	document.querySelector("#beer_sprite").classList.add("fade_out");
	document.querySelector("#beer_container").classList.add("pause");
	document.querySelector("#beer_container").classList.remove("rotate_arm");
}
function resetBeer() {
	document.querySelector("#beer_container").classList.remove("rotate_arm");
	document.querySelector("#beer_sprite").classList.remove("fade_out");
	document.querySelector("#beer_container").classList.remove("pause");
	document.querySelector("#beer_container").classList.remove("pos4");
	document.querySelector("#beer_container").classList.add("rotate_arm", "pos8");

	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
}
function resetAnimationDoneBeer() {
	document.querySelector("#beer_sprite").classList.remove("fade_out");
	document.querySelector("#beer_container").classList.remove("pause");
	document.querySelector("#beer_container").classList.remove("pos4");
	document.querySelector("#beer_container").classList.add("pos10");

	document
		.querySelector("#beer_container")
		.addEventListener("mousedown", clickHandlerBeer);
}
