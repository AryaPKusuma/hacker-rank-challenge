function stockMerchant(n, ar){
    const getUnique = [...new Set(ar)]
    const count = new Array(getUnique.length).fill(0)

    for ( let i = 0; i < count.length; i++){
        let searchUnique = getUnique[i]
        
        for ( let j = 0; j < n; j++){
            let value = ar[j]
            if ( value === searchUnique ){
                count[i]++
            }
        }
    }

    const totalPair = count.map( v => {
        return Math.floor(v / 2)
    }).reduce((a,b) => a+b)
    return totalPair
}

const ar = [1, 1, 3 ,1, 2, 1, 3, 3, 3, 3]
const n = ar.length

console.log(stockMerchant(n, ar))
