/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

/* Función para capitalizar palabras*/
function capitalizarNombre(nombre){
  let palabras = nombre.toLowerCase().split(" ");
  if(palabras.length > 1){
    for(let i = 0; i < palabras.length; i++){
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");
  }
  else{
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  }
}

/*Función para pedir el Nombre */
function pedirNombre(){
  let nombre = prompt("Ingrese su nombre por favor: ");
  nombre = nombre.trim();
  let exp_regular_nombre = /^[a-zA-Z]{3,}(?: [a-zA-Z]+)?$/;
  if(exp_regular_nombre.test(nombre)){
    nombre = capitalizarNombre(nombre);
    return nombre;
  }
  else{
    alert("El nombre debe tener al menos 3 letras y no puede contener números ni caracteres especiales.");
    pedirNombre();
  }
}

/*Función para pedir el año de nacimiento */
function pedirAnioNacimiento(){
  let anioNacimiento = prompt("Ingresa su año de nacimiento en formato por favor:");
  if (!isNaN(anioNacimiento) && anioNacimiento.trim() !== "") {
    anioNacimiento = parseInt(anioNacimiento);
    const anioActual = new Date().getFullYear();
      if (anioNacimiento >= 1900 && anioNacimiento <= anioActual) {
        let edad = anioActual-anioNacimiento;
        return edad;
      }
      else{
        alert("El año ingresado no es valido");
        pedirAnioNacimiento()
      }
  }
  else{
    alert("En este campo solo se puede ingresar números.");
    pedirAnioNacimiento()
  }
}

/*Función para pedir Ciudad */
function pedirCiudad(){
  let ciudad = prompt("Ingrese su ciudad por favor: ");
  ciudad.trim();
  let exp_regular_ciudad = /^[a-zA-Z]{3,}(?: [a-zA-Z]+)?$/;
  if(exp_regular_ciudad.test(ciudad)){
    ciudad = capitalizarNombre(ciudad);
    return ciudad;
  }
  else{
    alert("El nombre debe tener al menos 3 letras y no puede contener números ni caracteres especiales.");
    pedirCiudad();
  }
}

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  /*Asinga los valores ingresados al objeto datosPersona */
  datosPersona.nombre = pedirNombre();
  datosPersona.edad = pedirAnioNacimiento();
  datosPersona.ciudad = pedirCiudad();
  datosPersona.interesPorJs = confirm("¿Le interesa Javascript?");
  console.log(datosPersona);
}

/*Declaro variables para poder acceder a las etiquetas de HTML */
const cardNombre = document.querySelector("#nombre");
const cardEdad = document.querySelector("#edad");
const cardCiudad = document.querySelector("#ciudad");
const cardJavascript = document.querySelector("#javascript");

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  cardNombre.textContent = datosPersona.nombre;
  cardEdad.textContent = datosPersona.edad;
  cardCiudad.textContent = datosPersona.ciudad;
  cardJavascript.textContent = datosPersona.interesPorJs ? "Si" : "No";
}


const filaDeMaterias = document.querySelector("#fila");
function crearMaterias(materia){
  filaDeMaterias.innerHTML += `
  <section class="caja">
    <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
    <p class="lenguajes">${materia.lenguajes}</p>
    <p class="bimestre">${materia.bimestre}</p>
  </section>
  `;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  filaDeMaterias.innerHTML = "";
  for(let materia of listado){
    crearMaterias(materia);
  }
}

const sitio = document.querySelector("#sitio");
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector("#sobre-mi");
window.addEventListener("keydown", function(evento) {
  if(evento.key === 'f' || evento.key === 'F'){
      sobreMi.classList.toggle('oculto');
  }
});