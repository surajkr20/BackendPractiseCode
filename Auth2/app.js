
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser') //for parse cookie
app.use(cookieParser()) // for access cookie via req.cookie

// setup of ejs
app.set('view engine', 'ejs');
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.listen(3000,(req, res)=>{
    console.log('server started at port 3000')
})