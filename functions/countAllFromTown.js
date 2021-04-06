function countAllFromTown(allTownReg,location){
    //console.log(allTownReg);
    var allTownRegistrations = allTownReg.split(",");
    //console.log(allTownRegistrations);
    var counter = 0;
    for(var i=0; i<allTownRegistrations.length; i++){
     var allTown = allTownRegistrations[i].trim();
        if(allTown.startsWith(location)){
          //countArr.push(allTown);
         // countArr = counter++;
            counter++
          
        }
      //console.log(counter);
    }
   // console.log(counter);
    return counter;
  }

  