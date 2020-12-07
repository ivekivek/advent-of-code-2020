import * as fs from 'fs'

let result = 0
let arr = []
let file = 'input.txt'
let input = fs.readFileSync(file, 'utf-8').split('\n')

input.forEach(i => {
    arr.push(i)
})

arr.forEach(i => {
    i = i.split(':')
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
        result+=1
    }
})

console.log(result)