angular.module("PostPractice").controller("mainCtrl", function($scope, mainService){

  $scope.userInput = {}  //ng model userInput is on html bind user data into our empty object that creates our


  $scope.submit = function(input){
    console.log(input);
    mainService.post(input).then(function(response){
      console.log(response);
    })
  }

});
