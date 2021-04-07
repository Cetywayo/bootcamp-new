

 function totalPhoneBill(cost){
  // console.log(cost);
   var bill = cost.split(", ");
   let totPhoneBill=0;
   var call= 0; 
   var sms= 0;
  
   for(var i=0; i<bill.length; i++){
      if(bill[i] === "sms"){
        sms += 1;
      }
        else if(bill[i] ==="call"){
          
          call += 1;
      }
   }
  var totcalls= call*2.75;
  var totsms= sms*0.65;
   totPhoneBill=totcalls + totsms;
  console.log('R'+totPhoneBill);   
   return 'R'+totPhoneBill.toFixed(2);
 }