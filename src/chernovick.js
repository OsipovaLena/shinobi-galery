// function findUniq(arr) {
//
//     let obj = {}
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] in obj){
//             obj[arr[i]] = obj[arr[i]] + 1
//         } else {
//             obj[arr[i]] = 1
//         }
//     }
//
//     let min = Math.min(...Object.values(obj))
//
//     for (let key in obj){
//         if (obj[key] === min) {
//             return key
//         }
//     }
//
//     return min
// }
//
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

// const counter = (a, b) => {
//     let count = 0;
//     return () => {
//         count += a * b
//         return count
//     }
// }
//
// const newCounter = counter(2, 4)
//
// console.log(newCounter())
// console.log(newCounter())

const arr = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];
function maxNumber(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj){
            arr[i] += 1;
        } else {
            obj[arr[i]] = 1;
        }

    }

    return obj;
}

console.log(maxNumber(arr));
