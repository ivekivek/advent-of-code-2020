/*PART ONE*/

import * as fs from 'fs'

let result=0
let arr = []
let file = 'input.txt'

let input = fs.readFileSync(file, 'utf-8').split('\n')

for (let i=0; i<input.length; i++) {
    arr[i] = input[i].replace('\\', '').replace('r', '').replace(' ', '').replace('\n', '').split('')
}

var i=0, k=0

while (i!=arr.length) {
    try {
        if (arr[i+1][k+3] == '.') {
            arr[i+1][k+3] = 'O'
        } if (arr[i+1][k+3] == '#') {
            arr[i+1][k+3] = 'X'
            result+=1
        }
    } catch (e) { /**/ }
    i+=1;k+=3
    if (k+3 >= 31) { k=k-31 }
}

console.log(arr)
console.log(result)

/*PART TWO*/
import * as fs from 'fs'

let result=0
let mult=1
let arr = []
let file = 'input.txt'

function makeArr() {
    let input = fs.readFileSync(file, 'utf-8').split('\n')
    for (let i=0; i<input.length; i++) {
        arr[i] = input[i].replace('\\', '').replace('r', '').replace(' ', '').replace('\n', '').split('')
    }
}

makeArr()
var i=0, k=0
while (i!=arr.length) {
    try {
        if (arr[i+1][k+1] == '.') {
            arr[i+1][k+1] = 'O'
        } if (arr[i+1][k+1] == '#') {
            arr[i+1][k+1] = 'X'
            result+=1
        }
    } catch (e) { /**/ }
    i+=1;k+=1
    if (k >= 30) { k=k-1-30 }
}

console.log(result)
mult*=result
result=0
i=0;k=0
makeArr()
while (i!=arr.length) {
    try {
        if (arr[i+1][k+3] == '.') {
            arr[i+1][k+3] = 'O'
        } if (arr[i+1][k+3] == '#') {
            arr[i+1][k+3] = 'X'
            result+=1
        }
    } catch (e) { /**/ }
    i+=1;k+=3
    if (k+3 >= 31) { k=k-31 }
}

console.log(result)
mult*=result
result=0
i=0;k=0
makeArr()
while (i!=arr.length) {
    try {
        if (arr[i+1][k+5] == '.') {
            arr[i+1][k+5] = 'O'
        } if (arr[i+1][k+5] == '#') {
            arr[i+1][k+5] = 'X'
            result+=1
        }
    } catch (e) { /**/ }
    i+=1;k+=5
    if (k+5 >= 31) { k=k-31 }
}

console.log(result)
mult*=result
result=0
i=0;k=0
makeArr()
while (i!=arr.length) {
    try {
        if (arr[i+1][k+7] == '.') {
            arr[i+1][k+7] = 'O'
        } if (arr[i+1][k+7] == '#') {
            arr[i+1][k+7] = 'X'
            result+=1
        }
    } catch (e) { /**/ }
    i+=1;k+=7
    if (k+7 >= 31) { k=k-31 }
}

console.log(result)
mult*=result
result=0
i=0;k=0
makeArr()
while (i<arr.length) {
    try {
        if (arr[i+2][k+1] == '.') {
            arr[i+2][k+1] = 'O'
        } if (arr[i+2][k+1] == '#') {
            arr[i+2][k+1] = 'X'
            result+=1
        }
    } catch (e) { /**/ }
    i+=2;k+=1
    if (k >= 30) { k=k-1-30 }
}

console.log(result)
mult*=result
console.log(mult)