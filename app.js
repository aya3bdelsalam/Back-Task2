const forecast=require("./data/forecast")
const geocode=require("./data/geocode")
const yargs=require("yargs")
const laAndLong=yargs.parse()
forecast(laAndLong.latitude ,laAndLong.longtitude,(error,data)=>{
    console.log("ERROR", error)
    console.log("DATA", data)
    if (data){
        geocode(data.nameAndCondition,(error,data)=>{
            console.log("ERROR", error)
            console.log("DATA", data)
        })
    } else{
        console.log("data entered have an error")
    }
}) 