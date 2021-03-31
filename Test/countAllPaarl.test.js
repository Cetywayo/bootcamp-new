describe('countAllPaarl', function(){

    it('the total number of registration from Paarl  startswith CJ should be 3', function(){
        assert.equal(3, countAllPaarl('CJ98916','CJ98976','CJ94356','CJ98765'));
    });
    
});