require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.static("public"))

app.use(express.json())


const fs = require('fs')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())

app.get('/index', function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('index.ejs', {

                items: JSON.parse(data)
                
            })
        }
    })
})



app.listen(9000)