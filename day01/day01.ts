/*FIRST PART*/

import * as fs from 'fs'

let arr = []
let result
let file = 'input.txt'
let input = fs.readFileSync(file, 'utf-8').split('\n')

input.forEach(i => {
//    console.log(i)
//    console.log(typeof(i))    =>  string for each
    i = i.replace('\\', '').replace('r', '')
    arr.push(parseInt(i))
})

for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
        let sum = arr[i]+arr[j]
        if (sum == 2020) {
            result = arr[i]*arr[j]
        }
    }
}

console.log(result)

/*SECOND PART*/


import * as fs from 'fs'

let arr = []
let result
let file = 'input.txt'
let input = fs.readFileSync(file, 'utf-8').split('\n')

input.forEach(i => {
    i = i.replace('\\', '').replace('r', '')
    arr.push(parseInt(i))
})

for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
        for (let k=0; k<arr.length; k++) {
            let sum = arr[i]+arr[j]+arr[k]
            if (sum == 2020) {
                result = arr[i]*arr[j]*arr[k]
            }
        }
    }
}

console.log(result)