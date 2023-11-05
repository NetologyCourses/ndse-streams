const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const readline = require('readline')
const yargs = require('yargs')
const argv = yargs(process.argv.slice(2)).argv

const rl = readline.createInterface({
  input: process.stdin
})

const isNumber = value => {
  const num = Number(value)

  if (isNaN(num)) {
    console.error('You must enter a number. Try again!')
    return false
  }
  return true
}

const logger = async (isWinner) => {
  const fileName = argv['log-file']
  const pathFile = path.join(__dirname, `${fileName ?? path.parse(__filename).name}.log`)
  const data = `${new Date()} | ${isWinner}${os.EOL}`
  try {
    return fs.promises.appendFile(pathFile, data)
  } catch (e) {
    console.log(e)
  }
}

const game = () => {
  const randomValue = Math.round(Math.random()) + 1
  console.info('What you choose - heads or tails? Heads = 1 or tails = 2')

  rl.on('line', async (value) => {
    if (!isNumber(value)) return

    if (value > 2) {
      console.error('You must enter 1 or 2. Try again!')
      return
    }

    const isWinner = randomValue === value
    console.info(isWinner ? `You guessed!` : `You are mistaken!`)

    await logger(isWinner)
    rl.close()
  })
}

game()