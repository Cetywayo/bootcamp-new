function regCheck(regNo, regEnd){
    return regNo.endsWith(regEnd);
  }
  console.log(regCheck('DV 23 NB GP', 'GP'));