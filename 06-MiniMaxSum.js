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