const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

function getJamData(jamURL){
  let data = axios.get(jamURL)
  return data;
}