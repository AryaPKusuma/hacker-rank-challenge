function breakingRecords(scores) {
    let initHighest = scores[0]
    let initLowest = scores[0]
    
    let countHighest = 0;
    let countLowest = 0

    for ( let i = 0; i < scores.length; i++){

        let score = scores[i]

        if (initHighest < score) {
            initHighest = score;
            countHighest++
        } else if (initLowest > score){
            initLowest = score;
            countLowest++
        }
    }
    
    return [countHighest, countLowest]
}

const scores = [10,5,20,20,4,5,2,25,1]
const result = breakingRecords(scores)
console.log(result)