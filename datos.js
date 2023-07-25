console.log('vista 2')
// Mostrar los datos en la página proyectoSeleccionado
const dato = localStorage.getItem("proyectoSeleccionado");
const objetoJSONGuardado = localStorage.getItem(dato);
 // Convertir el JSON a un objeto JavaScript usando JSON.parse()
 const objetoRecuperado = JSON.parse(objetoJSONGuardado);
 console.log(objetoRecuperado);
 document.getElementById("codigo").textContent = objetoRecuperado.CODIGO;
 document.getElementById("nombre").textContent = objetoRecuperado.NOMBRE_PROYECTO;
 document.getElementById("fecha").textContent = objetoRecuperado.FECHA_CAPTURA;
 document.getElementById("tecnologia").textContent = objetoRecuperado.TECNOLOGIA;
 document.getElementById("latitud").textContent = objetoRecuperado.Latitud;
 document.getElementById("longitud").textContent = objetoRecuperado.Longitud;
 document.getElementById("descripcion").textContent = objetoRecuperado.DESCRIPCION;
 document.getElementById("area").textContent = objetoRecuperado.AREA;
 document.getElementById("archivo").textContent = objetoRecuperado.ARCHIVO_HTML;
 document.getElementById("imagen").textContent = objetoRecuperado.RUTA_ORTOMOSAICO
 ;

 

 //localStorage.removeItem("proyectoSeleccionado");

 const servidor =objetoRecuperado.RUTA_HTML //"\\\\servidor\\carpetacompartida";
 const nombreArchivo = objetoRecuperado.ARCHIVO_HTML//"documento.pdf";
 const enlace = `${servidor}\\${nombreArchivo}`;
 console.log(enlace)
 // Abrir el enlace en una nueva pestaña o ventana del navegador
 window.open(enlace, '_blank');
 const iframe =document.getElementById("frame");
 iframe.s