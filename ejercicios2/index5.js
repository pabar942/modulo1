const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

// devolver mayores
function devolverMayores(personas) {
const resultado = [];
personas.forEach(persona => {
    if(persona.edad >= 18) resultado.push(persona)
});
return resultado;
}

console.log(devolverMayores(personas));


//devolver más joven
function masJoven(personas) {
    let joven = personas[0];
    personas.forEach(persona => {
        if(persona.edad < joven.edad) {
            joven = persona;
        }
    });
    return joven;
}

console.log(masJoven(personas));

//devolver más mayor 
function masMayor(personas) {
    let mayor = personas[0];
    personas.forEach(persona => {
        if(persona.edad > mayor.edad) {
            mayor = persona;
        }
    });

    return mayor;
}

console.log(masMayor(personas));