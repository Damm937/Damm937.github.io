'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')
const img       = document.querySelectorAll('.img')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -20;

        // MOVEMOS el grande
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')
    })
})
//
img.forEach( (cadaImg , n )=> {
    img[n].addEventListener('click',()=>{
        window.alert("Seleccionaste la lombriz nro: " + (n + 1));
        `<script src="adopcion()"></script>`;
    })
})