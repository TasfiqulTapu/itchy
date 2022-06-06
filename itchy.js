const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

async function getJamData(jamURL){
  let resPage;
  await getItchData(jamURL).then(async(d) => resPage = await d);
  return resPage;
} 

async function getItchData(URL){
  try{
  let data = await axios.get(URL);
  return data;
  }catch(err){
    console.error(err);
  }
}