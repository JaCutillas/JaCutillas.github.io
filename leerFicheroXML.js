function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("main");
	let libros = xmlDoc.getElementsByClassName("libro");
	
	for (const libro in libros) {
		capaVacia.innerHTML += "<div id= "">"
	}
	
}

loadDocA("libros.xml","xml");