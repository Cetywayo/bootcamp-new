describe('countAllFromTown' , function(){
    it('return number registration numbers from Cape Town(CA).' , function(){
        assert.equal(countAllFromTown('CA182736 CY523519 CJ81232854678GP 79974L EC5768 23662MP','CA'), 1);
    });
    it('return number registration numbers from Gauteng(GP).' , function(){
        assert.equal(countAllFromTown('CA182736 CY523519 C81232854678 79974L EC5768 23662MP','CY'), 0);
    });

    it('return number registration numbers from Limpopo(MP).' , function(){
        assert.equal(countAllFromTown('CA182736 MP523519 C81232854678 79974L MP5768 23662MP','MP'), 0);
    });
});