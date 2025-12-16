// Given an array of integers and a positive integer k,
// determine the number of (i, j) pairs where i < j and ar[i]+ar[j] is divisible by
// k

function divisibleSumPairs(n, k, ar) {
    let count = 0
    for (let i = 0; i <= ar.length; i++){
        for(let j = i+1; j <= n-1; j++){
            // console.log(`arr[${i}][${j}]`);
            let sum = ar[i] + ar[j]
            sum%k === 0 ? count++ : count+0
        }
    }

    return count
}

const n = 6, k = 3
const ar = [1, 3, 2, 6, 1, 2]

console.log(divisibleSumPairs(n, k, ar))