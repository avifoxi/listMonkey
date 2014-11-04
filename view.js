function View(els) {
	this.addButton = els['add'];
	this.todos = els['todos'];
	this.submit = els['submit'];
	this.monkey = els['monkey'];
	
	var _this = this;

	this.addButton.addEventListener('click', function(){
		var input = document.querySelector('input');
		var text = input.value;
		if (text !== '') {
			var todo = new Todo(text);
			list.add(todo);
			_this.monkeyShake();
		}
		input.value = '';		
	});	
	
	this.todos.addEventListener('click', function(e){
		var t = e.target;
		if (t.tagName === 'A'){
			_this.parseCommand(t);
		}
	});
	
	this.submit.addEventListener('click', function(){
		list.submit();
	});	
}

View.prototype = {
	addTask : function(task){
		var todo = document.createElement('li');
		todo.classList.add('todo');
		todo.innerText = task;
	
		var ui = document.createElement('span');
		ui.classList.add('controls')
		ui.innerHTML = ' <a href="#">&#10003</a> / <a href="#">x</a> ' 
		todo.appendChild(ui);
		this.todos.appendChild(todo);
	},
	parseCommand : function(target) {
		var todo = target.parentElement.parentElement;
		var todos = document.getElementsByTagName('li');
		var index = Array.prototype.indexOf.call(todos, todo);
		var command = target.innerText;
		if (command === 'x'){
			list.remove(index);
		} else {
			list.complete(index);
		}
	}, 
	remove : function (index){
		var ul = document.getElementsByTagName('ul')[0];
		var li = document.getElementsByTagName('li')[index];
		ul.removeChild(li);
	}, 
	complete : function (index, complete) {
		var li = document.getElementsByTagName('li')[index];
		if (complete){
			li.classList.add('complete');
		} else {
			li.classList.remove('complete');
		}
	},
	report : function (text){
		alert(text);
	},
	monkeyShake : function() {
		var m = this.monkey;
		m.classList.add('shake');
		setTimeout(function(){
			m.classList.remove('shake');
		}, 800);
	}
}

