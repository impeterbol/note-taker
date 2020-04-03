let notes = require('../db/db.json')

module.exports = function (app) {
    // Displays all tables

    app.get("/api/notes", function (req, res) {
        console.log(notes)
        // these ... returns a reservations array as a string and then returns waitlist array as a string
        //then combines these to strings into a new array to have a full display list
        return res.json(notes);
    });


    // Create New Characters - takes in JSON input
    app.post("/api/notes", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newNote = req.body;

        newNote.id = notes[notes.length - 1].id + 1

        notes.push(newNote)

        res.sendStatus(200)

    });

    app.delete("/api/notes/:id", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var delId = parseInt(req.params.id);
        // will return items only if true 
        notes = notes.filter(function (note) {
            if (note.id === delId) {
                return false
            }
            return true
        })
        res.sendStatus(200)
    });
}

