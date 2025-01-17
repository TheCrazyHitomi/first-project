const globalMenu = document.querySelector(".cd-header");

const hamburgers = document.querySelectorAll(".hamburger");
// Si y'a un ou plusieurs .hamburger
if (hamburgers.length > 0) {
	// Itération sur chaque hamburger
	hamburgers.forEach((hamburger) => {
		// gestion d'évènement du clic

		hamburger.addEventListener("click", () => {
			// Set de la class is-active sur hamburger;
			hamburger.classList.toggle("is-active");
			globalMenu.classList.toggle("visible");
		});
	});
}
