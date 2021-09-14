const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require("body-parser"); 
const db = require('./config/mongoose');


app.use(bodyParser.json());




app.get('/', function(req, res){
    res.send('hellow  world');
})


app.use('/api', require('./routes/product'));

app.listen(port, (err) => {
    if(err) throw err;

    console.log(`server is running on port ${port}`);
})