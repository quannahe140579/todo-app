var app = angular.module("app.todos",['xeditable']);
app.controller("todoController",['$scope','svTodos', function($scope, svTodos){
    $scope.appName = "Todo DashBoard";
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [
      
    ];
    svTodos.get().then(function(result){
        console.log(result);
        $scope.todos = result.data;
        $scope.loading = false;
    }, function(err){
        if(err) throw err;
    })

    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        svTodos.create(todo).then(function(result){
            $scope.todos = result.data;
            $scope.formData.text = "";
            $scope.loading = false;
        })
    }
    $scope.updateTodo = function(todo){
        console.log("Update: " + todo)
        $scope.loading = true;
        svTodos.update(todo).then(function(result){
            $scope.todos = result.data;
            $scope.loading = false;
        })
    }
    $scope.deleteTodo = function(todo){
        console.log("Delete: " + todo)
        $scope.loading = true;
        svTodos.delete(todo._id).then(function(data){
            $scope.todos = data.data;
            $scope.loading = false;
        })
    }
}]);