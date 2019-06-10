// Variables: login, primera pantalla con las opciones, segunda pantalla y tercera pantalla //
const passwordCorrecta = 'LABORATORIA';
const primeraPantalla = document.getElementById('primeraPantalla');
const segundaPantallaCifrar = document.getElementById('segundaPantallaCifrar');
const segundaPantallaDescifrar = document.getElementById('segundaPantallaDescifrar');
const terceraPantallaConResultados = document.getElementById('terceraPantallaConResultados');
const btnqueProcesaCifrado = document.getElementById('btnQueProcesaCifrado');
const btnqueProcesaDescifrado = document.getElementById('btnQueProcesaDescifrado');
const btnOcultar = document.getElementById('btnCifrar');
const btnDescifrar = document.getElementById('btnDescifrar');
const desplazamientoCifrar = document.getElementById('desplazamientoCifrar');
const textoParaCifrar = document.getElementById('textoParaCifrar');
const desplazamientoDescifrar = document.getElementById('desplazamientoDescifrar');
const textoParaDescifrar = document.getElementById('textoParaDescifrar');

const textoCifrado = document.getElementById('cajaResultado');
const copyText=document.getElementById('copyText');
const volverLogin = document.getElementById('volverLogin');
//pantalla de login, evento de verificación de clave//
const login = document.getElementById('login');
let nroIntentos = 0;
const validar = () => {
  const password = document.getElementById('palabraSecreta');
  if (password.value === passwordCorrecta) {
    login.classList.add('hide');
    primeraPantalla.classList.replace('hide', 'show');
    //¡AVISO! Recuerda cambiar esto a style//
    document.body.style.backgroundImage ='url(./media/fondo_shoutr_animado.gif)';
    //¡AVISO! Debo cambiar el console log por una looltip//
  } else {
    if (nroIntentos < 2) {
      console.log('ERROR');
      password.value = '';
      nroIntentos++;
      //¡AVISO! Debo cambiar el console log por una looltip//
    } else {
      console.log('Creeemos que no eres tú. Inténtalo más tarde.');
    }
  }
};
//dar click para pasar a la primeraPantalla //
const btnEntrar = document.getElementById('btnEntrar');
btnEntrar.addEventListener('click', validar);
//en la primeraPantalla hay dos botones: ocultar (cifrar) y revelar (descifrar)//
//evento dar click en ocultar (cifrar)//
btnOcultar.addEventListener('click', () => {
  primeraPantalla.classList.add('hide');
  segundaPantallaCifrar.classList.replace('hide','show');
});
//cuando eliges el botón ocultar (cifrar) te manda a la segundaPantallaCifrar donde se podrá escribir el texto que posteriormente se cifrará //
btnQueProcesaCifrado.addEventListener('click', () => {
  const resultado = cipher.encode(desplazamientoCifrar.value,textoParaCifrar.value);
  console.log(resultado);
  cajaResultado.value= resultado;
  segundaPantallaCifrar.classList.add('hide');
  terceraPantallaConResultados.classList.replace('hide','show');
});
//evento dar click en revelar (descifrar)//
btnDescifrar.addEventListener('click', () => {
  primeraPantalla.classList.add('hide');
  segundaPantallaDescifrar.classList.replace('hide','show');
});
//cuando eliges el botón revelar (descifrar) te manda a la segundaPantallaDescifrar donde se podrá escribir el texto que posteriormente se descifrará //
btnQueProcesaDescifrado.addEventListener('click', () => {
  const resultado2 = cipher.decode(desplazamientoDescifrar.value,textoParaDescifrar.value);
  console.log(resultado2);
  cajaResultado.value= resultado2;
  segundaPantallaDescifrar.classList.add('hide');
  terceraPantallaConResultados.classList.replace('hide','show');
});
//funcion de copiar texto AUN NO ME SALE//
copyText.addEventListener('click',()=>{
  cajaResultado.select();
  document.execCommand('copy');     
  });
//funcion de volver a LOGIN y PONER  borrar datos//
volverLogin.addEventListener('click', () => {
  terceraPantallaConResultados.classList.add('hide');
  login.classList.replace('hide', 'show');
  });
