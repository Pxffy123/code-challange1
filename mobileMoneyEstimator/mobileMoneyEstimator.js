const prompt = require("prompt-sync")();


function estimateTransactionFee(amountToSend){
    maximum_fee = 70
    minimum_fee = 10
    transcationCost = amountToSend*1.5
    totalamount = transcationCost+amountToSend
    console.log(`sending KES ${amountToSend}`)
    if (transcationCost>=maximum_fee){
        console.log(`Calculated Transaction fee: KES ${maximum_fee}`)
    }else{ if (transcationCost<=minimum_fee){

        console.log(`Calculated Transaction Fee: KES ${minimum_fee}`)
    }else{
        console.log(`Calculated Transaction fee: KES ${transcationCost}`)
        console.log(`Total amount to be debited: KES ${totalamount}`)
    }

    }  


}

const moneyz = Number(prompt("How much money do you wish to send??"))

if (isNaN(moneyz)!== true){

    estimateTransactionFee(moneyz)
}else{ 
    console.log("Incorrect value")
    

}