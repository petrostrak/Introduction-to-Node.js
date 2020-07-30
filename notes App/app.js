const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Petros.')
fs.appendFileSync('notes.txt',  ` I'm 34 years old.` )