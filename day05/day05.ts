import * as fs from 'fs'

function middle(begin: number, end: number) { return Math.round((end+begin)/2) }
function SOLVEROW(str: string, begin: number=0, end: number=128, len: number=0, final: number=0) {
    if (len==str.length) { return final }
    else {
        if (str[len]=='F') {
            end=middle(begin, end)-1
            final=begin
        }
        if (str[len]=='B') {
            begin=middle(begin, end)
            final=end
        }

        return SOLVEROW(str, begin, end, len+1, final)
    }
}
function SOLVECOL(str: string, begin: number=0, end: number=7, len: number=0, final: number=0) {
    if (len==str.length) { return final }
    else {
        if (str[len]=='L') {
            end=middle(begin, end)-1
            final=begin
        }
        if (str[len]=='R') {
            begin=middle(begin, end)
            final=end
        }

        return SOLVECOL(str, begin, end, len+1, final)
    }
}
function SEATID(str: string) { return SOLVEROW(str)*8 + SOLVECOL(str) }

/*PART ONE*/

let file = 'input.txt'
let result=0
let arr=[]
let input = fs.readFileSync(file, 'utf-8').split('\n')

input.forEach(i => {
    arr.push(SEATID(i))
})

let max=0
arr.forEach(a => {
    if (max<a) { max=a }
})
console.log(max)

/*PART TWO*/

arr.sort((a, b) => { return a-b })
for (let i=0; i<arr.length; i++) {
    if (arr[i]+1 != arr[i+1]) {
        console.log(arr[i]+1)
        break
    }
}