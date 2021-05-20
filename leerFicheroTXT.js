
function  gestionarFicheroTXT(txt)
{
  let capaVacia = document.querySelector("main");
  let lineas = txt.split("-");
  let emisor = lineas[1];
  let alineado = "derecho";
  
  for (let i = 0; i < lineas.length; i+=3){
    if (lineas[i+1] == emisor){
      alineado = "derecho";
    }
    else{
      alineado = "izquierdo";
    }
    capaVacia.innerHTML += $"<div class='{alineado}'>" + lineas[i+2] + "</div>";
  }
}

loadLDocA("test.txt","txt");

