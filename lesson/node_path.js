const path = require('node:path')
const fs = require('node:fs')

console.log(path.parse(__filename))
console.log(path.join(__filename, 'example_dir', '..', '//example.txt'))

const newDir = path.join(__dirname, 'demo')

fs.mkdir(newDir, (err) => {
  if (err) throw new Error(err)
  console.log('all is ok!')
})

const filePath = path.join(__dirname, 'demo', 'demo.txt')
const fileContent = 'file content \n'

fs.writeFile(filePath, fileContent, (err) => {
  if (err) throw new Error(err)
  console.log('write file success')
});

const fileContentAppend = 'appened content \n'

fs.appendFile(filePath, fileContentAppend, (err) => {
  if (err) throw new Error(err)
  console.log('append file success')
})

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw new Error(err)
  console.log(data)
})