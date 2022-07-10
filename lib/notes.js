const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

function createNewNote(body, notesArray) {
    const note = body;
    fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify({notesArray: notesArray}, null, 2)
    );
    return note;
};

//delete a note by its id
function deleteNote(id, notesArray) {
    const itemToDelete = findById(id, notesArray)
    if (itemToDelete){
            const itemIndex = notesArray.indexOf(itemToDelete);
            const startingNotes = notesArray;
            startingNotes.splice(itemIndex, 1);

            fs.writeFileSync(
                    path.join(__dirname, '../db/db.json'),
                    JSON.stringify({notesArray: startingNotes}, null, 2)
            );
            return startingNotes.length;
    } else  {
            return false;
    };
};

module.exports = {
    createNewNote,
    findById,
    deleteNote,
};
