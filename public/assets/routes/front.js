const router = require('express').Router();
const path = require('path');
//connects the start page and notes page to our server
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
})

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
})

module.exports = router;