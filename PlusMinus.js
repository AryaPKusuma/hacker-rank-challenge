const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    const positive = arr.map( arr => arr > 0).reduce((a,b) => a + b);
    const negative = arr.map(arr => arr < 0 ).reduce((a,b)=> a+b);
    const zero = arr.map(arr => arr === 0).reduce((a,b) => a+b);

    // or Using filter and get length
    // const positive = arr.filter( arr => arr > 0).length;
    // const negative = arr.filter( arr => arr < 0).length;
    // const zero = arr.filter( arr => arr  === 0).length;

    const total = arr.length;
    
    const positiveRatio = positive / total;
    const negativeRatio = negative / total;
    const zeroRatio = zero / total;
    
    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
}

plusMinus(arr)