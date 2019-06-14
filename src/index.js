const passwordCorrecta = 'LABORATORIA';
const primeraPantalla = document.getElementById('primera-pantalla');
const segundaPantallaCifrar = document.getElementById('segunda-pantalla-cifrar');
const segundaPantallaDescifrar = document.getElementById('segunda-pantalla-descifrar');
const terceraPantallaConResultados = document.getElementById('tercera-pantalla-con-resultados');
const btnQueProcesaCifrado = document.getElementById('btn-que-procesa-cifrado');
const btnQueProcesaDescifrado = document.getElementById('btn-que-procesa-descifrado');
const btnOcultar = document.getElementById('btn-cifrar');
const btnDescifrar = document.getElementById('btn-descifrar');
const desplazamientoCifrar = document.getElementById('desplazamiento-cifrar');
const textoParaCifrar = document.getElementById('texto-para-cifrar');
const desplazamientoDescifrar = document.getElementById('desplazamiento-descifrar');
const textoParaDescifrar = document.getElementById('texto-para-descifrar');
const alert = document.getElementById('alert');
const cajaResultado = document.getElementById('caja-resultado');
const copyText = document.getElementById('copy-text');
const volverLogin = document.getElementById('volver-login');
const palabraSecreta = document.getElementById('palabra-secreta');
const btnEntrar = document.getElementById('btn-entrar');
const login = document.getElementById('login');
let nroIntentos = 0;
const validar = () => {
  if (palabraSecreta.value === passwordCorrecta) {
    login.classList.add('hide');
    primeraPantalla.classList.replace('hide', 'show');
    document.body.style.backgroundImage ='url(./media/fondo_shoutr_animado.gif)';
  } else {
    if (nroIntentos < 2) {
      palabraSecreta.value = '';
      nroIntentos++;
    } else {
      alert.classList.add('hide');
      alert.classList.replace('hide', 'show');
    }
  }
};
btnEntrar.addEventListener('click', validar);
btnOcultar.addEventListener('click', () => {
  primeraPantalla.classList.add('hide');
  segundaPantallaCifrar.classList.replace('hide', 'show');
});
btnQueProcesaCifrado.addEventListener('click', () => {
  const resultado = cipher.encode(desplazamientoCifrar.value,textoParaCifrar.value);
  cajaResultado.value = resultado;
  segundaPantallaCifrar.classList.add('hide');
  terceraPantallaConResultados.classList.replace('hide', 'show');
});
btnDescifrar.addEventListener('click', () => {
  primeraPantalla.classList.add('hide');
  segundaPantallaDescifrar.classList.replace('hide', 'show');
});
btnQueProcesaDescifrado.addEventListener('click', () => {
  const resultado2 = cipher.decode(
    desplazamientoDescifrar.value,
    textoParaDescifrar.value
  );
  cajaResultado.value = resultado2;
  segundaPantallaDescifrar.classList.add('hide');
  terceraPantallaConResultados.classList.replace('hide', 'show');
});
copyText.addEventListener('click', () => {
  cajaResultado.select();
  document.execCommand('copy');
});
volverLogin.addEventListener('click', () => {
  terceraPantallaConResultados.classList.add('hide');
  cajaResultado.value = '';
  palabraSecreta.value = '';
  textoParaCifrar.value = '';
  desplazamientoCifrar.value = '';
  textoParaDescifrar.value = '';
  desplazamientoDescifrar.value = '';
  login.classList.replace('hide', 'show');
  document.body.style.backgroundImage = 'url(./media/fondo_login.svg)';
});
