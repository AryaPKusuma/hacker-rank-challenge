/*
    You are in charge of the cake for a child's birthday.
    It will have one candle for each year of their total age.
    They will only be able to blow out the tallest of the candles.
    Your task is to count how many candles are the tallest.

    explaint: 
    Candle heights are 3 2 1 3. The tallest candles are 3 units, and there are 2 of them.
*/


function birthdayCakeCandles(candles) {
    let result = 0;
    const sortCandles = [...candles].sort((a,b) => b-a);

    for (let current = 0; current < sortCandles.length; current++){ 
        // console.log("current value", sortCandles[current], " Next: ", sortCandles[current+1])
        if (sortCandles[current] > sortCandles[current+1] || current === sortCandles.length-1 ) {
            result++;
            break;
        }
        result++;
    }

    return result
}

const candles = [4,4,2,1,]

console.log(birthdayCakeCandles(candles))


