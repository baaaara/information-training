document.addEventListener('DOMContentLoaded',function){
    const todoList = document.getElementById('todoList')
    loadTodos();
    function saveTodoToLocalStorage(todoText){
        let todos = JSON.parse(localStorage.getItem('todos'))||[];
        todos.push(todoText);
        localStorage.setItem('todos',JSON.stringify(todos));
        }
    function loadTodos(){
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach(todotext);
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    function loadTodos(){
        let todos = JSON.parse(localStorage.getItem('todos'))||[];
        todos.forEach(function(todo){
            addTodoToList(todo);
        });
    }
    window.addTodo=function(){
        const todoInput = document.getElementById('todoInput');
        const todoText = todoInput.ariaValueMax.trim();

        if(todoText !==""){
            addTodoToList(todotext);
            saveTodoToLocalStorage(todoText);
            todoInput.value = '';
        }else{
            
        }
    }
}