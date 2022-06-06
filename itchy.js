const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

async function getJamData(jamURL){
  let res = await axios.get(jamURL);
  let data = res.then(d=>d)
  return data.data;
}