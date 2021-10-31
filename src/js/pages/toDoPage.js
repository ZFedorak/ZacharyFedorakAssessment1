import todolist from '../components/cards/todolist'
import makeElement from '../utils/makeElement'
import {getStore} from '../redux/store'
import { todos } from '../components/cards/todoitem'
import levelHeading from '../components/ui/header'
import tagline from '../components/ui/tagline'
import button from '../components/ui/button'
const todoPage = function(){
    const page = document.createElement('div') 
    const container = todolist();
    const todoList = getStore()
    const pageHeader = levelHeading('h1', 'Zachary Fedoraks TodoList')
    const tagliner = tagline('Do not be late on yours Todos!')
    const createbutton = button('Create New Todo')
    if(todoList.length !== 0){
      const elements =  todoList.map(emp=>{
             return todos(emp) 
        })
      const ul = container.querySelector('#todos')
      elements.forEach(elm=>{
          ul.append(elm)
      })
      pageHeader.append(tagliner)

      page.append(pageHeader, createbutton ,container)
    }
    
   
    
    return page
}

export default todoPage