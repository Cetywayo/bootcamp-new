describe('isFromBellville', function(){

    it('it should return true if the registration number startswith CY', function(){
        assert.equal(true, isFromBellville('CY234567'));
    });

    it('it should return false if the registration number does not startswith CY', function(){
        assert.equal(false, isFromBellville('CX234567'));
    });
    
});