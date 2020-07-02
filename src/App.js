import React, {Component} from 'react';// importe tambien Component para poder crear las clases extendidas de Component
import logo from './logo.svg';
import './App.css';
// Importo la navegacion, es un componente, la razon de React es que se divide por componentes sus partes
//Nota: Despues de importar componentes en la App principal, debemos de pasarlo como etiqueta html al archivo principal abajo


import {todos} from './todos.json'

// este es el archivo que maneja toda la palicacion
class App extends Component { // se importo Component para poder usar la clase
  constructor() {
    super(); // aqui le digo que herede todas las funcionalidades de react, q trae el COmponent
    this.state = {
      todos // esta variable es distinta a la de la linea del map,
      // esta es la variable global del todos.json
    }
  }

  
  render() { // recorro los todos y tambien conozco sus posiciones con la i, con un map
    const todos = this.state.todos.map((todo, i) => {
      return ( 
        
          <div className="col-md-4">
            <div className="card mt-3 "> 
              <div className="card-header"> 
               <h3> {todo.title} </h3>
               <span className="badge badge.pill badge-danger ml-2"> 
               {todo.priority}
               </span>
              </div>
              <div className="card-body"> 
               <p> {todo.description} </p>
               <p> <mark> {todo.responsible} </mark> </p>  
              </div>
            </div>
          </div>
      
      )

    })
    return (
     <div className="App">
      {/* Estos en amarilo son componentes, los importamos y luego los paso a la aplicacion principal para que se puedan mostrar */}

      <nav className="navbar navbar-dark bg-dark"> 
        <a href="" className="tet-white"> 
        TAREAS  <span className="badge badge-pill badge-light ml-2"> 
        {this.state.todos.length} 
        {/* Obtenemos la cantidad de tareas que esten agregadas */}
        </span>
        </a>

      </nav>
      <div className="container"> 
        <div className="row mt-4"> 
          {todos} 
        </div>
      </div>
        
        {/* // muestro las tareas */}
        {/* <Products /> 
        <Products />
       */}
         <img src={logo} className="App-logo" alt="logo" />
         {/* <Greeting /> */}
         {/* En los componentes podemos pasar propiedades y luego los llamamos con props en su respectivo archivo ejm */}
         {/* <Greeting propiedadSaludo="Hola"/>
         <Greeting sale="$40 OFF" />
         <Greeting /> */}
     </div>
   );
  }
}

console.log(todos)

export default App;
// Aqui importamos todos los demas componentes que tendra la aplicacion
/* Y las etiquetas o todo lo que tengan los componentes hijos se editan desde la principal,
ya que todos esos componentes hijos se estan importando en la principal, entonces no habria ningun problema
*/