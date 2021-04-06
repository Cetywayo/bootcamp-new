function totalPhoneBill(cost){
 // console.log(cost);
  var bill = cost.split(", ");
  let totPhoneBill=0;
 
  for(var i=0; i<bill.length; i++){
     if(bill[i] === "sms"){
       totPhoneBill += 0.65;
     }
       else if(bill[i] ==="call"){
         totPhoneBill += 2.75;
     }
  }
 console.log('R'+totPhoneBill);   
  return 'R'+totPhoneBill.toFixed(2);
}
