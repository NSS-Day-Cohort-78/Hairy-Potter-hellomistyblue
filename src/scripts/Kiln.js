export const firePottery = (placeholderOne, placeholderTwo) => {
    placeholderOne.fired = true
    if (placeholderTwo > 2200) { 
        placeholderOne.cracked = true
    }
    else {
          placeholderOne.cracked = false
    }

    
    return placeholderOne

}

// write function that accepts parameters
// check parameters
// update function
// return
