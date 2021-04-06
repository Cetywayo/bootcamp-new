describe('findItemsOver20' , function(){
    it('should return items that are over 20' , function(){
       

        assert.deepEqual(findItemsOver20 ([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 20) ,[
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ]);
    });

});