describe('greet', function(){

    it('should greet Siwe correctly', function(){
        assert.equal('Hello, Siwe', greet('Siwe'));
    });

    it('should greet Makhe correctly', function(){
        assert.equal('Hello, Makhe', greet('Makhe'));
    });
    
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});