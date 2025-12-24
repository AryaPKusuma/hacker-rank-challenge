function bonAppetite(bill, k, b){
    const declineItem = bill.splice(k, 1)
    const restBill = [...bill]

    let totalSplitBill = restBill.reduce((a, b) => a+b) / 2
    let result = b - totalSplitBill 

    if ( result === 0 ) return console.log('Bon Appetit')
    return console.log(result)
}

const bill = [3, 10 ,2, 9];
const k = 1;
const b = 7

console.log(bonAppetite(bill, k, b));