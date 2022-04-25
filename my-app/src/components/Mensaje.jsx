import React from 'react'

//los Props sirven para mandar datos de un elemento a otro, del padre al hijo solamente
const Mensaje = (props) => {
    const {dato} = props
  return (
    <div>
        <h3>hola soy {dato}</h3>
    </div>
  )
}

export default Mensaje