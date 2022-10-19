/*Cuerpo de Nosotros*/
function nosotros() {
    var nos = `
    <h1>Desarrolladores de este sitio</h1>
    <h2>Con conocimientos adquiridos en el curso CODO A CODO</h2>
    <p>(usando grid)</p>

    <div class="grid-container" style="justify-content: center;">
        <div class="grid-item">
            <img src="../img/Damian.jpg">
        </div>
        
        <div class="grid-item">
            <img src="../img/yo.png">
        </div>
        
        <div class="grid-item">
        <th>Damián Apellido</th>
  
        </div>
        <div class="grid-item">
        <th>Roberto Benavente</th>
        
        </div>
        <div class="grid-item">
        <td>Quien es y que hace Damian &nbsp;&nbsp;&nbsp;</td>
      
        </div>
        <div class="grid-item">
        <td>Quien es y que hace Roberto </td>
         
        </div>

    </div><br>
    `;
    document.getElementById("centro").innerHTML = nos;
};
/*fin cuerpo Nosotros*/