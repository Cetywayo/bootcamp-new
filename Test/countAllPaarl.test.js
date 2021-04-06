describe('countAllPaarl', function(){


    it('should count  the total number of registration from Paarl', function(){
        assert.equal(countAllPaarl('CJ 76543, CA 182736, CJ 12345, CY 523519, CJ 812328'), 3);
        
    });

    it('should count  the total number of registration from Paarl', function(){
        assert.equal(2, countAllPaarl('CA 182736, CY523519, CJ 812328, CJ 234567'));
        
    });

});
