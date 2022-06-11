# itchy
Web scraper to get jam data from [itch.io](https://itch.io)

> Please refer to your local laws before using this package to scrape data.

### Installing 
This this in you project folder to install this package
```sh
npm i TasfiqulTapu/itchy
```

### Using this package 📦
```js
const itchy = require("itchy")
async function main(){
    let data = await itchy.getJamData("https://itch.io/jam/gmtk-2021")
    console.log(data)
}
main()
```

##### getJamData(jamURL)
returns a json object with jam data of the url provided.
<details>
<summary>Upcoming jam</summary>
  
  ```js
  {
      jamType: "upcoming",
      joined: 1234,
      title: "Some Ridiculous Jam",
      jamURL: "https://itch.io/jam/Link_To_Jam",
      hosts: {
          "Gabe" : "https://gabe.example.com",
          "Mark" : "https://MarkDeez.Nuts"
      }
  }
  ```
  
</details>
