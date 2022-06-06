const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

async function getJamData(jamURL){
  getItchData(jamURL).then(d => console.log(d))
} 

async function getItchData(URL){
  try{
  let data = await axios.get(URL);
  return data;
  }catch(err){
    console.error(err);
  }
}