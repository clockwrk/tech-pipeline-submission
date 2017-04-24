let express = require('express');
let app = express();
let router = express.Router();
let bodyParser = require('body-parser');
let path = require('path');
let db = require('./server/db/index.js');
let chalk = require('chalk');
let opn = require('opn');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', require('./server/routes/index.js'));

router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res, next) {
    console.log('hit the server')
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/browser')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

db.sync()
    .then(function() {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, function() {
 
            console.log('Live at Port 3000');
            opn('http://localhost:3000');

        });
    })
    .catch(function(err) {
        console.error(chalk.red(err.stack));
    });