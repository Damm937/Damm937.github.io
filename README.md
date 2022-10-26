# Damm937.github.io
Salvemos las lombrices

Salven a las lombrices es un sistema de adopción de lombrices de tierra.
Ud. nos da su dinero, nosotros le asignamos una lombriz en adopción.
Tan simple como eso, de esta forma, con su generosa contribución, 
estará ayudando a salvar el planeta y a nosotros también...
 
Verá en el sitio a "Las Postulantes", lombrices factibles de ser adoptadas;
podrá seleccionar la que más le guste, la que se ajuste a sus necesidades y
adoptarla. ¿Cómo?, llenando sus datos en el formulario, y lo más importante
los datos de su tarjeta de crédito...

También verá en el sitio, una reseña de quienes somos, como contactarnos y 
algunas preguntas frecuentes. De tener alguna duda, solo nos llama.

Datos Técnicos:
"""""""""""""""
- El sistema está preparado para funcionar en una sola página principal; 
todo lo que se ve, todos los puntos de menú y ajustes de página, suceden
por la utilización de funciones desarrolladas en javascript que modifican
el centro del index.html y permite navegar todo el sitio sin salir de ella.
Solo incrustamos (por ifreme) la cabecera y el pie de la página principal, para 
convinar técnicas y que no todo sea javascript. Se ve en la página principal, los
js que podráan reemplazar los iframe, pero nos pareció oportuna la combinación.

- Utilizamos la recuperación y muestreo de una API en json, generada por nosotros
y alojada en un servidor externo. Luego de recuperarla con fetch, se muestra también
incrustando un <div> específico en el cuerpo principal.

- Para que el mensaje del final de la adopción se vea bien, utilizamos un frameword especial
SWEETALER, que permite una mejor visualización de cualquier mensaje.

- Usamos BOOSTRAP en varios lugares, pero en el formulario de adopción es donde se utiliza 
completamente. 

- Para la presentación de las lombrices, usamos un carrusel desarrollado solo con css y js, 
(con boostrap hubiese sido mejor, pero no quisimos abusar de ese framework).

- También al final del formulario el sistema permite cambiarle el nombre a la lombriz, eso lo 
logramos utilizando el framework VUE. (aunque en algunos navegadores esté dando problemas...)

- En Preguntas Frecuentes utilizamos el método queySelectorAll() y eventos como el addEvenListener() 
para recuperar el click; también manejamos clases activas para desactivarlas o activarlas según sea 
necesario y mostrar las respuestas a las distintas preguntas. Todo sin Boostrap ni otros frameworks 
que claro, harían la vida mas simple, pero ese no es el objetivo del TPO, según interpretamos.

- También incluimos un mail, con mailto, pero con una técnica "anti robot buscadores de mails", 
para ayudar a combatir el correo no deseado (spam).

- Y una perlita: podrá comunicarse con nosotros por Whatsapp, por intermedio de una burbuja
que está al pie de la página.


Y nada más, hemos priorizado en todo momento la velocidad de proceso, de carga y movimiento
del sitio en general y la utilización de las herramientas de estudio, sobre quizás, la estética 
de la página; esperamos que interpreten el proyecto y que sea de su agrado. 

Damián y Roberto.
