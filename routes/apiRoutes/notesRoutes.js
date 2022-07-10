const router = require('express').Router();
const uuid = require('uuid');
const { createNewNote, findById, deleteNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db.json');

// Get all notes
router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

// Get one note
router.get('/notes/:id', (req, res) => {
    let result = findById(req.params.id, notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// Post a note
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuid.v4();
    const note = createNewNote(req.body, notesArray);
    notesArray.push(req.body);
    res.json(note);
});

// Delete a note
router.delete('/notes/:id', (req, res) =>{
    let result = deleteNote(req.params.id, notesArray)
    if (!result) {
            res.send(404)
    }
    res.send(notesArray);
})

module.exports = router;