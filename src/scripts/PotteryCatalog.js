let toSellArray = []

export const toSellOrNotToSell = (potteryObject) => {
     
    if (potteryObject.cracked === false) {
                
        if (potteryObject.weight >= 6) { 
            potteryObject.price = 40
        } 
        else {
            potteryObject.price = 20
        }  
        toSellArray.push(potteryObject)

        return potteryObject    
    }  

}

export const usePottery = () => {
    return toSellArray
}

// is pottery cracked? 
// if cracked? do not price
// if not cracked, price based on weight
// if weight >= 6, then price = 40
// else, then price = 20
// push object to toSellArray []