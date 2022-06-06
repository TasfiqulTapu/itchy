const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

async function getJamData(jamURL){
  let jam = {}
  let x = await getItchData(jamURL);
  const $ = cheerio.load(x.data);
  //let div = $('div[class="stats_container"]')['0'].children.forEach(e=>console.log(e));
  jam["title"] = $('h1[class="jam_title_header"]').text()
  let y =  $('div[class="stat_box"]').html()
  console.log(y)
  console.log(jam)
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