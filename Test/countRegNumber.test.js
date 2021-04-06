describe('countRegNumber', function(){


    it('should count  the total number of registration numbers and return 3', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
        
    });

    it('should count  the total number of registration numbers and return 4', function(){
        assert.equal(4, countRegNumber('CA 182736,CY 523519,CJ 812328, CJ 234567'));
        
    });

});
