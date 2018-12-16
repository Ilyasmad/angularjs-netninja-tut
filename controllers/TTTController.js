myNinjaApp.controller('TTTController', ['$scope', function($scope){

  $scope.board = Array(9).fill(null);
  $scope.player = 'X';
  $scope.winner = null;
  $scope.draw = false;

  $scope.handleClick = function(index){
    if ($scope.player && !$scope.winner) {
      if (!$scope.board[index]) {
        $scope.board[index] = $scope.player;
        $scope.player = $scope.player === 'X' ? 'O' : 'X';
      }
      checkWinner();
      checkDraw();
    }
  };

  const checkWinner = function(){
    let winLines =
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];
    for (let i=0; i<winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if ($scope.board[a] && $scope.board[a] === $scope.board[b] && $scope.board[a] === $scope.board[c]) {
        alert('You Won!');
        $scope.winner = $scope.player;
      }
    }
  };

  const checkDraw = function(){
    if (!$scope.winner){
      if ($scope.board[0] && $scope.board[1] && $scope.board[2] && $scope.board[3] && $scope.board[4] && $scope.board[5] && $scope.board[6] && $scope.board[7] && $scope.board[8]) {
        $scope.draw = true;
      }
    }
  };

  $scope.reset = function(){
    $scope.board = Array(9).fill(null);
    $scope.player = 'X';
    $scope.winner = null;
    $scope.draw = false;
  };

}]);
