describe('yearsAgo', function(){


    it('should count how many years ago that year is from the current year and return 7', function(){
        assert.equal(7, yearsAgo(2014));
        
    });

    it('should count how many years ago that year is from the current year and return 4', function(){
        assert.equal(4, yearsAgo(2017));
        
    });
});