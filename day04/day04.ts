import * as fs from 'fs'

const REQFIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

let arr=[]
function makeArr(arr) {
    let file = 'input.txt'
    let input = fs.readFileSync(file, 'utf-8').split(/\n\s*\n/)
    input.forEach(i => {
        arr.push(i.replace(' ', '\n').replace(' ', '\n').replace(' ', '\n').replace(' ', '\n').replace(' ', '\n').replace(' ', '\n').replace(' ', '\n').replace(' ', '\n').replace(' ', '\n'))
    })
}
makeArr(arr)

function solve(arr) {
    let counter=0
    arr.forEach(a => {
        if (a.includes(REQFIELDS[0]) && 
            a.includes(REQFIELDS[1]) && 
            a.includes(REQFIELDS[2]) && 
            a.includes(REQFIELDS[3]) && 
            a.includes(REQFIELDS[4]) && 
            a.includes(REQFIELDS[5]) && 
            a.includes(REQFIELDS[6])) {
            counter+=1
        }
    })

    return counter
}

/*PART ONE*/
console.log('PART ONE ->', solve(arr))

/*RULES*/
function checkbyr(num: number) {
    if (num >=1920 && num <= 2002) {
        return true
    } else { return false }
}

function checkiyr(num: number) {
    if (num >= 2010 && num <= 2020) {
        return true
    } else { return false }
}

function checkeyr(num: number) {
    if (num >= 2020 && num <= 2030) {
        return true
    } else { return false }
}

function checkhgt(num: number, type: string) {
    if (type == 'cm') {
        if (num >= 150 && num <= 193) {
            return true
        } else { return false }
    } else if (type == 'in') {
        if (num >= 59 && num <= 76) {
            return true
        } else { return false }
    } else { return false }
}

function checkhcl(str: string) {
    let nums = '0123456789'
    let abcs = 'abcdef'
    if (str.length == 6+1) {
        if (str.includes('#')) {
            var temp=str.replace('#', '')
            for (let i=0; i<temp.length; i++) {
                if (nums.includes(temp[i]) || abcs.includes(temp[i])) {
                    /*pass*/
                } else { return false }
            }
            return true
        } else { return false }
    } else { return false }
}

function checkecl(str: string) {
    let colors = 'amb, blu, brn, gry, grn, hzl, oth'
    if (colors.includes(str)) {
        return true
    } else { return false }
}

function checkpid(str: string) {
    if (str.length == 9) {
        return true
    } else { return false }
}

function solveTwo(arr) {
    let counter=0
    arr.forEach(a => {
        if (a.includes(REQFIELDS[0]) && 
            a.includes(REQFIELDS[1]) && 
            a.includes(REQFIELDS[2]) && 
            a.includes(REQFIELDS[3]) && 
            a.includes(REQFIELDS[4]) && 
            a.includes(REQFIELDS[5]) && 
            a.includes(REQFIELDS[6])) {

                var temp = a.split('\n')
                //console.log(temp)
                for (let i=0; i<temp.length; i++) {
                    if (temp[i].includes('byr')) {
                        var tmp: any = parseInt(temp[i].split(':')[1])
                        var byr = checkbyr(tmp)
                    }
                    if (temp[i].includes('iyr')) {
                        var tmp: any = parseInt(temp[i].split(':')[1])
                        var iyr = checkiyr(tmp)
                    }
                    if (temp[i].includes('eyr')) {
                        var tmp: any = parseInt(temp[i].split(':')[1])
                        var eyr = checkeyr(tmp)
                    }
                    if (temp[i].includes('hgt')) {
                        let tmp: string = temp[i].split(':')[1]
                        if (tmp.includes('cm')) { var type='cm' }
                        else if (tmp.includes('in')) { var type='in' }
                        else { type='NaN' }
                        var hgt = checkhgt(parseInt(tmp.replace('in', '').replace('cm', '')), type)
                    }
                    if (temp[i].includes('hcl')) {
                        let tmp: string = temp[i].split(':')[1].replace(' ', '').replace('\n', '')
                        var hcl = checkhcl(tmp)
                    }
                    if (temp[i].includes('ecl')) {
                        let tmp: string = temp[i].split(':')[1].replace(' ', '').replace('\n', '')
                        var ecl = checkecl(tmp)
                    }
                    if (temp[i].includes('pid')) {
                        var tmp: any = temp[i].split(':')[1].replace(' ', '').replace('\n', '')
                        var pid = checkpid(tmp)
                    }
                }

                //console.log(byr, iyr, eyr, hgt, hcl, ecl, pid)

                if (byr==true && iyr==true && eyr==true && hgt==true && hcl==true && ecl==true && pid==true) {
                    counter+=1
                }
        }
    })

    return counter
}

console.log(solveTwo(arr))