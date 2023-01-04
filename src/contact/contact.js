var modalContainer = document.createElement("div");
modalContainer.setAttribute("id", "modal");

var customBox = document.createElement("div");
customBox.className = "custom-box";

// Affichage boîte de confirmation
document
	.getElementById("custom-alert-box-button")
	.addEventListener("click", function () {
		customBox.innerHTML = "<p>Votre message a été envoyé avec succés.</p>";
		customBox.innerHTML += '<button id="modal-close">OK</button>';
		modalShow();
	});

function modalShow() {
	modalContainer.appendChild(customBox);
	document.body.appendChild(modalContainer);
}
document.getElementById("modal-close").addEventListener("click", function () {
	modalClose();
});

function modalClose() {
	while (modalContainer.hasChildNodes()) {
		modalContainer.removeChild(modalContainer.firstChild);
	}
	document.body.removeChild(modalContainer);
}
// if (document.getElementById("modal-confirm")) {
// 	document
// 		.getElementById("modal-confirm")
// 		.addEventListener("click", function () {
// 			console.log("Confirmé !");
// 			modalClose();
// 		});
// }

// 	} else if (document.getElementById("modal-submit")) {
// 		document
// 			.getElementById("modal-submit")
// 			.addEventListener("click", function () {
// 				console.log(document.getElementById("modal-prompt").value);
// 				modalClose();
// 			});
// 	}
// }

// function modalClose() {
// 	while (modalContainer.hasChildNodes()) {
// 		modalContainer.removeChild(modalContainer.firstChild);
// 	}
// 	document.body.removeChild(modalContainer);
// }
