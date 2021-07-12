const { default: axios } = require('axios')
const aios = require ('axios') 

const getClima = (lat,lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c3df4f7da19c5fa5ddd14e0d222ecc19`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}