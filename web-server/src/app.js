const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')

// Setup the handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewPath);     // views folder is default.
hbs.registerPartials(partialPath);
app.set()

// Setup static directory to serve
app.use(express.static(publicDirPath));

// app.get('', (req, res) =>{
//     res.send("<h1>Weather</h1>");
// })

// app.get('/help', (req, res) =>{
//     res.send({
//         name : "RK",
//         age: 25
//     });
// })

// app.get('/about', (req, res) =>{
//     res.send("<h1 style='color:green'>About Page</h1>");
// })

// app.get('/weather', (req, res) =>{
//     res.send({
//         forcast: "It is snowing",
//         location: 'UK'
//     });
// })

app.get('', (req, res) =>{
    res.render('index', {
        title : "Weather App",
        author: "RK"
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title : "About Me",
        author: "RK"
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        title : "How may I help you.",
        contact_no: '15645465444',
        author: "RK"
    })
})

// app.get('/help/*', (req, res) =>{
//     res.send('Help article not found');
// })
app.get('/help/*', (req, res) => {
    // res.send("404 page")
    res.render('404',{
        title: "404!",
        author: "RK",
        helptext: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    // res.send("404 page")
    res.render('404',{
        title: "404!",
        author: "RK",
        helptext: 'This is not the web page you are looking for.'
    })
})



app.listen(3000, () =>{
    console.log("Server is up on port 3000");
});