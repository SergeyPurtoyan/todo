//selectors
const todoInput = document.querySelector('.container form input[type=text]');
const todoButton = document.querySelector('.container form input[type=submit]');
const filterTodo = document.querySelector('.container form select');
const todos = document.querySelector('.container .todos');


//events

todoButton.addEventListener('click', addTodoFunc);
todos.addEventListener('click',checkTodoFunc);
filterTodo.addEventListener('change',filterFunc);


//functions

function addTodoFunc(e){
    e.preventDefault();
    if(!todoInput.value.trim()){
        todoInput.value = '';
        return;
    }
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const span1 = document.createElement('span');
    span1.innerText = todoInput.value;

    const span2 = document.createElement('span');
    span2.innerHTML = '<i class="fa-solid fa-check"></i>';
    span2.innerHTML += '<i class="fa-solid fa-trash"></i>';

    todoDiv.appendChild(span1);
    todoDiv.appendChild(span2);

    todos.appendChild(todoDiv);

    todoInput.value = '';


}


function checkTodoFunc(e){
    if(e.target.classList[1] === 'fa-trash'){
        const todo = e.target.parentElement.parentElement;
        todo.classList.add('fall');

        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    if(e.target.classList[1] === 'fa-check'){
        const todo = e.target.parentElement.parentElement;
        todo.classList.toggle('done');
    }
}


function filterFunc(e){
    const todos = document.querySelectorAll('.todos .todo');
    if(e.target.value === 'all'){
        todos.forEach(function(todo){
            todo.style.display = 'flex';
        });
    }else if(e.target.value === 'completed'){
            todos.forEach(function(todo){
                if(todo.classList.contains('done')) todo.style.display = 'flex';
                else todo.style.display = 'none';
            });
    }else if(e.target.value === 'uncompleted'){
        todos.forEach(function(todo){
            if(!todo.classList.contains('done')) todo.style.display = 'flex';
            else todo.style.display = 'none'
        });
    }
}