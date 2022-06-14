const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret'))

app.get('/greet', (req, res) => {
    const {animal = 'No-name'} = req.cookies
    res.send(`Hey There, ${animal}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ray')
    res.cookie('animal', 'dojo duck')
    res.send('Okay, Sent You a Cookie')

})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true})
    res.send('Ok Signed Your Fruit Cookie')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies) 
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, ()=>{
    console.log('Serving!')
})