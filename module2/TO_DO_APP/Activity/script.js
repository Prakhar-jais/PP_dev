let add_todo = document.querySelector('.add-todo');
let todo_text = document.querySelector('.todo-input');
let todo_list = document.querySelector('.todo-list-container');

todo_text.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        addtodo();
    }
    
});

add_todo.addEventListener("click",function(){
    addtodo();

});


function addtodo()
{
   let todo_text_input = todo_text.value ;
    if(todo_text_input)
    {
        todoList(todo_text_input);
    }
    todo_text.value = "" ;

}

function todoList(todo){
    let first_div = document.createElement('div');
    first_div.classList.add('todo-item');

    let para = document.createElement('p');
    para.classList.add('todo');
    para.textContent = todo;
    let del_but = document.createElement('button');
    del_but.classList.add('delete-todo');
    del_but.textContent="Delete";

    del_but.addEventListener("click", delete_Todo);
    
    
    first_div.append(para);
    first_div.append(del_but);
    todo_list.append(first_div);
    

}

function delete_Todo(e){
    e.target.parentNode.remove();
    
}