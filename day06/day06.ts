import * as fs from 'fs'

const result = fs.readFileSync('input.txt', 'utf-8').trimEnd().split(/\n\s*\n/)
    .map(group => 0x10000 * group.split('\n')
            .reduce((p, c) => p.filter(v => c.indexOf(v) >= 0), group.split('\n')[0].split('')).length
        + new Set(group.match(/\w/g)).size
    ).reduce((p, c) => p + c)

console.log(result, result)