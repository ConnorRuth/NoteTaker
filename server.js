const express = require('express');
const api = require('./public/assets/routes/api');
const front = require('./public/assets/routes/front');
const PORT = process.env.PORT || 3001;

const app = express();
//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use('/',front);
app.use('/api',api);


app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`)
})