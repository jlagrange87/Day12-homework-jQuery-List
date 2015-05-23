$(document).on("ready", start);
//↑↑↑ short hand for ↓↓↓↓
// document.querySelectorAll(document).addEventListener("ready")

function start(e){
	var $inputBox = $("#todo-input");
	var $inputButton = $("#todo-button");
	var $todoForm = $("#todo-form");
	var $list = $("#list")
	var $clear = $("#clear");
	var $li = $("li");
	var list = [];
	$todoForm.on("submit", addTodo);
	$clear.on("click", clear);
	$list.on("click", cross);

	function addTodo(e){
		e.preventDefault();
		if ($inputBox.val() == ""){
		alert("Please type something!");
		}
		else{
		list.push($inputBox.val());
		$inputBox.val("")
		var listHtml = render(list);
		$list.html(listHtml);
		}
	}

	function render(todoList){
		return "<ul><li>"+todoList.join("</li><li>")+"</li></ul>";
	}
	function clear(e){
	list = [];
	$list.html("");
}

	function cross(e){
	e.target.style.textDecoration = "line-through"
	e.target.style.fontSize = "15px";
}

}

