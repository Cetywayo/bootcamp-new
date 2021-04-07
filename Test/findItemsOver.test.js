describe('findItemsOver' , function(){
    it('should return items that have high quantity than a threshold' , function(){
       

        assert.deepEqual(findItemsOver ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ],25) ,[
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ]);
    });

    it('should return items that have high quantity than a threshold' , function(){
       

        assert.deepEqual(findItemsOver ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 30) ,[
            {name : 'pears', qty : 37},
            
        ]);
    });
    

    it('should return items that have high quantity than a threshold' , function(){
       

        assert.deepEqual(findItemsOver ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 40},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 35) ,[
            {name : 'pears', qty : 40},
            
        ]);
    });


    it('should return items that have high quantity than a threshold' , function(){
       

        assert.deepEqual(findItemsOver ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 40},
            {name : 'bananas', qty : 50},
            {name : 'apples', qty : 3},
        ], 45) ,[
            {name : 'bananas', qty : 50},
            
        ]);
    });


});