describe('isWeekday', function(){

    it('should return true if the week day start with M, T, W, F', function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('should return false if the week day does not  start with M, T, W, F', function(){
        assert.equal(false, isWeekday('Suturday'));
    });
   
});