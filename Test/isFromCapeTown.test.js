describe('isFromCapeTown', function(){

    it('should return true if the registration number start with CA', function(){
        assert.equal(true, isFromCapeTown('CA0987'));
    });

    it('should return false if the registration does not start number start with CA', function(){
        assert.equal(false, isFromCapeTown('ZA0987'));
    });
    
    
});
  