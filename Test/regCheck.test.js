describe('regCheck', function(){


    it('should return true if the registration number endswith with GP', function(){
        assert.equal(true, (regCheck('DV 23 NB GP', 'GP')));
        
    });
    it('should return false if the registration number doesnt endswith with MP', function(){
        assert.equal(false, (regCheck('DV 23 NB XA', 'MP')));
        
    });

    it('should return false if the registration number doesnt endswith with CY', function(){
        assert.equal(false, (regCheck('CY 189-012', 'CY')));
        
    });

    it('should return false if the registration number doesnt endswith with ND', function(){
        assert.equal(false, (regCheck('CY 189-012', 'ND')));
        
    });
    
});

