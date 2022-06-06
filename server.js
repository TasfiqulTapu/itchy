const {getJamData} = require("./itchy.js")

async function jam(){
  let jam = await getJamData("https://itch.io/jam/gmtk-2021");
  console.log(jam)
}
jam()