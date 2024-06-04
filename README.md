# itchy
Web scraper to get jam data from [itch.io](https://itch.io)

> ⚠️ This package uses webscraping to get data. Please refer to your local laws before using this package to scrape data.

### Installing 
Run this in you project folder to install this package
```bash
# install via npm
npm i TasfiqulTapu/itchy 
# install via yarn 
yarn add TasfiqulTapu/itchy
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

#### #getJamData(jamURL)
returns a json object with jam data of the url provided.
`entries.json` can be obtained from `https://itch.io/jam/{jamID}/entries.json`
<details>
<summary>Upcoming jam</summary>
  
  ```js
  {
      jamType: "upcoming",
      joined: '1234',
      title: "Some Ridiculous Jam",
      jamURL: "https://itch.io/jam/Link_To_Jam",
      hosts: {
          "Gabe" : "https://gabe.example.com",
          "Mark" : "https://MarkDeez.Nuts"
      },
      jamID: '12345'
  }
  ```
  
</details>
<details>
<summary>Ongoing jam</summary>
  
  ```js
  {
      jamType: 'ongoing',
      joined: '123',
      entries: '11',
      title: 'Some Ridiculous Jam',
      jamURL: 'https://itch.io/jam/Link_To_Jam',
      hosts: {
          "Gabe" : "https://gabe.example.com",
          "Mark" : "https://MarkDeez.Nuts"
      },
      jamID: '12345'
  }
  ```
  
</details>
<details>
<summary>Ended jam</summary>
  
  ```js
  {
      jamType: 'ended',
      ratings: '420',
      entries: '69',
      title: 'Some Ridiculous Jam',
      jamURL: 'https://itch.io/jam/Link_To_Jam',
      hosts: {
          "Gabe" : "https://gabe.example.com",
          "Mark" : "https://MarkDeez.Nuts"
      },
      jamID: '12345'
  }
  ```
  
</details>
