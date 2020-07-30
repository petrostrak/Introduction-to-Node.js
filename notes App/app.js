// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Petros.')
// fs.appendFileSync('notes.txt',  ` I'm 34 years old.` )
// const sum = add(5, 5)

const notes = require('./utils.js');
const getNotes = require('./notes.js');
 
const message = getNotes('Suprise motherfucker!')

console.log(message);