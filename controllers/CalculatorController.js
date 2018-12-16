myNinjaApp.controller('CalculatorController', ['$scope', function($scope){

  $scope.exp = "";
  $scope.result = 0;
  $scope.error = "";

  $scope.clearAll = function() {
    $scope.exp = "";
    $scope.result = 0;
    $scope.error = "";
  };

  $scope.delete = function() {
    exp = $scope.exp.slice(0, -1);
    $scope.exp = exp;
    $scope.error = "";
  };

  $scope.numbers = ["*", "/", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", ".", "0"];

  $scope.addExp = function(num) {
    $scope.exp += num;
    $scope.error = "";
  };

  $scope.evaluate = function() {
    try {
      $scope.result = eval($scope.exp);
      $scope.exp = $scope.result;
    }
    catch {
      $scope.error = 'Invalid expression';
    }
  };

}]);
