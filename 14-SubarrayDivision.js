function birthday(s, d, m) {
    
    let count = 0

    for (let i = 0; i < s.length; i++){
        let slice = s.slice(i, m+i)
        if ( slice.length !== m ) {
            break
        } else if ( slice.reduce( (a,b) => a+b) === d ){
            count++
        }
    }

    return count
}

const s = [1, 2, 1, 3, 2]
const d = 3
const m = 2

// .reduce((a,b) => a+b);

// let count = s.slice(0, m+0).reduce((a,b) => a+b);
// console.log(count)

// count = s.slice(1, m+1).reduce((a,b) => a+b);
// console.log(count)

// count = s.slice(2, m+2)
// console.log(count.length === m)

console.log(birthday(s, d, m))