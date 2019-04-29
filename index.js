require('dotenv').config({ path: './.env'})
const express = require('express')
const app = express()
const route = require('./routes')
const fs = require('fs')
const port = process.env.PORT || 3000

const config = {
  "development": {
    "username": process.env.USERNAME2,
    "password": process.env.PASSWORD,
    "database": "RESTAPI",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
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