const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/greet', (req, res) => {
    const {animal = 'No-name'} = req.cookies
    res.send(`Hey There, ${animal}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ray')
    res.cookie('animal', 'dojo duck')
    res.send('Okay, Sent You a Cookie')

})

app.listen(3000, ()=>{
    console.log('Serving!')
})