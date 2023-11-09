
const express = require('express')
const app = express()
const port = 5050
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

//routes utama dengan method GET
app.use(bodyParser.json())
app.get('/', (req, res) => {
    db.query("SELECT * FROM tbl_mhs", (error, result) =>{
        //hasil data dari mysql 
           response(200,result, "get all data from tbl_mhs", res)
    })

 
})
app.post('/login', (req, res) => {
    console.log({requestFromOutside: req.body})
    res.send('login berhasil')
  })
  app.put('/username', (req, res) => {
    console.log({updateData: req.body})
    res.send('update berhasil')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})