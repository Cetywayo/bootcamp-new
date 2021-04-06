function fromWhere(regitrationNo){
  if(regitrationNo.startsWith('CY')){
    return 'Bellville';
  }
  else if (regitrationNo.startsWith('CJ')){
    return 'Paarl';
  }
    else if (regitrationNo.startsWith('CA')){
    return 'Cape Town';
  }
 
  else{
    return 'Some other place!';
  }
  
}