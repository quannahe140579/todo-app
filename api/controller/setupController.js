var Todos = require("../models/todoModel");

module.exports = function(app){
    app.get("/api/setupTodos", function(req, res){
        var seedTodos = [
            {
                text: "Học node.js",
                isDone: false
            },
            {
                text: "Học Angular js",
                isDone: false
            },
            {
                text: "Viết ứng dụng hoàn chỉnh",
                isDone: false
            }
        ]
        Todos.create(seedTodos,function(err, result){
            if(err) throw err;
            res.send(result);
        })
    })
}