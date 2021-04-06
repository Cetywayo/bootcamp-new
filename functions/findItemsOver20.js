function findItemsOver20(item){
    console.log(item)
    let itemArr =[]
   
    for(let i=0; i< item.length; i++){
     var listItem = item[i];
      if(listItem.qty > 20){
        itemArr.push(listItem)
      }
    }
  return itemArr
  }
  
  