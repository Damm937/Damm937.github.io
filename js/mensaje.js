/*Cuerpo del mensaje luego del formulario de adopción
 usamos el sweetalert
*/
function mensaje() {
    //La sintaxis es la siguiente: swal(titulo, subtitulo, tipoDeMensaje)
    //swal("Oops!", "Something went wrong on the page!", "success");
    const tit = "Excelente acabas de adoptar una Lombriz! " + 
                "Y si bien sabes que estás haciendo algo por el planeta, " +
                "también deberás saber que descontaremos de tu tarjeta de crédito " +
                "los importes correspondientes a cualquier gasto que se nos ocurra.";

    swal({
        title: "Ya adoptaste!",
        text: tit,
        //podría decir: ya adoptaste a ... fulanita, lombriz seleccionada.
        icon: "success",
        button: "Listo adoptaste!",
        //buttons: ["txt Boton",true],
        //dangerMode: true,
      });
};
/*fin mensaje*/
