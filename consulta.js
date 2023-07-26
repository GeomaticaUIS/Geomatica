console.log('ok');
document.getElementById('contenido').addEventListener('click',obtenerDatos()); 
function obtenerDatos(){
    setTimeout(carga,1000);
    function carga(){
        // document.getElementById('circulo').className='hide'
        document.getElementById('contenido').className='container' 
    }
    console.log("clic en boton");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','metadato.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 &&this.status==200){
            //console.log(this.responseText);
            let datosParseados= JSON.parse(this.responseText);
            console.log(datosParseados);
            let res = document.querySelector('#respuesta');
            res.innerHTML = ''; 
            for(let item of datosParseados){ 
                const myJsonLocal = JSON.stringify(item); 
                localStorage.setItem(item.CODIGO,myJsonLocal);
                //const dato1 = localStorage.getItem(item.CODIGO);
                const obj= item.CODIGO;//JSON.parse(dato1);
                console.log('informacion local storage ',obj)
                res.innerHTML +=`
                <tr>
                        <td>${item.CODIGO}</td>
                        <td>${item.NOMBRE_PROYECTO}</td>
                        <td>${item.FECHA_CAPTURA}</td>
                        <td>${item.TECNOLOGIA}</td>
                        
                        <td><button type="button" id="botonEnviar" onclick="enviarDatos('${item.CODIGO}')" class="waves-effect waves-light btn-large bd light-blue darken-3" >DETALLES</button></td>
              </tr>
                `
            }

        }
        //<td>${item.Latitud}</td>
        // <td>${item.Longitud}</td>
        // <td> <a href=' ${item.RUTA_CARPETA} '>CARPETA</a>
        // </td>
        // <td>${item.AREA}</td> 
        // <td> '<a href="' +${item.NOMBRE_NUBE_PUNTOS}+ '">'Nube puntos'</a>'</td>
        // <td>${item.ARCHIVO_HTML}</td>
        // localStorage.setItem("item",myJsonLocal);
        // var datosStorage = localStorage.getItem("item");
        // alert(obj);
    }
}

function enviarDatos(get) {
    // Obtener los datos de la fila desde los atributos data-*
    console.log('clic btn',get);
    const dato1 = localStorage.setItem("proyectoSeleccionado",get);
    //var cambio = JSON.parse(dato1);
    //console.log(cambio)
    
    // Redireccionar a la otra vista HTML
    window.location.href = "datos.html";
    // Opcional: Limpiar el dato del localStorage después de usarlo (si es necesario)
    
    
} 

function mostrarDetalles(event) {
    console.log("Hola")
    const datosCompletos = JSON.parse(event.target.dataset.datos);
    console.log("Datos completos:", datosCompletos);

//     Guardar los datos en el Local Storage para accederlos desde la página "datos.html"
    localStorage.setItem('datosSeleccionados', JSON.stringify(datosCompletos));

//     Redireccionar a la página "datos.html" para mostrar los detalles de los datos seleccionados
    console.log("Redireccionando a 'datos.html'...");
    //window.location.href = 'datos.html';
}
 
// FILTRO

const tabla = document.getElementById('miTabla').getElementsByTagName('tbody')[0].getElementsByTagName('tr');

// Para que tome las tildes
function removeDiacritics(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


function filtrarTabla() {

    const filtroCodigo = removeDiacritics(document.getElementById('filtroCodigo').value.toLowerCase());
    const filtroNombre = removeDiacritics(document.getElementById('filtroNombre').value.toLowerCase());
    const filtroFecha = removeDiacritics(document.getElementById('filtroFecha').value.toLowerCase());
    const filtroTecnologia = removeDiacritics(document.getElementById('filtroTecnologia').value.toLowerCase());


    for (let i = 0; i < tabla.length; i++) {
        const celdaCodigo = tabla[i].getElementsByTagName('td')[0];
        const celdaNombre = tabla[i].getElementsByTagName('td')[1];
        const celdaFecha = tabla[i].getElementsByTagName('td')[2];
        const celdaTecnologia = tabla[i].getElementsByTagName('td')[3];

        const textoCodigo = removeDiacritics(celdaCodigo.textContent.toLowerCase());
        const textoNombre = removeDiacritics(celdaNombre.textContent.toLowerCase());
        const textoFecha = removeDiacritics(celdaFecha.textContent.toLowerCase());
        const textoTecnologia = removeDiacritics(celdaTecnologia.textContent.toLowerCase());

        if (
            textoCodigo.indexOf(filtroCodigo) > -1 &&
            textoNombre.indexOf(filtroNombre) > -1 &&
            textoFecha.indexOf(filtroFecha) > -1 &&
            textoTecnologia.indexOf(filtroTecnologia) > -1
        ) {
            tabla[i].style.display = '';
        } else {
            tabla[i].style.display = 'none';
        }
    }
}

document.getElementById('filtroCodigo').addEventListener('keyup', filtrarTabla);
document.getElementById('filtroNombre').addEventListener('keyup', filtrarTabla);
document.getElementById('filtroFecha').addEventListener('keyup', filtrarTabla);
document.getElementById('filtroTecnologia').addEventListener('keyup', filtrarTabla);