require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.static("public"))

app.use(express.json())


const fs = require('fs')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())

app.get('/', function(req, res){
    fs.readFile('json/items.json', function(error, data){
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

app.use(express.static('public'))

app.get('/International-Math/2021.ejs', function(req, res){
    fs.readFile('json/items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('International-Math/2021.ejs', {

                items: JSON.parse(data)
                
            })
        }
    })
})


app.get('/about.ejs', function(req, res){
    fs.readFile('json/items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('/about.ejs', {

                items: JSON.parse(data)
                
            })
        }
    })
})


app.listen(process.env.PORT || 9000)