// require('dotenv').config({ path: './.env'})
const express = require('express')
const app = express()
const route = require('./routes')
const fs = require('fs')
const port = process.env.PORT || 3000

// const config = {
//   "production": {
//     "username": process.env.USERNAME2,
//     "password": process.env.PASSWORD,
//     "database": "d12v6pg0q2tgn8",
//     "host": "ec2-50-19-127-115.compute-1.amazonaws.com",
//     "dialect": "postgres",
//     "port": 5432,
//     "uri": "postgres://fuhbnvczqhenls:ff8714b5e983344917ce4ab05b8a4b9efa546783738cdc1057aacc597e99ee40@ec2-50-19-127-115.compute-1.amazonaws.com:5432/d12v6pg0q2tgn8"
//   }
// }
// fs.writeFileSync( './config/config.json',JSON.stringify(config, null, 2), 'utf8')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api', route)
app.use((err, req, res, next) => {
  console.log(`Error: ${err.message}`)
  console.log({err})
  res.json({error: err.message})
})

app.listen(port, () => {console.log(`Listening on port ${port}!`)})