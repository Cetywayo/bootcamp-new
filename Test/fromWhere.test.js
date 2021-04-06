describe('fromWhere', function(){

    it('should return the town, the car is from', function(){
        
        assert.equal(fromWhere('CY'),'Bellville' );
    });
    
    it('should return the town, the car is from', function(){
        
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('should return the town, the car is from', function(){
        
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
});