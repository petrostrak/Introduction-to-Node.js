const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app =  express()

// Define paths for Express config
const publicDir  = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Petros Trak'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Petros'        
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'This is a help message',
        title: 'Help',
        name: 'Petros'  
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        location: {
            lat: 40,
            lon: -73
        },forecast: {
            msg: ''
        }
    }])
})

app.listen(3000, () => {
    console.log('Server is up on port: 3000');
})


// app.get('/help', (req, res) =>{
//     res.send([{
//         name: 'Petros',
//         age: 34
//     },{
//         profession: 'Web Developer',
//         education: 'Mechanical Engineer'
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })