const prompt = require("prompt-sync")();



function calculateBodaFare(distanceInKm){

    console.log(`${distanceInKm} ? Uko kwote?`)
    let base_fare = 50
    let chargePerKm = 15*distanceInKm
    let total_fare = base_fare + (chargePerKm)
    console.log(`ukikalia pikipiki: KES ${base_fare}`)
    console.log(`mpaka huko: KES ${chargePerKm}`)
    console.log(`Kwa jumla: KES ${total_fare}`)
}


const distance = Number(prompt("Unafika wapi, kilomita ngapi?"))
if (isNaN(distance)!== true){
    calculateBodaFare(distance)
}