// Design a reusable form component that meets the following requirements:

// > The initial state should be an empty input box, and an ADD button.
// > If the user enters input text to the box, clicking ADD should add that text to a list.
// > There should be a way to delete a list element.
// > On form submit, the list elements should be submitted as an array.

// Please use only straight HTML, CSS, and Javascript. Do not use any CSS frameworks or external Javascript libraries.

// Feel free to include additional interactions as you see fit. Style to taste. Have fun!

// Please zip up your solution before you upload.*

document.addEventListener('DOMContentLoaded', function(){

	console.log('init');
	view = new View({
		'add' : document.getElementById('addButton'),
		'todos' : document.getElementById('todos'),
		'submit' : document.getElementById('submit'),
		'monkey' : document.getElementById('monkey')
	});

	list = new List();

});