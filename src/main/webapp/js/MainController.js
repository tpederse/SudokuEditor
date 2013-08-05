function MainController($scope) {
	
$scope.board = {
		"1-1" : "-"
};

$scope.cellValue= function (valueName){
	var returnValue = $scope.board[valueName];
	if(typeof returnValue != 'undefined') return returnValue;
	return '-';
}	
	
$scope.setValue= function (valueName,valueToSet){
	$scope.board[valueName] = valueToSet;
}



}