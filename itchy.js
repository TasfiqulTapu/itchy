const axios = require("axios");
const cheerio = require("cheerio")

module.exports = {getJamData};

async function getJamData(jamURL){
  let jam = {}
  let x = await getItchData(jamURL);
  const $ = cheerio.load(x.data);
  //let div = $('div[class="stats_container"]')['0'].children.forEach(e=>console.log(e));
  console.log($('div[class="stats_container"]').length)
  jam["title"] = $('h1[class="jam_title_header"] a').text()
  jam["jamURL"] = $('h1[class="jam_title_header"] a').attr("href")
  jam["host"] = $('div[class="jam_host_header"] a').text()
  jam["hostURL"] = $('div[class="jam_host_header"] a').attr("href")
  // let y =  $('div[class="stats_container"]').html()
  // console.log(y)
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