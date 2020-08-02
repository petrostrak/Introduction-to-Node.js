const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { resolveSoa } = require('dns')

const app =  express()
const port = process.env.PORT || 3000

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
        name: 'Petros Trak'        
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'This is a basic weather application where the user can search for a city to get the forecast',
        title: 'Help',
        name: 'Petros Trak'  
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if(error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location, 
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Petros Trak',
        msg: 'Help article not found' 
    })
})

app.get('*', (req, res) => {
    res.render('error', {  
        title: '404',
        name: 'Petros',
        msg: 'Page not found' 
    })
})

app.listen(port, () => {
    console.log('Server is up on port: ' + port);
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