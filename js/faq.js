        /*Hemos utilizado el método querySelectorAll() para devolver una colección 
        de elementos que coinciden con el nombre de clase pasado a este método y 
        almacenar estos elementos en respuestas variables. */

        //let answers = document.querySelectorAll(".accordion");

        /*Utilizamos un método forEach() para llamar a la función sobre cada 
        elemento de la variable de respuesta . Ahora, especifique un detector de 
        eventos addEventListener() , cuando se hace clic en el elemento. Verificará 
        si el evento tiene una clase activa usando la propiedad classList que devuelve 
        los nombres de todas las clases asociadas con ese elemento o evento.
        
        Si tiene la clase activa, eso significa que está mostrando la respuesta o 
        el acordeón está en un estado expandido, entonces eliminamos la clase activa 
        de ese evento para ocultar el contenido. Si no tiene una clase activa, eso significa 
        que el acordeón está en estado colapsado, entonces agregaremos una clase activa.*/
        
        //answers.forEach((event) => { ...

/*Cuerpo de Preguntas frecuentes*/
function faq() {
    var vfaq = `
    <h2 style="text-align:center">Preguntas frecuentes...</h2>
    <br>
    <div class="layout">
        <div class="accordion">
            <div class="accordion__question">
                <p>¿PUEDO DARME DE BAJA?</p>
            </div>
            <div class="accordion__answer">
                <p>La verdad, no. Una vez ingresado al proyecto es imposible darse de baja, 
                   sobre todo a su tarjeta de crédito y sus datos personales</p>
            </div>
        </div><br>
        <div class="accordion">
            <div class="accordion__question">
                <p>¿QUE NIVEL DE SEGURIDAD TIENEN MIS DATOS?</p>
            </div>
            <div class="accordion__answer">
                <p>Ninguno, utilizamos una base de datos completamente pública y sus datos 
                   están expuestos en internet 24/7.</p>
            </div>
        </div><br>
        <div class="accordion">
            <div class="accordion__question">
                <p>¿COMO MONITOREO A MI LOMBRIZ? ¿DONDE ESTÁ?</p>
            </div>
            <div class="accordion__answer">
                <p>Cada lombriz tiene insertado un dispositivo GPS, lo que le permite saber 
                    en todo momento su ubicación física. Eso sí, deberá pagar un abono extra 
                    cada vez que quiera localizarla.</p>
            </div>
        </div><br>
        <div class="accordion">
            <div class="accordion__question">
                <p>¿COMO MONITOREO LA SALUD DE MI LOMBRIZ?</p>
            </div>
            <div class="accordion__answer">
                <p>Cada Lombriz antes de ser postulada para su adopción, es chequeada por los 
                    mejores profesionales que cuentan con equipos de última generación, los cuales 
                    certifican la buena salud de su lombriz. Pero si en el transcurso del tiempo, 
                    cuando esta ya forma parte de un compost, las porquerías que coma y por donde 
                    se arrastre ya son cosa de cada lombriz y no nos hacemos responsables por su salud. 
                    Eso sí, se le seguirá descontando de su tarjeta de crédito (de por vida, de por "su" 
                    vida), el costo de la adopción.</p>
            </div>
        </div><br>   
        <div class="accordion">
            <div class="accordion__question">
                <p>¿CUALES SON LOS REQUISITOS PARA PODER ADOPTAR?</p>
            </div>
            <div class="accordion__answer">
                <p>Solo debe tener un requisito fundamental y específico: tener dinero disponible 
                en su tarjeta de crédito.</p>
            </div>
        </div><br>    
         <div class="accordion">
            <div class="accordion__question">
                <p>¿CUANTO TIEMPO ES NECESARIO PARA ADOPTAR?</p>
            </div>
            <div class="accordion__answer">
                <p>El tiempo que nos tome analizar sus finanzas.</p>
            </div>
        </div><br>    
   </div><br><br><br>
    `;
    document.getElementById("centro").innerHTML = vfaq;
        
    let answers = document.querySelectorAll(".accordion");
    answers.forEach((event) => {
            event.addEventListener('click',() => {
                if(event.classList.contains("active")) {
                    event.classList.remove("active");
                }
                else{
                    event.classList.add("active");
            }
        })
    });
};
/*fin cuerpo vaq*/