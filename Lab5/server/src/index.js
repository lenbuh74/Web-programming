// console.log("Hello World");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const config = require('./config/config');
require('./config/dbConnection');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes/routes')(app);


// app.get('/', (req, res) => {
//     res.send(
//         [{
//             title: "Docs",
//             description: "null"
//         }]
//     )
// });

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`));