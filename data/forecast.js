const request=require('request')
const forecast=(latitude, longtude, callback) =>{
    const url="https://api.weatherapi.com/v1/current.json?key=bc4c3ea1c8ff4cc0938175135231105&q="+ latitude +"," +longtude
    request({url, json: true}, (error, response) => {
        if(error){
            callback ("unable to connect weather service", undefined)
        } else if (response.body.error){
            callback(response.body.error.message, undefined)
        }else{
            callback(undefined, {
                nameAndCondition: response.body.location.name + ' it is ' + response.body.current.condition.text
            })
        }
    })
    }
module.exports= forecast;