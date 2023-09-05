console.log('vista 2')
// Mostrar los datos en la página proyectoSeleccionado
const dato = localStorage.getItem("proyectoSeleccionado");
const objetoJSONGuardado = localStorage.getItem(dato);
 // Convertir el JSON a un objeto JavaScript usando JSON.parse()
 const objetoRecuperado = JSON.parse(objetoJSONGuardado);
 console.log(objetoRecuperado);
 document.getElementById("codigo").textContent = objetoRecuperado.CODIGO; 
 document.getElementById("nombre").textContent =objetoRecuperado.NOMBRE_PROYECTO;
 document.getElementById("fecha").textContent = objetoRecuperado.FECHA_CAPTURA;
 document.getElementById("tecnologia").textContent = objetoRecuperado.TECNOLOGIA;
 document.getElementById("latitud").textContent = objetoRecuperado.Latitud+"°";
 document.getElementById("longitud").textContent = objetoRecuperado.Longitud+"°";
 document.getElementById("descripcion").textContent = objetoRecuperado.DESCRIPCION;
 document.getElementById("area").textContent = objetoRecuperado.AREA;
 //localStorage.removeItem("proyectoSeleccionado");<a href=' '> </a>

 const servidor =objetoRecuperado.RUTA_CARPETA_NUBE_PUNTOS; //"\\\\servidor\\carpetacompartida";
 const LINK= `${servidor}`;
 const HTML = objetoRecuperado.RUTA_HTML;
 console.log(" -html ", HTML)
 const enlaceDescargar = document.createElement('a');
 enlaceDescargar.textContent = 'Descarga la Nube de puntos';
 enlaceDescargar.addEventListener('click', function(){
    window.open(servidor,'_blank');
 });
 const spans =document.getElementById("archivoMosaico");
 spans.appendChild(enlaceDescargar);


 const servidorMosaico =objetoRecuperado.RUTA_ORTOMOSAICO; //"\\\\servidor\\carpetacompartida";
 const LinkMosaico= `${servidorMosaico}`;//\\${nombreArchivoMosaico}
 const enlaceDescargarMosaico = document.createElement('a');
 enlaceDescargarMosaico.textContent = 'Descarga el ORTOMOSAICO'; 
 enlaceDescargarMosaico.addEventListener('click', function(){
    window.open(servidorMosaico,'_blank');
 });
 const spansLaz =document.getElementById("archivoLaz");
 spansLaz.appendChild(enlaceDescargarMosaico);

 
 const enlaceMapa ="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d961.570309301452!2d"+objetoRecuperado.Longitud+"!3d"+objetoRecuperado.Latitud+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1690308813876!5m2!1ses!2sco" ;// `${servidor}\\${nombreArchivo}`;
 console.log(enlaceDescargar.download)
 // Abrir el enlace en una nueva pestaña o ventana del navegador
 //
 //window.open(enlace, '_blank');
//  const iframe =document.getElementById("frame");
//  iframe.src = enlaceMapa;


 const iframeVisor =document.getElementById("visor");
 iframeVisor.src = HTML;

 //AIzaSyCQlzGoHdb8eHfu79_QtO6pTpONFlIa3iY
//  const KML = objetoRecuperado.KML;
//  function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: +objetoRecuperado.Latitud, lng: objetoRecuperado.Longitud }, // Coordenadas iniciales del mapa
//         zoom: 15 // Nivel de zoom inicial
//     });

//     // Cargar el archivo KML
//     var kmlLayer = new google.maps.KmlLayer({
//         url: KML, // Reemplaza con la URL de tu archivo KML
//         map: map
//     });
// }