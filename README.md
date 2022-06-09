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
