const fs = require('node:fs')
const path = require('node:path')

const filePath = 'package.json'
const filePathWrite = 'write.txt'
const fileContent = 'file content \n'
let fileData = ''

const readStream = fs.createReadStream(filePath)
readStream
  .setEncoding('utf-8')
  .on('data', (dataChunck) => { fileData += dataChunck })
  .on('end', () => { console.log(`file content >>> ${fileData}`) })

const writeStream = fs.createWriteStream(path.join(__dirname, 'demo', filePathWrite))
writeStream.write(fileContent)
writeStream.end()

const readStreamPipe = fs.createReadStream(filePath)
const writeStreamPipe = fs.createWriteStream(path.join(__dirname, 'demo', filePathWrite))
readStreamPipe.pipe(writeStreamPipe)