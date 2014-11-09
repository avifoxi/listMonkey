function Todo(task) {
	this.task = task;
	this.done = false;	
}

function List (todos) {
	if (!todos){
		var todos = [];
	}
	this.todos = todos;

	this.todoAdded = new Event(this);
	this.todoRemoved = new Event(this);
	this.todoCompleted = new Event(this);


	var _this = this;

	this.remove = function(index) {
		_this.todos.splice(index, 1);
		_this.todoRemoved.notify(index);

	}
	this.add = function(todo){
		_this.todos.push(todo);
		_this.todoAdded.notify()
	}
	this.complete = function(index){
		_this.todos[index].done = !_this.todos[index].done;
		_this.todoCompleted.notify(index);
	}
	this.submit = function(){
		var content = JSON.stringify(_this.todos);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'serverAddress', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		xhr.onload = function () {  
		  alert(this.responseText);
		};

		xhr.onerror = function() {
			console.log(content);
			alert('Wait! There\'s NO SERVER!!');
		}
		
		xhr.send(content);
	}
}





// 
// 