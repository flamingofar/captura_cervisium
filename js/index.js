/** @format */

const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#menu_close");
const menu = document.querySelector("#menu");

window.addEventListener("load", sidenVises);

function sidenVises() {
	menuBtn.addEventListener("click", openMenu);
}

function openMenu() {
	menuBtn.classList.add("hide");
	menu.classList.add("open");

	closeBtn.addEventListener("click", closeMenu);
}

function closeMenu() {
	closeBtn.removeEventListener("click", closeMenu);
	menu.classList = "";
	menuBtn.classList.remove("hide");
}
