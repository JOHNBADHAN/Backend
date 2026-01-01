const express = require('express')
const blog = require('./routes/blog')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("This is a get request");
    
    res.send('Hello World Get!')
}).post('/', (req, res) => {
    console.log("This is a post request");
  res.send('Hello World Post!')
}).put('/', (req, res) => {
    console.log("This is a put request");
  res.send('Hello World Put!')
})


app.get('/index', (req, res) => {
    console.log("This is a put request");
  res.sendFile('templates/index.html', {root: __dirname})  //To Render HTML Page
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Tony"] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
