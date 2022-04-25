
//en este componente vamos a traer la informacion de los usuarios y crear la lista

import React from 'react'

//importamos los datos de los usuarios del archivo js

import {usuarios} from '../datos/usuarios'

//importo estilos css

import '../css/tarjetas.css'

import UserItem from './UserItem'

const UserList = () => {

console.log(usuarios)

  return (
   <div>
       {/*tarjetas*/}

    {
      usuarios.map(item=>(

        <UserItem key={item.id} item={item}/>

    ))
    }
      
    
   </div>
  )
}

export default UserList