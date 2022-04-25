
//ESTRUCTURA DE REACT 

import React from "react";
import ReactDOM from "react-dom";

//importo la libreria de bootstrap instalada

//import "bootstrap/dist/css/bootstrap.min.css"

//estilos importados de forma globa;

import "./css/estilos.css"

//para poder usar modales, los menu hamburguesas, etc

import "bootstrap/dist/js/bootstrap.bundle"

//para importar un archivo de React JSX

import App from './App'

import UserContainer from "./components/UserContainer";
import Counter from "./components/Counter";

//const elemento=<h1>hola React!!!</h1>

const contenedor=document.querySelector("#root")

//ReactDOM me pide que quiero renderizar (App), y donde quiero hacerlo(contenedor)

//para poder llamar al componente que creamos en React pongo el nombre del archivo react(App) adentro de </>

ReactDOM.render(<Counter/>, contenedor)

//========================================================


// //desestructuracion de arreglos y objetos 

// const pokemones = ["Pikachu", "Charizar", "Squirtle"];

// //puedo obtener los elemntos del arreglo como si fueran variables

// const[poke1, poke2, poke3]= pokemones

// console.log(poke3, poke1)

// //OBJETO 

// const entrenador = {
//     nombre: "Ash Ketchum",
//     edad: 12,
//     pueblo: "Paleta",
//     region: "Kanto",
//   };

//   //para obtener datos de un objeto, en vez de estar llamandolos por un console.log

//   //para desestructurar objetos uso las llaves {} a diferencia de un arreglo que usaba []

//   //si tengo dos variables con el mismo nombre puedo cambiarlo, adentro de las llaves nombre + : "nombre que quiero poner"

//   const {nombre: nuevoEntrenador,edad,pueblo}=entrenador

//   console.log(nuevoEntrenador,pueblo)

//   //=========Arrow function - funciones de flecha==============//

//   //nos permite reducir un poco mas el codigo

//   //funcion anononima comun |

//   //para crear un Arrow function, le borro la palarba "function" y a la par del argumento agrego => (una flecha)

//   const elegirPokemon =(opcion)=> {
//     switch (opcion) {
//       case "1":
//         alert(`${poke1.toUpperCase()} yo te elijo!!`);
//         break;
//       case "2":
//         alert(`${poke2.toUpperCase()} yo te elijo!!`);
//         break;
//       case "3":
//         alert(`${poke3.toUpperCase()} yo te elijo!!`);
//         break;
//       default:
//         alert("Te faltan más pokemones, atrapalos ya!");
//         break;
//     }
//   };

//   //elegirPokemon(prompt('elige la opcion')) //esta funcion es de arriba

//   //============funcion de ejemplo==========//

//   //pasar de anonima a Arrow, lo mismo que la funcionn de arriba
//   //borro "function" y agrego => a la par del argumento() y tambien puedo borrarle el 'return' y las {} para reducirla mas

// const saludarEntrenador =()=>
//    `hola, soy ${nuevoEntrenador} del pueblo ${pueblo} y tengo ${edad} años, y me gustaria ser el mejor entrenador pokemon`

//    //console.log(saludarEntrenador())

//    //========funccion de ejemplo==========//

//    //para simplificar una funcion a Arrow, con un objeto dentro repito lo mismo que hice en las otras funciones
//    //pero agrego un () antes de las llaves{} del objeto

//   const presentarMaestro =()=> 
//      ({
//       nombre: nuevoEntrenador,
//       edad: edad,
//       pueblo: pueblo,
//     });
  
//   //console.log(presentarMaestro())

//   //==========operador ternario=============//
  
//   //es un condicional que nos devuelve un valor verdadero o falso

//   //funcion de ejemplo pasada a flecha

//   const pokebola=true

//   const evaluarPokebola=()=>{

//     // if(pokebola){
//     //   return "atrapaste un pokemon"
//     // }else{
//     //   return "el pokemon se te escapo"
//     // }

// //lo paso a ternario para simplificar

// //el signo ? evalua si es verdadero, los dos : evaluan si es falso

// return pokebola ? "atrapaste un pokemon" : "el pokemon se te escapo"

// //return pokebola && "atrapaste un pokemon" para evaluar solo es valor verdadero se agrega && en vez de ?

//   }

//   console.log(evaluarPokebola())




// //   const heroes=[
// //     {id:1, nombre:'Spiderman', owner:'Marvel'},
// //     {id:2, nombre:'Superman', owner:'DC'},
// //     {id:3, nombre:'Linterna Verde', owner:'DC'},
// //     {id:4, nombre:'Wolverine', owner:'Marvel'}
// // ]


