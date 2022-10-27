# Damm937.github.io
Salvemos las lombrices

Salven a las lombrices es un sistema de adopci�n de lombrices de tierra.
Ud. nos da su dinero, nosotros le asignamos una lombriz en adopci�n.
Tan simple como eso, de esta forma, con su generosa contribuci�n, 
estar� ayudando a salvar el planeta y a nosotros tambi�n...
 
Ver� en el sitio a "Las Postulantes", lombrices factibles de ser adoptadas;
podr� seleccionar la que m�s le guste, la que se ajuste a sus necesidades y
adoptarla. �C�mo?, llenando sus datos en el formulario, y lo m�s importante
los datos de su tarjeta de cr�dito...

Tambi�n ver� en el sitio, una rese�a de quienes somos, como contactarnos y 
algunas preguntas frecuentes. De tener alguna duda, solo nos llama.

Datos T�cnicos:

- El sistema est� preparado para funcionar en una sola p�gina principal; 
todo lo que se ve, todos los puntos de men� y ajustes de p�gina, suceden
por la utilizaci�n de funciones desarrolladas en javascript que modifican
el centro del index.html y permite navegar todo el sitio sin salir de ella.
Solo incrustamos (por ifreme) la cabecera y el pie de la p�gina principal, para 
convinar t�cnicas y que no todo sea javascript. Se ve en la p�gina principal, los
js que podr�an reemplazar los iframe, pero nos pareci� oportuna la combinaci�n.

- Además del sitio gratuito que proporciona GitHub, en donde está alojada la página, 
también la alojamos en otro servidor para verificar las diferencias que pudiesen existir
entre un servidor de pago y otro no; ese subdominio en donde también está alojado el TPO es:

    http://salvenalaslombrices.suseso.net

- Utilizamos la recuperaci�n y muestreo de una API en json, generada por nosotros
y alojada en un servidor externo. Luego de recuperarla con fetch, se muestra tambi�n
incrustando un <div> espec�fico en el cuerpo principal.

- Para que el mensaje del final de la adopci�n se vea bien, utilizamos un frameword especial
SWEETALERT, que permite una mejor visualizaci�n de cualquier mensaje.

- Usamos BOOSTRAP en varios lugares, pero en el formulario de adopci�n es donde se utiliza 
completamente. 

- Para la presentaci�n de las lombrices, usamos un carrusel desarrollado solo con css y js, 
(con boostrap hubiese sido mejor, pero no quisimos abusar de ese framework).

- Tambi�n al final del formulario el sistema permite cambiarle el nombre a la lombriz, eso lo 
logramos utilizando el framework VUE. (aunque en algunos navegadores esté dando problemas...)

- En Preguntas Frecuentes utilizamos el método queySelectorAll() y eventos como el addEvenListener() 
para recuperar el click; también manejamos clases activas para desactivarlas o activarlas según sea 
necesario y mostrar las respuestas a las distintas preguntas. Todo sin Boostrap ni otros frameworks 
que claro, harían la vida mas simple, pero ese no es el objetivo del TPO, según interpretamos.

- Tambi�n incluimos un mail, con mailto, pero con una t�cnica "anti robot buscadores de mails", 
que nos proporcionó el programa NoRobot. para ayudar a combatir el correo no deseado (spam).

- Y una perlita: podr� comunicarse con nosotros por Whatsapp, por intermedio de una burbuja
que est� al pie de la p�gina.


Y nada m�s, hemos priorizado en todo momento la velocidad de proceso, de carga y movimiento
del sitio en general y la utilizaci�n de las herramientas de estudio, sobre quiz�s, la est�tica 
de la p�gina; esperamos que interpreten el proyecto y que sea de su agrado. 

Dami�n y Roberto.
