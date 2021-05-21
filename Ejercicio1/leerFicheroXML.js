function gestionarFicheroXML(xmlDoc) {
	let capaVacia = document.querySelector("main");
	let libros = xmlDoc.querySelectorAll("libro");
	let librerias = xmlDoc.querySelectorAll("libreria");

	for (let j = 0; j < librerias.length; j++) {


		for (let i = 0; i < libros.length; i++) {
			capaVacia.innerHTML += "<div class='fila'>" +
				"<div class = 'columna'>" + libros[i].querySelector("ISBN").textContent + "</div>" +
				"<div class = 'columna'>" + libros[i].querySelector("titulo").textContent + "</div>" +
				"<div class = 'columna'>" + libros[i].querySelector("nivelProfundidad").textContent + "</div>" +
				"<div class = 'columna'>" + libros[i].querySelector("editorial").textContent + "</div>" +
				"<div class = 'columna'>" + libros[i].querySelector("fechaPublicacion").textContent + "</div>" +
				"<div class = 'columna'>" + libros[i].querySelector("paginaWeb").textContent + "</div>" +
				"<div class = 'columna' id = 'precio'>" + libros[i].querySelector("precio").textContent + "</div>" +
				+ "</div>";

		}
	}

}

loadDocA("libros.xml", "xml");
