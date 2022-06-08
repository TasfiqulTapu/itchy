const itchy = require("./src/itchy")

async function jam(){
  let jam = await itchy.getJamData("https://itch.io/jam/adventure-jam-2022");
  console.log(jam)
}
jam()