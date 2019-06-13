describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG')
    });

    it('Debe retornar "H"cuando ingrese la letra "A" con el offset 33', ()=>{
      assert.equal(cipher.encode(33, 'A'),'H')
    })
    it('Debe retornar " " cuando ingrese la letra " " con el offset 33',()=>{
      assert.equal(cipher.encode(33,' '),' ')    
    });
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ')})
    })
    it('debería retornar "HOLA" para "OVSH" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"OVSH"),"HOLA")
    })
    it('debería retornar "SQUAD" para "ZXBHK" con offset 33',() =>{
      assert.equal(cipher.decode(33, "ZXBHK"),"SQUAD")
    })
    it('Debe retornar " " cuando ingrese la letra " " con el offset 33',()=>{
      assert.equal(cipher.decode(33,' '),' ')
    })
    it('Debe retornar " " cuando ingrese la letra " " con el offset 32',()=>{
        assert.equal(cipher.decode(32,' '),' ')

    it('Debe retornar "B B" cuando ingrese "A A" con el offset 1',()=>{
        assert.equal(cipher.decode(1,"B B"),"A A")
    })
  });
})
})