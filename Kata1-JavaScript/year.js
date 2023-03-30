const isLeap = (year) => {
  if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)){
    if((year % 100 === 0 && year % 400 != 0) || year % 4 != 0){
      return false;
    }
  }
  else{
    return false;
  }
  return true
};

module.exports = isLeap;
