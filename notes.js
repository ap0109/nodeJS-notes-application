const fs = require('fs');


const chalk = require('chalk')

const readNote = (title) => {
   const notes = loadNote()
   const noteToRead =  notes.find((note) => note.title === title)
   debugger
   if(noteToRead){
      //test
      console.log(chalk.green.inverse(noteToRead.body))
   }else{
      console.log(chalk.red.inverse("No Note Found"))
   }
}

const listNote = (title) => {
   const notes = loadNote();
   console.log(chalk.white.inverse('All Notes List'))
   notes.forEach((note) => {
         if(note.body.length > 0)
            console.log(note.title);
      });
}

const removeNote = (title) => {
   console.log("Remove the Note with title : "+title)
   const notes = loadNote();
   const notesToKeep =  notes.filter((note) =>  note.title !== title)
   if(notes.length > notesToKeep.length){
      saveNotes(notesToKeep);
      console.log(chalk.green.inverse('Note removed!'))
   }else{
      console.log(chalk.red.inverse('No Note Found!'))
   }
}

const addNote = (title, body) => {
   const notes = loadNote()
   const duplicateNotes =  notes.find((note) => note.title === title)
   if(!duplicateNotes){
      notes.push({
         title:title,
         body:body
      })
     saveNotes(notes)
     console.log(chalk.green.inverse("Note is added"))
   } else{
      console.log(chalk.red.inverse("Note has already takne!"))
   }
   
}

const saveNotes = (notes) => {
   const noteJSON =  JSON.stringify(notes)

   fs.writeFileSync('./notes.json', noteJSON)
}

const loadNote = () => {
   try{
      const notesBuffer =  fs.readFileSync('./notes.json');
      const notesData =  notesBuffer.toString();
      return JSON.parse(notesData);
   } catch(e) {
      return [];
   }
}

 module.exports = {
    addNote: addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote
 };