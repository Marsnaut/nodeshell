// const fs = require('fs')
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('>')

process.stdin.on('data', async data => {
    const cmd = data.toString().trim().split(' ')

    switch (cmd[0]) {
        case 'cat':
            cat(cmd[1])
            break
        case 'pwd':
            pwd()
            break
        case 'ls':
            ls()
            break
        default:
            console.log('thats not a valid command!')
    }

})