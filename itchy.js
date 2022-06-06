const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

async function getJamData(jamURL){
  const $ = cheerio.load(await getItchData(jamURL));
  let div = $('a','h1[class="jam_title_header"]');
  console.log(div.text())
} 

async function getItchData(pageURL){
  let resPage;
  await getItchPage(pageURL).then(async(d) => resPage = await d);
  return resPage;
}
async function getItchPage(URL){
  try{
  let data = await axios.get(URL);
  return data;
  }catch(err){
    console.error(err);
  }
}