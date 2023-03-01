let persona1 = {
  nombre: "haru",
  edad: 5,
};

let persona2 = {
  nombre: "paul",
  edad: 6,
};
let persona3 = {
  nombre: "maria",
  edad: 2,
};

let personas = [persona1, persona2, persona3];

for(let i = 0; i < personas.length; i++){
 
  let persona = personas[i];
  console.log(`${ persona.nombre } -- ${ persona.edad }`);
}

/*let personas = ['haru', 'paul', 'maria'];
let edad = [5, 6, 2];
for (let i = 0; i <= personas.length; i++) {
  console.log(personas[i] + " -- " + edad[i]);
}*/
