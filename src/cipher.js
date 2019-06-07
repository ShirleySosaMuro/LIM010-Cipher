window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let solved = '';
    for (let i =0;i< string.length;i++) {
      const ascNum = string[i].charCodeAt();
      if(ascNum>=65 && ascNum <=90);
      const code = ((ascNum - 65) + (parseInt(offset))) % 26+ 65;
      solved += String.fromCharCode(code);
      return solved
      }

    }
  };
  
  decode: (offset,string)=>{
    /* Acá va tu código que cifra*/
  };
 