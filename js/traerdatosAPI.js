function traerDatosAPI() {
    // lee los datos remotos, usando fetch
    fetch('https://mocki.io/v1/b3001ccd-c914-4d37-8f04-deb5555da9c6')
        // Cuando ha finalizado la lectura guardo en datos el texto leido:
        .then(datos => datos.json()) //guarda mediante el método .json()
        .then(datos => {
            for(var i=0; i<5; i++) {
                // copio en #contenido.
                contenido.innerHTML += `
                    <div class="tarjeta">
                    Postulante nro: ${datos.lombrices[i].id}<br><br>
                    <img src = "${datos.lombrices[i].imagen}"</img><br><br>
                    Nombre: ${datos.lombrices[i].nombre}<br>
                    Tipo: ${datos.lombrices[i].tipo}<br>
                    Característica: ${datos.lombrices[i].caracteristica}<br>
                    </div>`
                }
                document.getElementById('boton').style.display = `none`,
                document.getElementById('titulo').textContent = `Estas son: `
            .catch (error => {
                console.log('Ocurrió un error grave', error)
            })
        })
};