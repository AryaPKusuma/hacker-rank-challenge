/*
Given an array of integers, find the sum of its elements.
For example, if the array ar=[1,2,3]. 1+2+3 so return 6.
Function Description
Complete the  function with the following parameter(s):
*/

function simpleArraySum(ar) {
    return ar.reduce((a,b) => a + b);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))