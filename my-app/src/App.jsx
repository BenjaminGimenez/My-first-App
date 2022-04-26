
//Estructura para React

import React from "react"; //importamos siempre para poder usar JSX
import TodoList from "./components/todo/TodoList";

//a la funcion le pongo el mismo nombre que el componente (App)

const App = ()=>{

//afuera va codigo java script (variables, funciones, etc)

    return(
    //adentro va renderizar y mostrar en el ordenador (JSX)
    //para poder renderizar varios elementos, agrego un DIV en Return y agrego los elementos dentro
      
      <TodoList/>





   
    )

}

//siempre tengo que exportar el elemento para poder usarlo

export default App