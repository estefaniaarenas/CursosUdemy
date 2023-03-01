// export function App(){ //ESTE TIPO DE EXPORTACIÓN INDIVIDUAL ES MÁS ORGANIZADA Y A LA HORA DE IMPORTARLA EL NOMBRE DEBE SER EXACTO AL FUNCTION COMPONENT EJEMPLO: import {App}from './HelloWorldApp';


//     return (<h1>Hola Mundo</h1>);
// }

// export default App; //CUANDO HACES UNA EXPORTAIÓN POR DEFECTO ESTAS EXPORTANDO TODOS LOS COMPONENTES QUE ESTEN EN EL ARCHIVO Y A LA HORA DE IMPORTARLO EL NOMBRE PUEDE SER ARBITRARIO EJEMPLO:import HelloWorldApp from './HelloWorldApp';



export const HelloWorldApp = () => {
  return (
    <h1>Hello world App</h1>
  );
}


