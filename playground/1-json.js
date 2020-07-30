const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON) 
// console.log(data.title);

// Read and convert to Object
const readFS = fs.readFileSync('1-json.json').toString()
const parsedData = JSON.parse(readFS)

// Change values to our Object
parsedData.name = "Petros Trakadas"
parsedData.age = 35

// Convert again to json and write
const personJSON = JSON.stringify(parsedData)
fs.writeFileSync('1-json.json', personJSON)