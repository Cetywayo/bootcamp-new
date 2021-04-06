function yearsAgo(year){
  var d = new Date();
var currentYear = d.getFullYear() - year;
  //console.log(d);
  return currentYear;
}
