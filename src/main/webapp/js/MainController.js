function MainController($scope) {
	
$scope.board = {
		"1-1" : "-",
		"1-2" : "-"
};

$scope.cellValue= function (valueName){
	return $scope.board[valueName];
}	
	
$scope.setValue= function (valueName,valueToSet){
	$scope.board[valueName] = valueToSet;
}



}