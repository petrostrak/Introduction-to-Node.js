const validator = require('validator')
const getNotes = require('./notes.js');
 
const message = getNotes('Suprise motherfucker!')

console.log(validator.isEmail('pit.trak@gmail.com'));
console.log(validator.isURL('https://www.google.com'))