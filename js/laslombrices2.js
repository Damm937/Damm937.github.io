/*
    una convinación entre incrustar una sección del html
    y una página completa mediante iframe aqui mismo.
    Y además un boton que dispara otro js (el formulario) 
    que reemplaza al div 'centro' del html principal.
*/
function laslombrices2() {
    var vlom = `
    <h3>Seleccione la lombriz que más le agrade y luego <br>complete 
    el formulario para finalizar su trámite de adopción:</h3>
    <br>
        <button type="button" class="btn btn-primary" onclick="javascript:adopcion();">Formulario de adpción</button>
    <br><br>
    <iframe class="iframe-03" src="carrusel.html" scrolling="no"></iframe>
`;
    document.getElementById("centro").innerHTML = vlom;
};
/*fin cuerpo laslombrices2*/