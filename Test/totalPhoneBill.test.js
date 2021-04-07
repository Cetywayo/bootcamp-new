describe('totalPhoneBill', function(){


    it('should  returns the total bill for sms and calls', function(){
        assert.equal('R7.45',totalPhoneBill('sms, call, sms, call, sms'));
        
    });

    it('should  returns the total bill for sms and calls', function(){
        assert.equal('R6.80',totalPhoneBill('call, sms, call, sms'));
        
    });


    it('should  returns the total bill for sms and calls', function(){
        assert.equal('R3.40',totalPhoneBill('call, sms'));
        
    });

    


   

    
});

