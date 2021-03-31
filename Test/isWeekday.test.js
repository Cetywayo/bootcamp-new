describe('isWeekday', function(){

    it('The week day should start with M, T, W, F', function(){
        assert.equal(true, isWeekday('M, T, W, F'));
    });
   
});