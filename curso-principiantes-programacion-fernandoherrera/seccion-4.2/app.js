/*
cree un algortimo que permita determinar la calificación en letras 
de un alumno 

Si la nota se encuentra entre 100 a 90 = A
Si la nota se encuentra entre 80 a 89 = B
Si la nota se encuentra entre 70 a 79 = C
Si la nota se encuentra entre 60 a 69 = D
Si la nota es inferior a 60 = F

*/

let nota = 12;
//let notaLetra = '';

if(nota >=90){
    console.log('Su nota es A');
}else{
    if(nota >= 80){
        console.log('Su nota es B');
    }
}
if(nota >= 70){
    console.log('Su nota es C');
}else{
    if (nota >= 60){
        console.log('Su nota es D');
    }
}
    if (nota < 60){
        console.log('Su nota es F');
    }









//console.log(nota+' es igual a ' + notaLetra);