const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Doc = new Schema({
    title: String,
    markdown: String,
});

module.exports.Doc = mongoose.model("Doc", Doc);