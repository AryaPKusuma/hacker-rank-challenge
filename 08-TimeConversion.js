function timeConversion(s){
    const parts = s.split(/(?=[AP]M)/i);

    const time = parts[0].split(":")
    const period = parts[1]

    if (period === "AM" ){
        if(time[0] === '12') time[0] = '00';
    } else {
        let hour = parseInt(time[0], 10)
        
        hour === 12 ? hour += 0 : hour += 12

        time[0] = hour.toString()
    }

    return time.join(":")
}

const time = "12:01:00PM"

console.log(timeConversion(time))