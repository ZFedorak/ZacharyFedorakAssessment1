import makeElement from '../../utils/makeElement'
const  todolist = function (){
    const template = `
    <aside id="toDoList" class="toDoList">
    
    <ul id="todos" class="todo-item">
     
    </ul>
    
</aside>
    `

    return makeElement(template)
}

export default todolist