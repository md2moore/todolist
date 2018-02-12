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

    $scope.serverData = todoList.data.list;
    
    $scope.inputData = {
      addText : ""
    };

    $scope.add = function(text){
      if (text == null || text == "") {
        return;
      }

      $http.post('http://localhost:3000/item', JSON.stringify({'text' : text})).then(function(response){
        $scope.serverData = response.data.list;
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
      $http.put('http://localhost:3000/item/' + id, JSON.stringify({'text' : newText})).then(function(response){
        $scope.serverData = response.data.list;
      }).catch(function (data) {
        console.log("Error encountered");
      });
    };

    $scope.cancel = function(index){
      $scope.serverData[index].edit = false;
      $scope.serverData[index].editText = "";
    };

    $scope.check = function(id){
      $http.delete('http://localhost:3000/item/' + id).then(function(response){
        $scope.serverData = response.data.list;
      }).catch(function (data) {
        console.log("Error encountered");
      });
    };

  }]);
