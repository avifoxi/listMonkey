document.addEventListener('DOMContentLoaded', function(){

	console.log('init');
	var view = new View({
		'add' : document.getElementById('addButton'),
		'todos' : document.getElementById('todos'),
		'submit' : document.getElementById('submit'),
		'monkey' : document.getElementById('monkey')
	});

	var list = new List();

	var controller = new Controller(view, list)

});