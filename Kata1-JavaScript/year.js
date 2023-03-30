const isLeap = (year) => {
  return year % 400 == 0 ? true : false;
};

module.exports = isLeap;
