//console.log(location.search)

let argsUrl = location.search.substring(1).split('&'); //substring() elimina la posicion que le digamos
console.log(argsUrl)

let data = [];
for(let i =0; i < argsUrl.length; i++){ //cuando tenemos un array de arrays es una matriz
    data[i] = argsUrl[i].split('=');
}
console.log(data);

document.getElementById("id").value = decodeURIComponent(data[0][1]);
document.getElementById("nombre").value = decodeURIComponent(data[1][1]);
document.getElementById("imagen").value = decodeURIComponent(data[2][1]);
document.getElementById("descripcion").value = decodeURIComponent(data[3][1]);
document.getElementById("tipo").value = decodeURIComponent(data[4][1]);
document.getElementById("habilidad").value = decodeURIComponent(data[5][1]);
document.getElementById("debilidad").value = decodeURIComponent(data[6][1]);


function modificar(){
    //Actualizar el producto en la BBDD
    let id = document.getElementById("id").value;
    let n = document.getElementById("nombre").value;
    let i = document.getElementById("imagen").value;
    let d = document.getElementById("descripcion").value;
    let t = document.getElementById("tipo").value;
    let h = document.getElementById("habilidad").value;
    let w = document.getElementById("debilidad").value;
    
    let pokemon = {
        nombre: n,
        imagen: i,
        descripcion: d,
        tipo: t,
        habilidad: h,
        debilidad: w
    };

    let url = 'https://matiaschirivella.pythonanywhere.com/pokemon/' + id;

    let options = {
        body: JSON.stringify(pokemon),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(url, options)

    .then(function(){
        alert("Felicidades su pokemos ha evolucionado");
        window.location.href = './pokemones.html';
    })

    .catch(err => {
        alert('Su pokemon sigue igual');
        console.error(err)
    })

}

let id = document.getElementById("id").value;
    let n = document.getElementById("nombre").value;
    let i = document.getElementById("imagen").value;
    let d = document.getElementById("descripcion").value;
    let t = document.getElementById("tipo").value;
    let h = document.getElementById("habilidad").value;
    let w = document.getElementById("debilidad").value;
    
var seccionImagen = document.getElementById("imagenPokemon");

// Crear el elemento img
var imgElement = document.createElement("img");

// Configurar los atributos de la imagen
imgElement.src = i;
imgElement.alt = "Pokemon no encontrado";
imgElement.width = 200;
imgElement.height = 200;


// Insertar la imagen en el documento
seccionImagen.appendChild(imgElement);
