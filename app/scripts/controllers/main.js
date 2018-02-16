'use strict';

/**
 * @ngdoc function
 * @name todoListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoListApp
 */
angular.module('todoListApp')
  .controller('MainCtrl', ['$scope', '$http', 'todoList', function ($scope, $http, todoList) {

    $scope.serverData = todoList.data;
    
    $scope.inputData = {
      addText : ""
    };

    $scope.add = function(text){
      if (text == null || text == "") {
        return;
      }

      $http.post('http://localhost:5000/api/todo', JSON.stringify({'text' : text})).then(function(response){
        $http.get('http://localhost:5000/api/todo').then(function(response){
          $scope.serverData = response.data;
        }).catch(function (data) {
          console.log("Error encountered");
        });

        $scope.inputData.addText = "";
      }).catch(function (data) {
        console.log("Error encountered");
      });
    };

    $scope.showInput = function(index){
      $scope.serverData[index].edit = true;
    };

    $scope.update = function(id, newText){
      if (newText == null || newText == "") {
        return;
      }
      $http.put('http://localhost:5000/api/todo/' + id, JSON.stringify({'id' : id, 'text' : newText})).then(function(response){
        $http.get('http://localhost:5000/api/todo').then(function(response){
          $scope.serverData = response.data;
        }).catch(function (data) {
          console.log("Error encountered");
        });
      }).catch(function (data) {
        console.log("Error encountered");
      });
    };

    $scope.cancel = function(index){
      $scope.serverData[index].edit = false;
      $scope.serverData[index].editText = "";
    };

    $scope.check = function(id){
      $http.delete('http://localhost:5000/api/todo/' + id).then(function(response){
        $http.get('http://localhost:5000/api/todo').then(function(response){
          $scope.serverData = response.data;
        }).catch(function (data) {
          console.log("Error encountered");
        });
      }).catch(function (data) {
        console.log("Error encountered");
      });
    };

  }]);
