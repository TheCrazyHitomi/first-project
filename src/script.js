const burger = document.querySelector(".burger");

const burgerMenu = document.createElement("div");
const lineUp = document.createElement("div");
const lineMiddle = document.createElement("div");
const lineDown = document.createElement("div");
// const globalMenu = document.querySelector(".nav");

// console.log(globalMenu);

burgerMenu.appendChild(lineUp);
burgerMenu.appendChild(lineMiddle);
burgerMenu.appendChild(lineDown);

burgerMenu.classList.add("burger-menu");
lineUp.classList.add("line-up");
lineMiddle.classList.add("line-middle");
lineDown.classList.add("line-down");

burger.appendChild(burgerMenu);
const globalMenu = document.querySelector(".nav");

burgerMenu.addEventListener("click", () => {
	if (globalMenu.classList.contains("visible")) {
		globalMenu.classList.remove("visible");
	} else {
		globalMenu.classList.add("visible");
	}
});

console.log(globalMenu);
// burger.appendChild(burgerMenu);
