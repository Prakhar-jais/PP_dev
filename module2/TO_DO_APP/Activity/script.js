let add_todo = document.querySelector('.add-todo');
let todo_text = document.querySelector('.todo-input');


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
        console.log(todo_text_input);
    }
    todo_text.value = "" ;

}