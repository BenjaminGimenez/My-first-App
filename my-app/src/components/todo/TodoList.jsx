
import React,{useState} from 'react'

const TodoList = () => {

//sintaxis de useState
//entre () va el valor inicial, y por defecto y entre [] como se va a llamar la variable, y su funcion

    const[inputValue, setInputValeu]=useState('')

    const [tareas, setTareas]=useState([])

//funcionciones
   
    const handleChange=(e)=>{
     
     setInputValeu(e.target.value)
    }

    const handleSubmit=(e)=>{

        //para detener el efecto de que se refresque la pantalla

        e.preventDefault()

        //para guardar datos en un arreglo: ,,,(operador express) para decir que me traiga los datos de la funcion que esta entre []
        //y supo despues de la , el valor que quiero agregar

        setTareas([...tareas, inputValue])
        setInputValeu('')
    }

       const borrarTarea =(indice)=>{

       const tareaspendientes=[...tareas]
       tareaspendientes.splice(indice, 1)
       setTareas(tareaspendientes)
    }

  return (

   <div className="container align-item-center text-center">

       <div className="row mt-5">
           <div className="col-12 col-md-6 offset-md-3">
                 <h3>Lista de tareas</h3>
           </div>
       </div>

       <div className="row mt-3">
           <div className="col-12 col-md-6 offset-md-3">
               <form onSubmit={handleSubmit}> 
                   <input className='form-control'
                    type="text"
                    placeholder='ingresa la tarea a realizar...'
                    value={inputValue}
                    onChange={handleChange}/>
            
               </form>
               <p className='mt-2'>Tareas pendientes: {tareas.length}</p>
           </div>
       </div>
           <div className="col-12 col-md-6 offset-md-3">

               {tareas.map((tarea, index)=>{

              <div key={index} className="card mb-3">
                  <div className="card-body d-flex aling-items-center justify-content-between">

                   <span>{tarea}</span> 
                   <button className='btn btn-danger btn-sm'onClick={()=>borrarTarea(index)}>X</button>

                  </div>
               </div>
               })}

           </div>
       
   </div>
  )
}

export default TodoList