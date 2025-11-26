/*
arr = [1,2,3,4,5]
The numbers are 1,2,3,4 and 5 Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 2+3+4+5 = 14.
Sum everything except 2, the sum is 1+3+4+5 = 13
Sum everything except 3, the sum is 1+2+4+5 = 12.
Sum everything except 4, the sum is 1+2+3+5 = 11
Sum everything except 5, the sum is 1+2+3+4 = 10.

Output minimum_value maximum_value
return 10  14
*/

function miniMaxSum(arr) {
    let result = []
    
    for (let i = 0; i < arr.length; i++){
        let temp = arr.filter((element, index) => index !== i);
        let sum = temp.reduce((a,b)=> a+b);
        result = [...result, sum];
        sum = 0;
    }

    result.sort((a,b)=> a-b)
    
    return [result.at(0), result.at(-1)]
    // console.log(result.at(0), result.at(-1))
}

let arr = [1,2,3,4,5]
console.log(miniMaxSum(arr));