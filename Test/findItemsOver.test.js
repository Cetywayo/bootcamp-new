describe('findItemsOver' , function(){
    it('should return items that are over 25' , function(){
       

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

    it('should return items that are over 30' , function(){
       

        assert.deepEqual(findItemsOver ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 30) ,[
            {name : 'pears', qty : 37},
            
        ]);
    });
    

});