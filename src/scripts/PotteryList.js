import { usePottery } from "./PotteryCatalog.js";

export const potteryList = () => {
    const potteryData = usePottery()
    let html = ""

    for (const potteryDataItem of potteryData) {
        html += `<section class="pottery" id="pottery--${potteryDataItem.id}">
        <h2 class="pottery__shape">${potteryDataItem.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${potteryDataItem.weight} grams and is ${potteryDataItem.height} cm in height
        </div>
        <div class="pottery__price">Price is $${potteryDataItem.price}</div>
        </section>`
    }
        return html
}

