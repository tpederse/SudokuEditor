
$(function () {


$(".sudoku-cell").on('click', function (e) {

	
//<li><a class="cell-menu-element">6</a> </li>
	HTMLToInsert='<ul class="dropdown-menu" role="menu" aria-labelledby="sudoku-cell-selector">'
			+'</ul>';
//	HTMLToInsert= '<ul class="dropdown-menu" role="menu" aria-labelledby="sudoku-cell-selector"><li><a class="cell-menu-element" href="#" ng-click="setValue(1)">1</a> <a class="cell-menu-element" ng-click="setValue(2)">2</a><a class="cell-menu-element" ng-click="setValue(3)">3</a></li><li><a class="cell-menu-element" href="#" ng-click="setValue(4)">4</a> <a class="cell-menu-element" ng-click="setValue(5)">5</a>'
//	+'	<a class="cell-menu-element" ng-click="setValue(6)">6</a></li><li>'
//	+'	<a class="cell-menu-element" href="#" ng-click="setValue(7)">7</a> '
//	+'	<a class="cell-menu-element" ng-click="setValue(8)">8</a>'
//	+'	<a class="cell-menu-element" ng-click="setValue(9)">9</a>'
//	+' </li><li><a class="cell-menu-element-single-line text-center" ng-click="setValue('-')">-</a>'		
//	+' </li></ul>';
	var popup=$(HTMLToInsert);
	
	var line=$("<li></li>")
	value=3;
	bordCoordinate='1-1';
	link=$('<a class="cell-menu-element">'+value+'</a>');
	//link.addonklick(setSudokuvalue(bordCoordinate,value))
	link.bind("click",function(e) {
		sudokuBoardValueChanger(bordCoordinate,value,e.target);
	});
	
	link.appendTo(line);
	line.appendTo(popup);
	parent= $(e.target).parent();
	popup.appendTo(parent);
//    addline(1,2,3)
//    addline(4,5,6)
//    addline(7,8,9)
//    addNoValue()
  })


})

var sudokuBoardValueChanger= function (bordCoordinate,value,dom){
	var scope = angular.element(dom).scope();
	scope.cellValue=value;
	scope.$digest();
}