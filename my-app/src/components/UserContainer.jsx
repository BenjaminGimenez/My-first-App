
import React from 'react'

//importo el componente user list con los daros, en el componente que se esta ejecutando para mostrarlo 

import UserList from './UserList'

const UserContainer = () => {
  return (
   <div className="container">
     <div className="row">
       <div className="co text-center mt-5">
         <h1>Lista de usuarios ♻</h1>
       </div>
     </div>
     <div className="row">
       <div className="col-12 col-md-6 offset-md-3">
             <h3>Lista con los usuarios</h3>
             <UserList/>
       </div>
     </div>
   </div>
  )
}

export default UserContainer