/*Cuerpo de Las Lombrices

    aqui un carruserl que muestre por lo menos 4 lombrices
    

*/
function laslombrices() {
    var vlom = `
    <div centro style = "display: flex; flex-flow: row nowrap; justify-content: center; align-items: center;">
        <div class="carrousel">
            <div class="grande">
                <img class="img" src="img/carrusel/05.jpg" alt="Imagen 1">
                <img class="img" src="img/carrusel/07.jpg" alt="Imagen 2">
                <img class="img" src="img/carrusel/09.jpg" alt="Imagen 3">
                <img class="img" src="img/carrusel/12.jpg" alt="Imagen 4">
                <img class="img" src="img/carrusel/13.jpg" alt="Imagen 5">
            </div>
            <ul class="puntos">
                <li class="punto activo"></li>
                <li class="punto"></li>
                <li class="punto"></li>
                <li class="punto"></li>
                <li class="punto"></li>
            </ul>
        </div>
    </div>    
`;
    document.getElementById("centro").innerHTML = vlom;
};
/*fin cuerpo Nosotros*/