const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

// app.get('', (req, res) =>{
//     res.send("<h1>Weather</h1>");
// })

app.get('/help', (req, res) =>{
    res.send({
        name : "RK",
        age: 25
    });
})

app.get('/about', (req, res) =>{
    res.send("<h1 style='color:green'>About Page</h1>");
})

app.get('/weather', (req, res) =>{
    res.send({
        forcast: "It is snowing",
        location: 'UK'
    });
})

app.listen(3000, () =>{
    console.log("Server is up on port 3000");
});