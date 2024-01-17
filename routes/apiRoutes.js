const express = require('express');
const router = express.Router();
const fs = require('fs');

function writeData(data){
    const filePath = '../server/Database/data.json';
    const newContent = JSON.stringify(data);
    console.log(newContent)
    fs.writeFile(filePath, newContent,(err) => {
        if (err){
            console.log('There was an error',err)
        } else {
            console.log("The data has been saved")
        }
    });
}

function printData(data){
    console.log(data);
}
router.post('/sendData',(req, res) => {
    const receivedData = req.body;
    printData(receivedData);
    
    res.json({message : 'the data was received from the client to the server successfully!'});
    writeData(receivedData);
})

module.exports = router;