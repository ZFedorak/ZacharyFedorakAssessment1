import home  from "../pages/home";
import toDoPage from "../pages/toDoPage";
import notFound from "../pages/notFound";
 
const routes = {
    "/": home,
    "/directory":toDoPage
}


const Router =  function (pathname)   {

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
       if(isValidRoute === undefined){
           app.append(notFound())
       }else{
        app.appendChild(routes[window.location.pathname]())
       }
    

}



 
export { Router}