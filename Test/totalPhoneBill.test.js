describe('totalPhoneBill', function(){


    it('should  returns the total bill for sms and calls  .', function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65');
        
    });

    it('should  returns the total bill for sms and calls  .', function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');
        
    });

    
});