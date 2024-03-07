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

module.exports = router;