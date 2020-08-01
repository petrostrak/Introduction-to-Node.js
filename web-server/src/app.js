const express = require('express')

const app =  express()

app.get ('', (req, res)=>{
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) =>{
    res.send([{
        name: 'Petros',
        age: 34
    },{
        profession: 'Web Developer',
        education: 'Mechanical Engineer'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
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
