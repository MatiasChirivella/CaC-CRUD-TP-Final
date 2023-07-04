function guardar(){
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
        debilidad: w,
    }

    let url = 'https://matiaschirivella.pythonanywhere.com/pokemon';

    let options = {
        body: JSON.stringify(pokemon),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    }

    fetch(url, options)
    .then(function() {
        alert('Pokemon capturado exitosamente');
        window.location.href = './pokemones.html';
    })

    .catch((error) => {
        alert("No se pudo capturar el nuevo pokemon, mejor suerte la proxima");
        console.error(error);
    })

}