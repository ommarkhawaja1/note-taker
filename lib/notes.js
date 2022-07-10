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

module.exports = {
    createNewNote,
    findById,
};
