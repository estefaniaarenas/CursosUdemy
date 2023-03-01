import React from "react"; //IMPORTACIÓN DE REACT
import ReactDOM from "react-dom/client"; //ALGÚN TIPO DE HERRAMIENTA PARA EL RENDERIZADO 
// import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';
// function App(){
     
//     return(<h1>Hola Mundo</h1>); //COMPONENTE INICIAL, para efectos de este ejercicio el primer componente se coloco en este mismo archivo pero normalmente va en un archivo diferente al MAIN.JSX
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//      <React.StrictMode>
//         <HelloWorldApp />
//      </React.StrictMode>
//RENDERIZADO DEL PROYECTO 
// );

ReactDOM.createRoot(document.getElementById('root')).render(

      <React.StrictMode>
      <CounterApp value={100}/> 
      {/* <FirstApp title="Hola, soy oso"/> */}
      
      </React.StrictMode>


);