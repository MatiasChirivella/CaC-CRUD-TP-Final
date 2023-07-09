function mostrarCrearUsuario() {
    let usuario = document.getElementById("maestroPokemon");
    let usuarioNuevo = document.getElementById("nuevoMaestroPokemon");

    if (usuario.style.display === "block" && usuarioNuevo.style.display === "none") {
        usuario.style.display = "none"; 
        usuarioNuevo.style.display = "block";
      } else {
        usuario.style.display = "block";
        usuarioNuevo.style.display = "none";
      }
}

function usuarioNuevo(){
    let nombreUsuarioNuevo = document.getElementById("nuevoNombreUsuario").value;
    let claveUsuarioNuevo = document.getElementById("nuevaClaveUsuario").value;

    let nuevoUsuario = {
        nombre: nombreUsuarioNuevo,
        clave: claveUsuarioNuevo,
    }

    let url = 'https://matiaschirivella.pythonanywhere.com/usuario';

    let options = {
        body: JSON.stringify(nuevoUsuario),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    }
    if (nombreUsuarioNuevo != "" && claveUsuarioNuevo != ""){
        fetch(url, options)
        .then(function() {
            alert('Felicidades, ahora sos un Maestro Pokemon');
            window.location.href = './index.html';
        })

        .catch((error) => {
            alert('Por ahora no puedes convertirte en Maestro Pokemon, vuelve a intentarlo mas tarde');
            console.error(error);
        })
    }
    else {
        alert("Escribe un usuario y contraseña validos");
    }

}

function usuarioAcceder() {
    let usuarioIngresado = document.getElementById("nombreUsuario").value;
    let claveIngresada = document.getElementById("claveUsuario").value;

    var valor = document.getElementById("nombreUsuario").value;
    localStorage.setItem("valor", valor);

    let url = 'https://matiaschirivella.pythonanywhere.com/usuarios';

    fetch(url)
    .then(response => response.json())
    .then(datosJson => {
        for (var i = 0; i < datosJson.length; i++) {
          if (datosJson[i] && datosJson[i]['clave']) { // Verificar si el elemento y la propiedad existen
            var clave = String(datosJson[i]['clave']);
            var usuario = String(datosJson[i]["nombre"]);
    
            if (usuarioIngresado === usuario && claveIngresada === clave) {
              window.location = "pokemones.html";
              return; // Salir del bucle si se encuentra una coincidencia
            }
          }
        }
        // Si se llega a este punto, no se encontró ninguna coincidencia
        alert("El usuario y contraseña son incorrectos");
      })

    .catch((error) => {
        alert("Ocurrió un error al obtener los datos");
        console.error(error);
    })
  };




