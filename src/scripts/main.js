// Imports go first
import { firePottery } from './Kiln.js'
import { makePottery } from './PotteryWheel.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let firstObject = makePottery("mug", 1, 3)
console.log(firstObject, "original mug")

let vase = makePottery("vase", 3, 12)
console.log(vase)

let teapot = makePottery("teapot", 4, 15)
console.log(teapot)

let pitcher = makePottery("pitcher", 2, 10)
console.log(pitcher)

let planter = makePottery("planter", 5, 20)
console.log(planter)



// Fire each piece of pottery in the kiln
firePottery(firstObject, 2300)
firePottery(vase, 2199)
firePottery(teapot, 2250)
firePottery(pitcher, 2100)
firePottery(planter, 1977)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firstObject)
toSellOrNotToSell(vase)
toSellOrNotToSell(teapot)
toSellOrNotToSell(pitcher)
toSellOrNotToSell(planter)
// Invoke the component function that renders the HTML list


const potteryListElement  = document.querySelector(".potteryList")
potteryListElement.innerHTML = potteryList()