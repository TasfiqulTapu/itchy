const axios = require("axios");
const cheerio = require("cheerio")


exports.getJamData = async function getJamData(jamURL){
  let jam = {}
  let x = await getItchData(jamURL);
  const $ = cheerio.load(x.data);
  let statCont = $('div[class="stat_box"]').text()
  if(statCont.endsWith("Joined")){
    jam["jamType"] = "upcoming";
    jam["joined"] = $('div[class="stat_box"] > div[class="stat_value"]').attr("title")
    if(!jam["joined"])jam["joined"] = $('div[class="stat_value"]').text()
  }else if(statCont.endsWith("Ratings")){
    jam["jamType"] = "ended";
    jam["ratings"] = $('div[class="stat_box"] > div[class="stat_value"]').attr("title")
    jam["entries"] = $('div[class="stat_box"] > a > div[class="stat_value"]').text()
    
  }else if(statCont.endsWith("Entries")){
    jam["jamType"] = "ongoing";jam["joined"] = $('div[class="stat_box"] > div[class="stat_value"]').text()
    jam["entries"] = $('div[class="stat_box"] > a > div[class="stat_value"]').text()
  }
  jam["title"] = $('h1[class="jam_title_header"] a').text()
  jam["jamURL"] = $('h1[class="jam_title_header"] a').attr("href")
  let hosts = {}
  let y= $('div[class="jam_host_header"]').html()
  $('div[class="jam_host_header"]').find('a').each(function(i, elm) {
    hosts[($(this).text())] = ($(this).attr("href"))
});
  jam["hosts"] = hosts;
//   jam["host"] = $('div[class="jam_host_header"] a').text()
//   jam["hostURL"] = $('div[class="jam_host_header"] a').attr("href")
  return jam;
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