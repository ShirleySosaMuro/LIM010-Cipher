window.cipher = {
  encode: (desplazamientoCifrar, textoParaCifrar) => {
    /* Acá va tu código que cifra MAYÚSCULAS*/
    let solved = '';
    for(let i =0;i< textoParaCifrar.length;i++) {
      const ascNum = textoParaCifrar[i].charCodeAt();
      if(ascNum>=65 && ascNum <=90){
      const code = ((ascNum - 65) + (parseInt(desplazamientoCifrar))) % 26+ 65;
      solved+= String.fromCharCode(code);
      }
      
    }
    return solved;
  }, 
  decode: (desplazamientoDescifrar,textoParaDescifrar)=>{
    /* Acá va tu código que cifra*/
    let decipher = '';
    for(let i =0;i< textoParaDescifrar.length;i++) {
      const ascNum = textoParaDescifrar[i].charCodeAt();
      if(ascNum>=65 && ascNum <=90){
      const code = ((ascNum + 65) - (parseInt(desplazamientoDescifrar))) % 26 + 65;
      decipher+= String.fromCharCode(code);
      }
    }
    return decipher;
  }
};