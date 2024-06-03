const mapArrToString = (arr) => {
  return arr.filter((el) => typeof el === 'number').map(String);
};
module.exports = mapArrToString;
