import makeElement from "../../utils/makeElement"

const todos = function ({id,category, title, isComplete, endDate, endTime}) {
    const template =   `
    <li class="todos ${category}" data-key="${id}">
    <div>
        <h3 class="category-todo">${category}</h3> 
        <p class="title-todo">${title}</p>
        <p class="iscomplete-todo">${isComplete? 'Completed' : 'Not Completed'}</p>
        <p class="enddate-todo">${endDate}, ${endTime}</p>
        <div>
        <p><button class="edit-button" id="edit" >Edit</button></p>
        <p><button class="delete-button" id="delete">Delete</button></p>
        </div>
    </div>
    `
    return makeElement(template)
}

export {todos}