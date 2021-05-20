function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("main");
	let libros = xmlDoc.getElementsByClassName("libro");
	
for (let i = 0; i < libros.length; i++) {
		capaVacia.innerHTML = "<div id='fila'>" + libros[i].textContent + "</div>";
	}
	
}

loadDocA("libros.xml","xml");
