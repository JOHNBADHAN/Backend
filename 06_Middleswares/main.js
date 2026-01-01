const express = require('express')
const app = express()
const port = 3000
const birds = require('./routes/birds')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/birds',birds)

// Midlleware 1
app.use((req, res, next) => {
    console.log(req.header)
    req.Cyclops = "YOO Cyclops";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("yooooo")
    
    next()
})

app.use((req, res, next) => {
    console.log('Crazyyy')
    req.Cyclops = "HELL YEAH";
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.Cyclops)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 