// Masalah
// Diberikan array berisi angka 1 sampai 3.
// Tentukan angka yang paling sering muncul.
// Jika frekuensi sama, pilih angka yang lebih kecil.
// arr = [1, 2, 3, 1, 2, 1]
// Output: 1

function soalNomorSatu(arr) {
    let freq = [0, 0, 0]

    arr.forEach( v => {
        freq[v - 1]++
    })

    let current = 0
    let getIndex = 0

    for (let i = 0; i < 3; i++) {
        if (current < freq[i]) {
            current = freq[i];
            getIndex = i + 1;
        }
    }

    return getIndex
}

const arr = [1, 2, 3, 1, 2, 1]
console.log(soalNomorSatu(arr))

// -------------------------------- Soal 2 ------------------------------------------
// Masalah
// Diberikan array berisi angka 1 sampai 5.
// Tentukan ID yang paling sering muncul.
// Jika ada frekuensi sama, pilih ID terkecil.
// arr = [2, 2, 3, 3, 4]
// Output: 2

const arr2 = [2, 2, 3, 3, 4]

function soalNomorDua(arr) {
    let freq = [0, 0, 0, 0, 0]
    for (v of arr) {
        freq[v - 1]++
    }

    let curentNumber = 0
    let currentIndex = 0

    for (let i = 0; i < 5; i++) {
        if (curentNumber < freq[i]) {
            curentNumber = freq[i];
            currentIndex = i + 1
        }
    }
    return currentIndex
}

console.log(soalNomorDua(arr2))

//  ============================= Soal No 3 ====================================
// Diberikan array dan angka k.
// Setiap elemen array bernilai 1 sampai k.
// Tentukan angka yang paling sering muncul.

// arr = [3, 1, 4, 4, 2, 3, 4]
// k = 4
// Output: 4

function soalNomorTiga(arr, k){
    let freq = new Array(k).fill(0)

    for ( v of arr){
        freq[v - 1 ]++
    }

    let currentValue = 0;
    let currentIndex = 0;

    for ( let i = 0; i < k; i++){
        if ( currentValue < freq[i]){
            currentValue = freq[i];
            currentIndex = i + 1
        }
        
    }

    return currentIndex
}

const arr3 = [3, 1, 4, 4, 2, 3, 4]
const k = 4
console.log(soalNomorTiga(arr3, k))

// ==================================== Soal 4 =======================
// Masalah
// Diberikan array berisi angka 1 sampai 5.
// Kembalikan semua ID yang muncul lebih dari 1 kali
// (dalam urutan menaik).
// arr = [1, 2, 2, 3, 4, 4, 5]
// Output: [2, 4]

const arr4 = [1, 2, 2, 3, 4, 4, 5]

function soalNomorEmpat(arr){
    let freq = new Array(5).fill(0);

    for ( v of arr ){
        freq[v - 1]++
    }

    let id = []
    for(let i = 0; i < 5; i++){
        if ( freq[i] > 1 ){
            id.push(i + 1);
        }
    }

    return id
}

console.log(soalNomorEmpat(arr4));

// ===================================== Soal 5 ==================================
// Diberikan array berisi angka 1 sampai 5.

// Hitung:
// frekuensi terbesar − frekuensi terkecil (yang > 0)
// arr = [1, 1, 1, 2, 3]
// frekuensi: [3,1,1,0,0]
// Output: 2

const arr5 = [1, 1, 1, 2, 3]

function soalNomorLima(arr){
    let freq = new Array(5).fill(0);
    for ( v of arr){
        freq[v - 1]++
    }

    let max = 0
    let min = Infinity

    for( let i = 0; i < 5; i++){
        if ( freq[i] > 0 ){
            if ( freq[i] > max ){
                max = freq[i]
            }
            if ( freq[i] < min){
                min = freq[i]
            }
        }
    }

    return max - min
}

console.log(soalNomorLima(arr5));