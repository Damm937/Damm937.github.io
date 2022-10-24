/* reemplaza todo el contenido del id: cuerpo en 
el html index.html.
Carga una variable con lo que será reemplazado y luego recupera
el elemento con getelementById, utilizando el id: cuerpo -ver en
el html- y lo reemplaza por el contenido de la variable con innerHTML.
*/
//
/*Cuerpo de Inicio*/
function inicio() {
    var ini = `
    <div class="jsinicio">
        <ul style="list-style: none">
            <li>
                <img src="../img/02.png">
                <h3>Algunas curiosidades sobre la famosa LOMBRIZ DE TIERRA</h3>
                <p align="left">La lombriz de tierra, de color gris rojizo, es un animal familiar para todo aquel
                que tenga un jardín o una caña de pescar. Es oriunda de Europa, pero en la
                actualidad abunda también en Norteamérica y en Asia occidental.<br>
                Aunque por lo general apenas mide 7 u 8 centímetros, se sabe que algunos
                miembros de la especie alcanzan hasta 35 centímetros de longitud con el cuerpo
                enrollado.<br> 
                El cuerpo de la lombriz de tierra está formado por segmentos llamados
                anillos o metámeros. Estos segmentos están recubiertos de sedas, o pequeñas
                cerdas, que la lombriz usa para remover y escarbar la tierra.
                </p>
            </li>
            <br><br><br><br><br><br>
            <li>
                <img src="../img/11.jpg" align="right">
                <h3 align="right" style="margin-right: 50px">Lombriz de tierra, <br>el animal más importante del planeta</h3>
                <p align="right">
                De acuerdo a un trabajo realizado por docentes de la universidad de Madrid, 
                en España, la lombriz de tierra es el mayor sustento de otros animales y 
                tiene una relevancia implícita que la cataloga como “ingenieros del ecosistema”.
                </p>
            </li>
        </ul>
    </div>
    <br><br><br><br><br><br>
    <article id="centro2">CENTRO2</article>
    <br>
    `;
    document.getElementById("centro").innerHTML = ini;
    postulantes();
};

/*fin*/