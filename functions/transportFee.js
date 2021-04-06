function transportFee(shift){

 // var transportCost = 'R20';
  if(shift =='morning'){
    return 'R20';
  }
  
  else if (shift =='afternoon'){
     return 'R10';
  }
  
  else if (shift == 'nightshift'){
    return 'free';
  //console.log(shift);
}
}