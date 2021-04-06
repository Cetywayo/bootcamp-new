function countAllPaarl(allReg){
  //console.log(allReg);
  var allRegistrations = allReg.split(", ");
  
  //console.log(allRegistrations);
  var counter= 0;
  for(var i=0; i<allRegistrations.length; i++){
    
       if(allRegistrations[i].trim().startsWith('CJ')){
         counter++;
       }
        // countRegPaarl= allRegistrations ++;
         //break;
         //countRegPaarl.push(allRegistrations[i]);
            
       }
     return counter;
  
   }