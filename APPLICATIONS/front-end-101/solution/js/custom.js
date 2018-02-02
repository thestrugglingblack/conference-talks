/*
  BOOLEANS
  ===================
  !=        NOT
  ===       EQUAL (Value and DataType)
  ==        EQUAL
  &&        AND
  ||        OR

  VARIABLE DECLARATION
  ====================
  var someVariable = "Welcome to Front-End 101"

  DATATYPES
  ====================
  "some String"                         Strings
  101                                   Integers
  ["One", "Two", "Three"]               Arrays
  {"propertyName": "Property Value"}    Object

  OPERATORS
  ====================
  /         Division
  +         Addition
  -         Subtraction
  *         Multipulcation
  %         Modulus

  CREATE FUNCTION
  ====================
  function nameOfFunction (ParametersA, ParametersB){
    //BLOCK OF CODE
    ParametersA + ParametersB
  }

  nameOfFunction(100 + 1)

*/
window.onload = function(){

//Select HTML Elements of Input, Button, List Holder
var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementById("add");//Gets
var taskList = document.getElementById("list"); //Task Holder

//New Task List item
var createNewTaskElement = function(taskString) {
	// create List Item
  var listItem = document.createElement("li");
  // input checkbox
  var checkBox = document.createElement("input");
  // label
  var label = document.createElement("label");
  // button.delete
  var deleteButton = document.createElement("button");

  //Each element needs modified
  checkBox.type = "checkBox";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  // Each element needs appending
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

	return listItem;
}


//Add a new task
var addTask = function() {
  console.log("Add Task...");
  //Create a new list item with the text from the #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTaskHolder
  taskList.appendChild(listItem);
  bindTaskEvents(listItem);
  taskInput.value = "";
}

//Delete an existing task
var deleteTask = function () {
    console.log("Delete Task...");
		//Remove the parent list item from the ul
  	var listItem = this.parentNode;
  	var ul = listItem.parentNode;

  	ul.removeChild(listItem);
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);


var bindTaskEvents = function(taskListItem) {
  	console.log("Bind List item events");
  	// select listitems chidlren
    var deleteButton = taskListItem.querySelector("button.delete");
		//bind deleteTask to delete button
 		deleteButton.onclick = deleteTask;
}
  //cycle over taskList ul list item
  for (var i = 0; i < taskList.children.length; i ++) {
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(taskList.children[i]);
  }

}
