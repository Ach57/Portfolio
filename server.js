const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});






app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

});
