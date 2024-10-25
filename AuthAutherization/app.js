
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

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});
