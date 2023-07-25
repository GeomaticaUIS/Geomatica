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
 document.getElementById("imagen").textContent = objetoRecuperado.RUTA_ORTOMOSAICO;//`${}\\${objetoRecuperado.NOMBRE_ORTOMOSAICO}` ;

 //localStorage.removeItem("proyectoSeleccionado");<a href=' '> </a>

 const servidor =objetoRecuperado.RUTA_HTML //"\\\\servidor\\carpetacompartida";
 const nombreArchivo = objetoRecuperado.ARCHIVO_HTML//"documento.pdf"; 
 const enlace ="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d961.570309301452!2d"+objetoRecuperado.Longitud+"!3d"+objetoRecuperado.Latitud+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1690308813876!5m2!1ses!2sco" ; `${servidor}\\${nombreArchivo}`;
 console.log(enlace)
 // Abrir el enlace en una nueva pestaña o ventana del navegador
 //
 //window.open(enlace, '_blank');
 const iframe =document.getElementById("frame");
 iframe.src = enlace;

 //AIzaSyCQlzGoHdb8eHfu79_QtO6pTpONFlIa3iY

 let map;
 let polygon;

 function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
         center: { lat:objetoRecuperado.Latitud, lng: objetoRecuperado.Longitud}, // Coordenadas para centrar el mapa en el lugar del proyecto
         zoom:18, // Nivel de zoom inicial
        // mapTypeId: 'satellite'
     });

     // Agregar un listener para activar la herramienta de dibujo de polígonos
    //  const drawingManager = new google.maps.drawing.DrawingManager({
    //      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    //      drawingControl: true,
    //      drawingControlOptions: {
    //          position: google.maps.ControlPosition.TOP_CENTER,
    //          drawingModes: [google.maps.drawing.OverlayType.POLYGON],
    //      },
    //  });
    //  drawingManager.setMap(map);

    //  // Agregar un listener para capturar el evento cuando se complete el polígono
    //  google.maps.event.addListener(drawingManager, "polygoncomplete", function (poly) {
    //      polygon = poly;
    //      calcularArea(polygon);
    //  });
 }

 // Función para calcular el área del polígono
 function calcularArea(polygon) {
     const area = google.maps.geometry.spherical.computeArea(polygon.getPath());
     alert(`El área del polígono es de aproximadamente ${area} metros cuadrados.`);
 }