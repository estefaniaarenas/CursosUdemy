//FRAGMENT: ES UN AGRUPADOR DE ELEMENTOS EN REACT PARA TENER MÁS DE UN ELEMENTO(permite tener un sin número de elementos) EN UN COMPONENTE YA QUE REACT EXIGE QUE PARA RETURNAR VARIOS ELEMENTOS SE DEBE TENER UN NODO PADRE, NO FUNCIONA BIEN TENERLO EN UN DIV PORQUE CREA UN DIV ADICIONAL AL QUE SE ESTA USANDO DE RAÍZ PARA EL RENDERIZADO, LA MANERA ADECUADA EN CON FRAGMENT EXISTEN DOS MANERAS DE HACERLO:

// OPCIÓN #01:

// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h2>Fernando</h2>
//         {/* <code>{JSON.stringify(newMessage)}</code> */}
//       <p>Subtitulo</p>
//     </Fragment>
//   );
// };

// OPCIÓN #02:

// export const FirstApp = () => {
//     return(
//         <>  //SINONIMO DE UN FRAGMENTO
//         <h2>My first App</h2>
//         <p>Subtitulo</p>
//         </> //SINONIMO DE UN FRAGMENTO
//     );
// };

import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, name} ) => {
  // console.log(props);
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {

  title:'No hay título',
  subTitle: 'soy un subtítulo',
  name: 'Estefania Arenas'
} 