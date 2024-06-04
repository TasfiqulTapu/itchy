const itchy = require("./src/itchy")

const urls = [
    "https://itch.io/jam/ostcompjam",
    "https://itch.io/jam/gmtk-2021",
    "https://itch.io/jam/gmtk-jam-2022",
    "https://itch.io/jam/gmtk-2023",
    "https://itch.io/jam/lowrezjam-2023",
    "https://itch.io/jam/never-ending-gamejam",
    "https://itch.io/jam/how-long-can-we-jam",
    "https://itch.io/jam/gmtk-jam-2069",
]

async function main(){
  for(const url of urls){
    let jam = await itchy.getJamData(url);
    console.log(jam)
  }
}

main()
