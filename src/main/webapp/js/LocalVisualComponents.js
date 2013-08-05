
$(function () {

$(document).on('click.dropdown.data-api',function (e){
	$(".dropdown-menu").each(function () {
		this.remove();
	})
	
})


$(document).on('click',".sudoku-cell" ,function (e) {

	$(".dropdown-menu").each(function () {
		this.remove();
	})
	
	HTMLToInsert='<ul class="dropdown-menu" role="menu" aria-labelledby="sudoku-cell-selector">'
			+'</ul>';

	var popup=$(HTMLToInsert);
	
	parent= $(e.target).parent();
	
	bordCoordinate=parent.attr("name");
	var addValueToLine= function (value){
		link=$('<a class="cell-menu-element">'+value+'</a>');
		//link.addonklick(setSudokuvalue(bordCoordinate,value))
		link.bind("click",function(e) {
			sudokuBoardValueChanger(bordCoordinate,value,e.target);
		});
		link.appendTo(line);
	}
	var line=$("<li></li>")
	addValueToLine(1);
	addValueToLine(2);
	addValueToLine(3);
	line.appendTo(popup);
	line=$("<li></li>")
	addValueToLine(4);
	addValueToLine(5);
	addValueToLine(6);
	line.appendTo(popup);
	line=$("<li></li>")
	addValueToLine(7);
	addValueToLine(8);
	addValueToLine(9);
	line.appendTo(popup);
	popup.appendTo(parent);
	return false;
//    addline(1,2,3)
//    addline(4,5,6)
//    addline(7,8,9)
//    addNoValue()
  })


})

var sudokuBoardValueChanger= function (bordCoordinate,value,dom){
	var scope = angular.element(dom).scope();
	scope.setValue(bordCoordinate,value);
	scope.$digest();
}