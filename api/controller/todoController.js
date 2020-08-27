var Todos = require("../models/todoModel");

function getTodos(res){
    
    Todos.find(function(err, result){
        if(err) {
            console.log(err)
            res.send(err);
        }else{
            console.log("hahaha")
            res.json(result);
        }
    });
}
module.exports = function(app){
    app.get("/api/todos", function(req, res){
        console.log('aaaa')
        getTodos(res);
    });
    app.get("/api/todo/:id", function(req, res){
        Todos.findById({_id: req.params.id}, function(err, result){
            if(err){
                throw err;
            }
            res.json(result);
        })
    });
    app.post("/api/todo",function(req, res){
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };
        Todos.create(todo, function(err, todo){
            if(err) throw err;
            getTodos(res);
        })
    });
    app.put("/api/todo", function(req, res){
        if(!req.body._id){
            res.status(500).send("ID is require");
        }else{
            Todos.update({
                _id: req.body._id
            },{
                text: req.body.text,
                isDone: req.body.isDone
            }, function(err, todo){
                if(err) throw err;
                getTodos(res);
            });
        }

    });
    app.delete("/api/todo/:id", function(req, res){
        if(!req.params.id){
            res.status(500).send("ID not found");
        }
        Todos.remove({
            _id: req.params.id
        }, function(err){
            if(err) throw err;
            getTodos(res);
        })
    })
}