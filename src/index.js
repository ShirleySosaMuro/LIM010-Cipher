// VARIABLES PANTALLAS: login, primera pantalla con las opciones, segunda pantalla y tercera pantalla //
const passwordValida = 'LABORATORIA';
const primeraPantalla = document.getElementById('primeraPantallaOpciones');
const segundaPantallaCifrar = document.getElementById('segundaPantallaOpcionCifrar');
const segundaPantallaDescifrar = document.getElementById('segundaPantallaOpcionDesCifrar');
const terceraPantallaResultadoFinal = document.getElementById('terceraPantallaResultados');
const resultadoFinal=document.getElementById('enviarACifrar');

//evento de login y verificación de clave//
const pantallaInicio = document.getElementById('login');
let nroIntentos = 0;
const validar = () => {
  const password = document.getElementById('palabraSecreta');
  if (password.value === passwordValida) {
    login.classList.add('hide');
    primeraPantalla.classList.replace('hide', 'show');
    //RECUERDA y agregar en style el GIF//
    document.body.style.backgroundImage =
      'url(./media/fondo_shoutr_animado.gif)';
    //RECUERDA que debo cambiar el console log por una looltip//
  } else {
    if (nroIntentos < 2) {
      console.log('ERROR');
      password.value = '';
      nroIntentos++;
      //RECUERDA que debo cambiar el console log por una looltip ERROR. Prueba más tarde//
    } else {

      console.log('Creeemos que no eres tú. Inténtalo más tarde.');   
          
    }
  }
};
//evento dar click al botón y entrar a la primeraPantalla //
const botonLogin = document.getElementById('botonEntrar');
botonLogin.addEventListener('click', validar);

//dar click en botón OCULTAR y te mande a segundaPantallaCifrar  //
const botonCifrar = document.getElementById('opcionCifrar');
opcionCifrar.addEventListener('click', () => {
  primeraPantalla.classList.add('hide');
  segundaPantallaCifrar.classList.replace('hide', 'show');
});
//¡NO ME SALE!dar click en botón REVELAR y te mande a segundaPantallaDescifrar   //
const botonDescifrar = document.getElementById('opcionDescifrar');
opcionDescifrar.addEventListener('click', () => {
  primeraPantalla.classList.add('hide');
  segundaPantallaDesCifrar.classList.replace('hide','show');
});
//dar click en botón enviarDESCIFRAR y te lleve a la pantalla final con el resultado  
//const botonEnviarDescifrar = document.getElementById('enviarADescifrar');
  //enviarADescifrar.addEventListener('click', () => {
  //segundaPantallaOpcionDesCifrar.classList.add('hide');
  //terceraPantallaResultados.classList.replace('hide', 'show')//

  // CODIGO CIFRAR //
  const resultadoCifrar= document.getElementById('enviarACifrar');
  enviarACifrar.addEventListener('click', () => {
  const mensajeCifrado = window.cipher.encode(textoParaCifrar.value,desplazamiento1.value);
  cajaResultado.value = mensajeCifrado;  
  });
//(funcion de copiar texto AUN NO ME SALE//


//funcion de volver a LOGIN y PONER  borrar datos//

const regresarAInicio = document.getElementById('regresarLogin');
  regresarLogin.addEventListener('click', () => {
  terceraPantallaResultados.classList.add('hide');
  login.classList.replace('hide', 'show');
});
