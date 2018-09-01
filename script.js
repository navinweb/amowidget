define(['jquery'], function($){
    var CustomWidget = function () {
			var self = this;
			this.callbacks = {
				render: function(){
					var params = {}; //пустые данные
					var callback = function (template){ //функция обратного вызова,вызывается если шаблон загружен, ей передается объект шаблон.
					var markup = template.render(params); //
					/*
					*далее код для добавления разметки в DOM
					*/
					};
					return true;
				},
				init: function(){
					console.log('init');
					return true;
				},
				bind_actions: function(){
					console.log('bind_actions');
					return true;
				},
				settings: function(){
					return true;
				},
				onSave: function(){
					alert('click');
					return true;
				},
				destroy: function(){

				},
				contacts: {
						//select contacts in list and clicked on widget name
						selected: function(){
							console.log('contacts');
						}
					},
				leads: {
						//select leads in list and clicked on widget name
						selected: function(){
							console.log('leads');
						}
					},
				tasks: {
						//select taks in list and clicked on widget name
						selected: function(){
							console.log('tasks');
						}
					}
			};
		return this;
    };

return CustomWidget;
});
