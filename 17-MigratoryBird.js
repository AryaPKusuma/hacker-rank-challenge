function migratoryBirds(arr) {
    const freq = [0,0,0,0,0,];

    for ( const v of arr){
        freq[v - 1]++
    }

    let getIndex = 0
    let low = 0

    // 1, 0, 1, 3, 1
    for (let i = 0; i < 5; i++){
        if ( freq[i] > low ){
            low = freq[i];
            getIndex = i + 1
        }
    }

    return getIndex
}

const arr = [1, 4, 4, 4, 5, 3]
console.log(migratoryBirds(arr))

