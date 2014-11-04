function Todo(task) {
	this.task = task;
	this.done = false;	
}

function List (tasks) {
	if (!tasks){
		var tasks = [];
	}
	this.tasks = tasks;

	var _this = this;

	this.remove = function(index) {
		_this.tasks.splice(index, 1);
		view.remove(index);
	}
	this.add = function(todo){
		_this.tasks.push(todo);
		view.addTask(todo.task);
	}
	this.complete = function(index){
		_this.tasks[index].done = !_this.tasks[index].done;
		view.complete(index, _this.tasks[index].done);
	}
	this.submit = function(){
		var content = JSON.stringify(_this.tasks);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'serverAddress', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		xhr.onload = function () {  
		  view.report(this.responseText);
		};

		xhr.onerror = function() {
			console.log(content);
			view.report('Wait! There\'s NO SERVER!!');
		}
		
		xhr.send(content);
	}
}





// 
// 