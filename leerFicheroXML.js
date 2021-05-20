function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("main");
	let libros = xmlDoc.querySelectorAll("libro");
	
for (let i = 0; i < libros.length; i++) {
	capaVacia.innerHTML += "<div class='fila'>" + 
		"<div class = 'columna'>" + libros[i].querySelector("ISBN").textContent + "</div>" +
		"<div class = 'columna'>" + libros[i].querySelector("titulo").textContent + "</div>" +
		"<div class = 'columna'>" + libros[i].querySelector("nivelProfundidad").textContent + "</div>" +
		"<div class = 'columna'>" + libros[i].querySelector("editorial").textContent + "</div>" +
		"<div class = 'columna'>" + libros[i].querySelector("fechaPublicacion").textContent + "</div>" +
		"<div class = 'columna'>" + libros[i].querySelector("paginaWeb").textContent + "</div>" +
		"<div class = 'columna'>" + libros[i].querySelector("precio").textContent + "</div>" +
	+ "</div>";

}
	
}

loadDocA("libros.xml","xml");
