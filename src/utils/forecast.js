const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =  'https://api.openweathermap.org/data/2.5/weather?lat='+ longitude + '&lon=' + latitude + '&appid=fb6bf32fca85aaac663b3c4dc005c1e9'

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if (response.body.cod === 400) {
            callback('Unable to find location, try another search', undefined)
        }   else {
            callback(undefined, `The temperature in ${response.body.name}, ${response.body.sys.country} now is ${(Math.round(response.body.main.temp) / 10)} Celsius. The humidity is ${response.body.main.humidity}%. The wind speed is ${response.body.wind.speed} mph.`)
        }
    })
}

module.exports = forecast