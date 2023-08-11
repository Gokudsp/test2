const express = require('express');
const fs = require('fs');
const app = express();

//text file on Middleware and concatenate the request date to text file contents and return as response.
app.use((req, res, next) => {
  const filePath = './name.txt'; 
  app.get('/name', (req, res) => {
    res.send(req.filename);
  });
  const currentDate = new Date().toISOString(); 
// First I want to read the file:
  fs.readFile(filePath, 'utf8', (err,data) => {
    console.log(filePath);
    if (err) { 
      console.error(err);
      return res.status(500).send('Internal Server Error');
    };
    const modifyContent = `${currentDate}: ${data}`;
    req.filename = modifyContent; 
    next(); 
  });
});




app.listen (3000, () => {
  console.log('Server is running ... '  +3000);
});
