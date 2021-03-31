describe('regCheck', function(){


    it('The reg should endswith with GP', function(){
        assert.equal(true, (regCheck('DV 23 NB GP', 'GP')));
        
    });
    
});