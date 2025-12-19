function leap(year){
    // is leap year
    let leap = false

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        leap = true
    }

    return leap
}

const year = 1984

console.log(leap(year))