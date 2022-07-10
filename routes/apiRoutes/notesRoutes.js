const router = require('express').Router();
const { createNewNote, findById } = require('../../lib/notes');
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
    req.body.id = notesArray.length.toString();
    const note = createNewNote(req.body, notesArray);
    notesArray.push(req.body);
    res.json(note);
});

module.exports = router;