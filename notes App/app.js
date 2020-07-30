const validator = require('validator')
const chalk  = require('chalk')
const yargs = require('yargs')

// Customize yargs version

yargs.version('1.1.0')

// add, remove, read, list

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        console.log('Title:', argv.body);
    }
})

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: ()=> {
        console.log('Removing a note');
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: ()=> {
        console.log('Reading a note')
    }
})

// create a list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: ()=> {
        console.log('All notes');
    }
})

yargs.parse()