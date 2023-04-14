const express = require('express');
const app = express();
const data = require('./data.json');
const loanRoute = require('./routes/loanRoute');

app.set('view engine', 'pug', 'ejs');
// app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.get('/', (req, res) => {
//     res.render('index', {data: data});
// });

// Use the loanRoutes for /loanList route
app.use('/', loanRoute);