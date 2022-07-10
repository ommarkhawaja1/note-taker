const fs = require('fs');
const { createNewNote, findById, deleteNote } = require('../lib/notes');
const { notesArray } = require('../db/db.json');

test('Creates a notes object', () => {
    const note = createNewNote(
        {
            title: 'test note Title',
            text: 'test note text',
            id: 'test ID'
        },
        notesArray
    );
    expect(note.title).toBe('test note Title');
    expect(note.text).toBe('test note text');
    expect(note.id).toBe('test ID');
});

test('finds note by id', () => {
    const startingNotes = [
        {
            "title": "Test Title",
            "text": "Test text",
            "id": "0"
        },
        {
            "title": "Note 1",
            "text": "note 1 text",
            "id": "1"
        },
        {
            "title": "Note 2",
            "text": "note 2 text",
            "id": "2"
        },
        {
            "title": "Note 3",
            "text": "test note text",
            "id": "3"
        },
    ]
    const result = findById('3', startingNotes);
    expect(result.title).toBe('Note 3');
});

test('deletes note object', () => {
    const testArray = notesArray;
    const testArrayLength = testArray.length;
    const endingArrayLength = deleteNote('1', testArray);

    expect(endingArrayLength).toEqual(testArrayLength - 1);
})