function loadDocA(fichero,tipo)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET",fichero,true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    //http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => {  //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(tipo == "xml")
            {
                gestionarFicheroXML(http.responseXML);
            }
            else
            {
                console.log("funciona");
			    gestionarFicheroTXT(http.responseText);
            }
		}})
}
