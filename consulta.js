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

document.addEventListener("DOMContentLoaded", function() {
    const totalPages = 10; // Reemplaza este valor con la cantidad total de páginas que tengas
  
    // Función para generar los elementos de paginación
    function generatePagination(totalPages) {
      const paginationContainer = document.getElementById("pagination");
      paginationContainer.innerHTML = ""; // Limpiamos el contenido previo
  
      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li"); 
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = i;
  
        // Añadimos la clase "active" al primer elemento de paginación
        if (i === 1) {
          li.classList.add("active");
        }
  
        li.classList.add("waves-effect");
        li.appendChild(link);
        paginationContainer.appendChild(li);
      }
    }
  
    generatePagination(totalPages);
  
    // Evento click para cambiar de página
    document.getElementById("pagination").addEventListener("click", function(event) {
      event.preventDefault();
  
      if (event.target.tagName === "A") {
        const paginationItems = this.querySelectorAll("li");
        paginationItems.forEach((item) => item.classList.remove("active"));
  
        const clickedItem = event.target.parentElement;
        clickedItem.classList.add("active");
      }
    });
  });
  
    
// FILTRO
const tabla = document.getElementById('miTabla').getElementsByTagName('tbody')[0].getElementsByTagName('tr');

// Para que tome las tildes
function removeDiacritics(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


function filtrarTabla() {

    const buscar= removeDiacritics(document.getElementById('search').value.toLowerCase());
  
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
            textoCodigo.indexOf(buscar) > -1 ||
            textoNombre.indexOf(buscar) > -1 ||
            textoFecha.indexOf(buscar) > -1 ||
            textoTecnologia.indexOf(buscar) > -1
        ) {
            tabla[i].style.display = '';
        } else {
            tabla[i].style.display = 'none';
        }
    }
}
document.getElementById('search').addEventListener('keyup', filtrarTabla); 


//Borrar input con boton

document.addEventListener('DOMContentLoaded', function() {
  var clearSearchIcon = document.getElementById('clear-search');
  var searchInput = document.getElementById('search');
  
  clearSearchIcon.addEventListener('click', function() {
    // Borrar el contenido del campo de búsqueda
    searchInput.value = '';
    
    // Mostrar todas las filas de la tabla
    var tableRows = document.querySelectorAll('#miTabla tbody tr');
    tableRows.forEach(function(row) {
      row.style.display = '';
    });
  });
});




    // Desplegador de filas
    // const tablahide = document.getElementById('miTabla').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    // const btnDesplegar = document.getElementById('pagination');
    // const rowsToShow = 2; // Change this number to the desired number of rows to show/hide
    // let currentRowsToShow = rowsToShow;


    // function showHideRows() {
    // for (let i = rowsToShow; i < tablahide.length; i++) {
    //     if (i >= currentRowsToShow) {
    //     tablahide[i].style.display = 'none';
    //     } else {
    //     tablahide[i].style.display = '';
    //     }
    // }
    // }

    // document.addEventListener('DOMContentLoaded', function() {
    //     // Llama a tu función aquí
    //     showHideRows();
    //   });
    

    // btnDesplegar.addEventListener('click', () => {
    //     for (let i = rowsToShow; i < tabla.length; i++) {
    //         if (tablahide[i].style.display === 'none') {
    //             tablahide[i].style.display = '';
                
    //         } else {
    //             tablahide[i].style.display = 'none';
                               
    //         }
    //     }
    //     });