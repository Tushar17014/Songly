const express = require('express'); 
const {Request, Response, NextFunction} = require('express'); 
const router = require('./routes');

const app = express();
const PORT = 9028;

app.listen(PORT, (error) => {
    if(!error){
        console.log("App Started");
    }
    else{
        console.log(error);
    }
});

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
})


app.use('/apis/', router);
