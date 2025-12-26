/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    n = n % 2 === 0 ? n + 2 : n + 1
    const ar = Array.from({ length: n }, (v, i) => i);
    ar[ar.length - 1] = 0

    let totalPage = 0
    let loop = 0

    if (p > n / 2) {
        for (let i = ar.length; i > 0; i--){
            if (loop % 2 === 0) loop++
            if (p === ar[i]) break
        }
    } else {
        for (let i = 0; i < ar.length; i++) {
            if (loop % 2 === 0) totalPage++
            if (p === ar[i]) break
            loop++
        }
    }

    return totalPage
}

const n = 5
const p = 1

console.log(pageCount(n, p))