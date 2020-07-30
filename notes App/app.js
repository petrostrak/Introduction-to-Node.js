const validator = require('validator')

const chalk  = require('chalk')
const log = console.log
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const success = chalk.bold.green

// const getNotes = require('./notes.js');
 
// const message = getNotes('Suprise motherfucker!')

// console.log(validator.isEmail('pit.trak@gmail.com'));
// console.log(validator.isURL('https://www.google.com'))

log(chalk.green.underline.bold('Success') + chalk.red('!'))
log(success('Success!'))