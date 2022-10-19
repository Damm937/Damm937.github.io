function postulantes() {
    var nos = `
    <body>
    <div class="container">
        <h1 id="titulo">¿Quiere conocer las postulantes a ser adoptadas?</h1>
        <button id="boton" onclick="traerDatosAPI()">Ver postulantes</button>
    </div>
    <div id="contenido" ></div>

    <script>
        // lee los datos remotos, usando fetch
        function traerDatosAPI() {
            fetch('https://mocki.io/v1/b3001ccd-c914-4d37-8f04-deb5555da9c6') // API a leer
                    // Cuando ha finalizado la lectura guardo en datos el texto leido:
                    .then(datos => datos.json()) //guarda mediante el método .json()
                    .then(datos => {
                        for(var i=0; i<5; i++) {
                            // copio en #contenido.
                            contenido.innerHTML +=
                                <div class="tarjeta">
                                Postulante nro: ${datos.lombrices[i].id}<br>
                                <img src = "${datos.lombrices[i].imagen}"</img><br><br>
                                Nombre: ${datos.lombrices[i].nombre}<br>
                                Tipo: ${datos.lombrices[i].tipo}<br>
                                Característica: ${datos.lombrices[i].caracteristica}<br>
                                </div>`
                            }
                            document.getElementById('boton').style.display = `none`
                            document.getElementById('titulo').textContent = `Estas son: `
                        
                    
                    .catch (error => {
                       console.log('Ocurrió un error grave', error)
                    })
        
    </script>
</body>`;
document.getElementById("centro").innerHTML = nos;
};