//imprima si el alumno aprueba la materia 
//aprueba con 60
//pero si tiene entre 50-59 imprimir un mnsj que diga El alumno NO aprueba la clase
//pero si el alumno tiene menos  de 50 imprimir un mnsj que diga porfavor estudie mas




let nota = 30;
if (nota >= 60) {
  console.log("El alumno aprueba la clase");
}else{
    if(nota<50){
        console.log('Por favor estudie más');
    }
    else{
        console.log('El alumno NO aprueba la clase')
 }
}
console.log('fin del programa');
