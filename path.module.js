const { log } = require('console')
const path = require('path')
console.log(path.sep)

const filePath = path.join('/constant','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'constant', 'subfolder', 'test.txt')
console.log(absolute)