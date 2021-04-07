describe('findItemsOver20' , function(){
    it('should return items that are over 20' , function(){
       

        assert.deepEqual(findItemsOver20 ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'oranges', qty : 3},
        ], 20) ,[
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ]);


    });

    
    it('should return items that are over 20' , function(){
       

        assert.deepEqual(findItemsOver20 ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 30},
            {name : 'bananas', qty : 25},
            {name : 'oranges', qty : 3},
        ], 20) ,[
            {name : 'pears', qty : 30},
            {name : 'bananas', qty : 25},
        ]);


    });


    it('should return items that are over 20' , function(){
       

        assert.deepEqual(findItemsOver20 ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 40},
            {name : 'bananas', qty : 65},
            {name : 'oranges', qty : 3},
        ], 20) ,[
            {name : 'pears', qty : 40},
            {name : 'bananas', qty : 65},
        ]);


    });
    
    it('should return items that are over 20' , function(){
       

        assert.deepEqual(findItemsOver20 ([
            {name : 'apples', qty : 100},
            {name : 'pears', qty : 4},
            {name : 'bananas', qty : 5},
            {name : 'oranges', qty : 3},
        ], 20) ,[
            {name : 'apples', qty : 100},
            
        ]);


    });

});