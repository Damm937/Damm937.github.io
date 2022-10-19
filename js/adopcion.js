/*Cuerpo del formulario de adopción*/
function adopcion() {
    var adop = `
    <div class="jsadopcion" style="margin-left: 40px;">
    <h1>Formulario de adopción</h1>
    <h3>Llene los datos siguientes para comenzar el proceso de adopción de su Lombriz de Tierra</h3>
    <form align="left">
        <div class="form-group">
            <label for="exampleInput">Nombre/s</label>
            <input type="text" class="form-control" placeholder="Nombre/s" required>
        </div>
        <div class="form-group">
            <label for="exampleInput">Apellido/s</label>
            <input type="text" class="form-control" placeholder="Apellido/s" required>
        </div>
        <div class="form-group">
            <label for="exampleInput">Dirección</label>
            <input type="text" class="form-control" placeholder="Dirección" required>
        </div>
        
        <div class="form-group">
            <label for="exampleInputEmail1">Su dirección de correo electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="sunombre@gmail.com" required>
            <small id="emailHelp" class="form-text text-muted">Copmartiremos su correo electrónico con cualquiera</small>
        </div>

        <div class="form-group">
            <label for="paises" class="form-label">País</label>
            <input class="form-control" list="paises" name="pais" id="pais" placeholder="Argentina">
            <datalist id="paises">
                <option value="Argentina">
                <option value="República de Congo">
                <option value="Suiza">
                <option value="Nueva Zelandia">
                <option value="Canadá">
                <option value="Cualquier otro...">
            </datalist>
        </div>

        <div class="form-group">
        <label for="profesiones" class="form-label">Profesión</label>
        <input class="form-control" list="profesiones" name="profesion" id="profesion" placeholder="Desocupado/changas">
            <datalist id="profesiones">
                <option value="Gigoló">
                <option value="Stripere">
                <option value="Ama/o de casa">
                <option value="jubilado / Pensionado / Ñoqui">
                <option value="Planero">
                <option value="Cualquier otro...">
            </datalist>
        </div>

        <br>
        <h3>Datos de su tarjeta de crédito/débito</h3>

        <div class="form-group">
            <input class="form-control" list="tarjetas" name="tarjeta" id="tarjeta" placeholder="VISA">
            <datalist id="tarjetas">
                <option value="Visa">
                <option value="Master-Card">
                <option value="American Express">
                <option value="Blokbuster">
                <option value="Mercado Pago">
                <option value="Naranja x">
                <option value="Verde z">
                <option value="Ualá">
                <option value="Dia %">
                <option value="Cualquier otra....">
            </datalist>
        </div>

        <div class="form-group">
            <label for="exampleInput">Nombre que figura en la tarjeta</label>
            <input type="text" class="form-control" placeholder="Nombre y Apellido del titular de la tarjeta">
        </div>
 
        <div class="form-group">
            <label for="exampleInput">Número de tarjeta</label>
            <input type="text" class="form-control" placeholder="Número de tarjeta (sin guiones ni espacios)" required>
        </div>
        
        <div class="form-group">
        Fecha de vencimiento:
        <span><label for="Mes">Mes</label>
            <select name="Mes " id="Mes">
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
        </span>

        <span>
            <label for="Año">Año</label>
            <select name="Año " id="Año">
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
            </select>
        <span>
        </div>

        <div class="form-group">
            <label for="exampleInput">Código de seguridad de la tarjeta</label>
            <input type="text" class="form-control" placeholder="El que figura en el reverso de la tarjeta" maxlength="3" required>
        </div>


        <div class="form-group">
        <label for="exampleInput">¿Cuánto dinero va a transferirnos?</label>
            <select name="Contribucion " id="Con">
                <option value="100p">U$D100</option>
                <option value="250p">U$D250</option>
                <option value="500p">U$D500</option>
                <option value="1000p">U$D1.000</option>
                <option value="5000p">U$D5.000</option>
                <option value="10000p">U$D10.000</option>
                <option value="100000p">U$D100.000</option>
            </select>
        </div>
        <br>
        
        <br>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
            <label class="form-check-label" for="exampleCheck1">Aceptar términos y condiciones</label>
        </div>

        <div id="nombre" style="margin-left: -40px;">
            <p >Puede personalizar el nombre de su lombriz, 
            ingrese el nombre que más le guste:</p>
            <input type="text" v-model="nombre" style="margin-left: 45px;">
            <p>Desde hoy el nuevo nombre que tenrá su lombriz será:
            <b>"{{nombre}}"</b></p>
        </div>

        <button type="button" class="btn btn-primary" onclick="javascript:mensaje();">Enviar solicitud de adpción</button>
    </form>
    </div>
    `;
    document.getElementById("centro").innerHTML = adop;
    //
    // Para cambiar el nombre a la lombriz adoptada
    var fin = `
        const miAplicacion = Vue.createApp({
        data() {
            return { nombre: ""}
        },
        watch: {
            nombre(valor) {
                this.nombre = valor
                },
            }
        }).mount("#nombre")
    `;
    document.getElementById("viu").innerHTML = fin;
};
/*fin cuerpo adopción*/