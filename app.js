
const yargs = require('yargs');

const notes = require('./notes.js');

const command =  process.argv[2];

// Customized yargs version
yargs.version('1.1.0');

// Add, Remove, Read , List
yargs.command({
    command: 'Add',
    describe: 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command : 'Remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Remove the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'Read',
    describe : 'Read a note',
    builder : {
        title :{
            describe : "Reading the note",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command : 'List',
    describe : 'List all notes',
    handler(){
        notes.listNote()
    }
})

yargs.parse();
//console.log(yargs.argv);