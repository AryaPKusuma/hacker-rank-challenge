function kangaroo(x1, v1, x2, v2) {
    let kangaroo1 = x1
    let kangaroo2 = x2

    let isSame = "NO"

    for (  let i = 0; i < 10000; i++){
        if(kangaroo1 === kangaroo2) isSame = "YES"
        // or kangaroo1 === kangaroo2 ? isSame =  "YES" : isSame
        kangaroo1 += v1
        kangaroo2 += v2
    }

    return isSame
}

const x1 = 0, v1 = 2, x2 = 5,  v2 = 3;

console.log(kangaroo(x1, v1, x2, v2))