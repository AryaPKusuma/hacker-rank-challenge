function diagonalDifferent(arr){
    let lenght = arr.length - 1;
    let primary = 0;
    let secondary = 0;
    
    for (let i = 0; i < arr.length; i++){
        primary += arr[i][i];
        secondary += arr[i][lenght]
        lenght--
    }

    if (primary > secondary) {
        return primary - secondary
    } else if (secondary > primary) {
        return secondary - primary
    } 

    return primary - secondary
}

let arr = [
    [11, 2, 4],
    [3, 5, 9],
    [2, 5, -12],
]
console.log(diagonalDifferent(arr))