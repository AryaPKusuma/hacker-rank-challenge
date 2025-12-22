function dayOfProgrammer(year){
    let leap = false
    let date = `13.09.${year}`

    // in year 1918, after 31 january was 14 ferbruary, 
    // so there was leap or additional day (14 day), if the day of prorammer is 12 september 
    // that means 12 + 14 is the day of programmer in 1918
    if (year === 1918) return date = '26.09.1918';

    if (year < 1918 && year % 4 === 0){
        leap  =  true
        return date = `12.09.${year}`
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        leap = true
        return date = `12.09.${year}`
    }
}

const year = 1918

console.log(dayOfProgrammer(year))