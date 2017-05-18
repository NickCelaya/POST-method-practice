angular.module("PostPractice").service("mainService", function($http){

  this.post = function(input){
    return $http({
      method: "POST",
      url: "/api/test",
      data: input
    }).then(function(response){
      return response
    })
  }

})
