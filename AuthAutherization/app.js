
const express = require('express');
const app = express();

// how to set cookie and read
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => { // for set
    res.cookie('name', 'suraj', { httpOnly: true }); // Optional: secure the cookie
    res.send('Cookie has been set and we are visible');
});

app.get('/read', (req, res) => { // for read
    console.log(req.cookies); // Logs cookies to the console
    res.send('Cookies read from the request: ' + JSON.stringify(req.cookies));
});

// using bcrypt for encryption and dcription

const bcrypt = require('bcrypt');

app.get('/encrypt',(req, res)=>{
    bcrypt.genSalt(10, (err, salt)=>{
        console.log(salt) // a random number(salt)
        bcrypt.hash('Suraj7860',salt,(err,hash)=>{
            console.log(hash);
        })
    })
})

// decryption with bcrypt
app.get('/decrypt',(req, res)=>{
    bcrypt.compare('Suraj7860','$2b$10$UcGw3ZkWQ997yj/XmtPJv.w7Ypkuxzbf5Et6LWIewLo273tbO8tXS',(err, result)=>{
        console.log(result);
    })
})

// learning jsonwebtoken
const jwt = require('jsonwebtoken');

app.get('/jwt',(req, res)=>{
    let token = jwt.sign({email : 'suraj71308kumar@gmail.com'}, 'secret')
    res.cookie('token',token);
    console.log('done')
})

app.get('/readtoken',(req, res)=>{
    // console.log(req.cookies.token)
    // res.send(req.cookies.token)
    let data = jwt.verify(req.cookies.token, 'secret')
    console.log(data)
})

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});
