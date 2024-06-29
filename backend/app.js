const express = require('express');
const router = express.Router();

const app = express();
const PORT = 9028;

app.listen(PORT, (error) => {
    if(!error){
        console.log("Success");
    }
    else{
        console.log(error);
    }
});

app.get('/', (req, res) => {
    res.send("GET REQU");
})