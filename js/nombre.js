// al final no usé esa función
// creo en el index un nuevo script al final de todo y le 
// meto alli lo que puse en adopción js

// lo uso directamente en adopcion.js

function nombre() {
//Creamos nuestra aplicacion.
    const miAplicacion = Vue.createApp({
        //DATOS de la aplicacion
        data() {
            // Definimos que devuelve nuestra aplicación
            return { kilometros: 0,
                        metros: 0 }
        },
        // Defino watch:
        watch: {
            kilometros(valor) {
                this.kilometros = valor
                this.metros = valor * 1000
                },
            metros(valor) {
                this.kilometros = valor / 1000
                this.metros = valor
                }
            }
    }).mount("#nombre")
}