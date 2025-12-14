function staircase(n) {
    for (let i = 1; i <= n; i++){
        let char = ''
        for (let j = 1; j <= i; j++){
            char += '#'

        }
        console.log(char.padStart(n, ' '))
    }
}

staircase(6)

// const char = "####"

// console.log(char.padStart(10, ' '))
// console.log(char.padStart(3, ' '))