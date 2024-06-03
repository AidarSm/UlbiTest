const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');
const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const usersId = response.data.map((obj) => obj.id);
    return mapArrToString(usersId);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getData;
