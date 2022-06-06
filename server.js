const {getJamData} = require("./itchy.js")

async function jam(){
  let jam = await getJamData("https://itch.io/jam/gmtk-jam-2022");
  console.log(jam)
}
