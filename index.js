const arr = [1,2,3,4,5]
const arr2 = [7, 69, 2, 221, 8974] // test unit

function miniMaxSum (arr){
let min = 0, max = 0
arr.sort((a,b)=> a-b)
//sort arrays metheod

for (let i = 0; i < arr.length-1; i++){
    min += arr[i]

}

for (let j = 1; j < arr.length; j++){
    max += arr[j]
}

console.log(min, max)

}
miniMaxSum(arr2)