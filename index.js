const express = require('express')
const app = express()

app.get('/greet', (req, res) => {
    res.send("Hey There!")
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ray')
    res.cookie('animal', 'dojo duck')
    res.send('Okay, Sent You a Cookie')

})

app.listen(3000, ()=>{
    console.log('Serving!')
})