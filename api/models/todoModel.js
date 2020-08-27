var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var todoSchema = Schema({
    text: String,
    isDone: Boolean
});
var Todos = mongoose.model("Todos111", todoSchema);
module.exports = Todos;