function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("main");
	let libros = xmlDoc.getElementsByClassName("libro");
	
	for (let libro in libros) {
		console.log(libro.nombre);
	}
	
}

loadDocA("libros.xml","xml");
