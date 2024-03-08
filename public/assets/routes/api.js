const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', function(err, data){
        if(err){
            console.error(err)
        }else res.send(JSON.parse(data));
    });
})

// pushes notes in the specific format to db.json after retrieving and parsing it ourselves
router.post('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('db/db.json'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    data.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(data));
    res.json(data);
})
//gets the data from db.json and filters out the deleted item via its id
router.delete('/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json');
    let parsedData = JSON.parse(data);
    const newNotes = parsedData.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes))
    res.json("Note deleted.");
});

module.exports = router;