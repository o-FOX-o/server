const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

app.get('/',(req,res) => {
    fs.readFile('./test.html','utf8',(err,data) => {
        if (err){
            console.log(`Error reading file : ${err}`);
            res.status(500).send('Internal server Error');
        } else {
            res.send(data);
            console.log('A request was received!')
        }
    });
});

app.use('/api',apiRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
// console.log(express)