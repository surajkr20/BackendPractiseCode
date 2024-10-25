
const express = require('express');
const app = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// public folder path
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));

// setup ejs as view engine
app.set('view engine', 'ejs');

app.get('/',(req, res) =>{
    res.render('index');
})

app.get('/profile/:username',(req, res)=>{
    res.send(req.params.username)
})

app.get('/profile/:username/:age',(req, res)=>{
    res.send(`wecome ${req.params.username} age ${req.params.age}`)
})

app.listen(3000, ()=>{
    console.log('server started at port number 3000')
})