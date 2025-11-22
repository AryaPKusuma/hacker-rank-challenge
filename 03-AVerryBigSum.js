/*
In this challenge, you need to calculate and print the sum of elements in an array, 
considering that some integers may be very large.
Function Description

Complete the  function with the following parameter(s):

arr[n]: an array of integers

Return
long the sum of the array elements
*/

const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    return ar.reduce((a, b)=> a+b)
}

console.log(aVeryBigSum(arr));