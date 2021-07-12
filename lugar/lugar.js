const axios = require('axios');

const getLugarLatLng = async (direccion) =>{

let encodeUrl = encodeURI(direccion)

let resp =  await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDhQPzeCWmE-SvMV2KU0wMEC6l0JunSB-s`)
if(resp.data.status === 'ZERO_RESULTS'){
    throw new Error(`No hay resultados para la ciudad ${direccion}`)
}

    let location = resp.data.results[0];
    let coors = location.geometry.location

    console.log('Direccion: ', location.formatted_address);
    console.log('lat: ',coors.lat );
    console.log('long: ', coors.lng);



return {
    direccion: location.formatted_address,
    lat: coors.lat,
    lng: coors.lng
     }
}

module.exports = {
    getLugarLatLng
}

