
//Estructura para React

import React from "react"; //importamos siempre para poder usar JSX
import Heroes from "./components/Heroes";

import Mensaje from "./components/Mensaje";

import { heroes } from "./datos/datos";

//a la funcion le pongo el mismo nombre que el componente (App)

const App = ()=>{

    const nombre = "Pepito"
    //afuera va codigo java script (variables, funciones, etc)

    return(
    //adentro va renderizar y mostrar en el ordenador (JSX)
    //para poder renderizar varios elementos, agrego un DIV en Return y agrego los elementos dentro

    <div>

        <h1>Soy un componente</h1>
        <Mensaje dato={nombre}/>
        <Heroes heroes={heroes}/>
    </div>
    )

}

//siempre tengo que exportar el elemento para poder usarlo

export default App