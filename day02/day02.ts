import * as fs from 'fs'

function solve(input) {
    let counter=0
    for (let i=0; i<input.length; i++) {
        let policy = input[i].match(/\b([0-9]|[1-9][0-9]|100)\b-\b([0-9]|[1-9][0-9]|100)\b [a-z]: [a-z]\w+/g)[0].split(':')
        let passport = input[i].match(/\b([0-9]|[1-9][0-9]|100)\b-\b([0-9]|[1-9][0-9]|100)\b [a-z]: [a-z]\w+/g)[0].split(':')
        let tmp = policy[0].split(' ')
    
        console.log(tmp[1], passport[1][parseInt(tmp[0].split('-')[0])-1], passport[1][parseInt(tmp[0].split('-')[1])-1])
        
        if (tmp[1] === passport[1][parseInt(tmp[0].split('-')[0])-1] && tmp[1] !== passport[parseInt(tmp[0].split('-')[1])-1]) {
            counter+=1
        } else if (tmp[1] === passport[1][parseInt(tmp[0].split('-')[0])-1] && tmp[1] !== passport[parseInt(tmp[0].split('-')[1])-1]) {
            counter+=1
        }
    }
    return counter
}

let result = 0
let arr = []
let file = 'input.txt'
let input = fs.readFileSync(file, 'utf-8').split('\n')

input.forEach(i => {
    arr.push(i)
})

let array = []

arr.forEach(a => {
    let i = a.split(':')
    let policy = i[0]
    let password = i[1].replace(' ', '').replace('\n', '')
    policy = policy.split(' ')

    let counter = 0
    for (let k=0; k<password.length; k++) {
        if (policy[1] == password[k]) {
            counter+=1
        }
    }

    let nums = policy[0].split('-')
    let num1 = parseInt(nums[0])
    let num2 = parseInt(nums[1])

    if (counter >= num1 && counter <= num2) {
        array.push(a)
    }
})

console.log(solve(array))