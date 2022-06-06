const {getJamData} = require("./itchy.js")

async function jam(){
  let jam = await getJamData("https://itch.io/jam/adventure-jam-2022");
  console.log(jam)
}
jam()