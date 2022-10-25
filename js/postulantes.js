function postulantes() {
    var pos = `
    <div class="postulantes">
        <h1 id="titulo">Conoce las postulantes a ser adoptadas: </h1>
        <button id="boton" onclick="traerdatosapi()"> Ver postulantes </button>
    </div><br><br>
    <div id="contenido"></div>
`;
document.getElementById("centro2").innerHTML = pos;
};