import levelHeading from '../components/ui/header'
import tagline from '../components/ui/tagline'
import link from '../components/ui/link'
const indexPage = function(){
    const page = document.createElement('div')
    const ToDoListLink = link("Todo List", '/directory')
    const pageHeader = levelHeading('h1', 'Zachary Fedoraks TodoList')
    const tagliner = tagline('Do not be late on your Todos!')

    pageHeader.append(tagliner, ToDoListLink)
    page.append(pageHeader)

    return page
}

export default indexPage