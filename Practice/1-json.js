const fs = require('fs')

// const book = {
//     title:"Ego is the enemy",
//     author:"Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// fs.writeFileSync('1-json.json',bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//dataBuffer reads the selected file via fs and file name
const dataBuffer = fs.readFileSync('1-json.json')

//This turns all of the data inside of the file in dataBuffer to a string
//which makes it readable
const dataJSON = dataBuffer.toString();

//This will turn data into a object because of how the original file was written
const data = JSON.parse(dataJSON)

//just to check if everthing works
console.log(data)

//time to edit info
data.name = 'Chanty';
data.age = 25;

console.log(data);

//saves changes with stringify
const userJSON = JSON.stringify(data)
//updates the file with fs
fs.writeFileSync('1-json.json', userJSON)