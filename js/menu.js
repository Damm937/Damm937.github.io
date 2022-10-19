function menu() {
    var vmenu = `
  <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
 
    <!--el boton amburguesa-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--fin boton amburguesa-->

    <!--quise centrar con justify-content-md-center pero no funcionó-->
    
    <div class="logo">
                <a href="javascript:inicio()" class="imgg"><img src="img/SLL__2.png" alt="Logo">
                </a>
            </div>
    
    <div class="collapse navbar-collapse justify-content-sm-center" id="navbarCollapse">
      <ul class="navbar-nav mr-auto" id="hov">
        <li class="nav-item active">
          <a class="nav-link" href="javascript:inicio()">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <!--<a class="nav-link" href="javascript:laslombrices()">Las Lombrices</a>-->
          <a class="nav-link" href="javascript:laslombrices2()">Las Lombrices</a>
          <!--<a class="nav-link" href="javascript:adopcion()">Las Lombrices</a>-->
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:nosotros()">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:faq()">Preguntas Frecuentes</a>
        </li>

        <!-- un item disabled
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>-->
      </ul>
    </div>
  </nav>
  `;
  document.getElementById("menu").innerHTML = vmenu;
};