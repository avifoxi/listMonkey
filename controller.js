function Event(sender) {
  this._sender = sender;
  this._listeners = [];
}

Event.prototype = {
  attach : function (listener) {
    this._listeners.push(listener);
  },
  notify : function (args) {
    var index;

    for (index = 0; index < this._listeners.length; index += 1) {
      this._listeners[index](this._sender, args);
    }
  }
};


function Controller(view, model) {
	var _view = view;
	var _model = model;

	_model.todoAdded.attach(function(){
		var todo = _model.todos.slice(-1)[0];
		_view.addTask(todo.task);
	});

	_model.todoRemoved.attach( function(m, index){
		_view.remove(index);
	});

	_model.todoCompleted.attach( function(m, index){
		_view.complete(index, _model.todos[index].done);
	});

	_view.addClicked.attach(function(v, text){
		var todo = new Todo(text);
		_model.add(todo);
	});

	_view.removeClicked.attach(function(v, index){
		_model.remove(index);
	});

	_view.completeClicked.attach(function(v, index){
		_model.complete(index);
	});

	_view.submitClicked.attach(function(){
		_model.submit();
	});
				
}