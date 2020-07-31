const fs = require('fs')
const chalk = require('chalk')

function getNotes(notes) {
    return notes
}

function readNotes(title){
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

function listNotes(){
    const notes = loadNotes()
    console.log(chalk.green.bold('Your notes :'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

function addNote(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title already taken!'));
    }

}

function removeNote(title) {
    const notes = loadNotes()
    const matchedNote = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > matchedNote.length) {
        saveNotes(matchedNote)
        console.log(chalk.red.inverse('Note removed!'));
    } else {
        console.log(chalk.green.inverse('Nothing to remove!'));
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}