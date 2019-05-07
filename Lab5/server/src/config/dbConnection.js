var mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://lenbuh:<password>@lab5-enbb8.mongodb.net/test?retryWrites=true',
    {useNewUrlParser: true}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
    console.log("Connection Succeeded");
});