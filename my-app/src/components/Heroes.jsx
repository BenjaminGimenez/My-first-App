import React from 'react'

import'../css/estilos.css'

const Heroes = (props) => {
const {heroes} = props

//eventos

const handleClick=(id)=>{

alert(`tu heroe seleccionado es ${heroes[id].nombre} y pertenece a la editoral ${heroes[id].owner}`)

}


  return (
    <div>
        <h3>Lista de heroes</h3>
        <ul>
            {heroes.map((heroe, index)=>(

                <li key={index} 
                className="item"
                onClick={()=>{handleClick(index)}}
                >

                  {heroe.nombre} - <span style={{

                    color:heroe.owner === "DC" ? "red" : "blue", //operador ternario
                    fontFamily:"fantasy",
                    backgroundColor:"gold"

                  }}>{heroe.owner}</span>

                  </li>     
                  
                  //key es la llave unica para identificar un elemento
            ))}
        </ul>
    </div>
  )
}

export default Heroes