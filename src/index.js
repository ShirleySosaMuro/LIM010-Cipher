//Nombrando las variables con sus equivalentes ID//
const passwordValida ='LABORATORIA';
const secondSection = document.getElementById('queHacer');
const thirdSection =document.getElementById('writeMessage');
const finalSection= document.getElementById('textoResultado');
//evento de login y verificación de clave//
const login= document.getElementById('login');
let nroIntentos= 0;
const validar= () => {
    const password= document.getElementById('secret');
        if (password.value === passwordValida){
            login.classList.add('hide');
            secondSection.classList.replace('hide','show'); 
//RECUERDA y agregar en style el GIF//
            document.body.style.backgroundImage = 'url(./media/fondogif.GIF)';
//RECUERDA que debo cambiar el console log por una looltip//
        } else {
        if (nroIntentos <2){
           console.log('ERROR')
           password.value= '';
           nroIntentos++;
//RECUERDA que debo cambiar el console log por una looltip ERROR. Prueba más tarde//
    } else {
           console.log('ERROR. Prueba más tarde'); }
 }  
}   
//evento dar click al botón y entrar a la secondSection //
const botonLogin= document.getElementById('boton_entrar');
botonLogin.addEventListener('click', validar)
//dar click en botón OCULTAR y te mande a escribir mensaje  //
const botonCifrar =document.getElementById('hideButton');
      hideButton.addEventListener('click',()=> {
      secondSection.classList.add('hide');
      writeMessage.classList.replace('hide','show');
    })
//dar click en botón REVELAR y te mande a escribir mensaje  //
const botonDescifrar =document.getElementById('discoverButton');
      discoverButton.addEventListener('click',()=>{
      secondSection.classList.add('hide');
      writeMessage.classList.replace('hide','show');
    })
//dar click en botón enviar y te mande a resultado  //
const botonEnviar= document.getElementById('codificar');
      codificar.addEventListener('click',()=>{
      writeMessage.classList.add('hide');
      textoResultado.classList.replace('hide','show');      
      })
//ingresar el texto que se quiere cifrar o descifrar, elegir cantindad de desplazamientos y enviar información //
//generar texto cifrado o descifrado//
//funcion de copiar texto AUN NO ME SALE//
function myFunction() {
const copy =document.getElementById('cajaConResultado').value;
copy.select();
document.execCommand('copy');
}
//funcion de borrar datos//