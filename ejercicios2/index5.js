const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

// DEVOLVER UN ARRAY CON LOS MAYORES DE EDAD

function devolverMayores(personas) {
const resultado = [];
personas.forEach(persona => {
    if(persona.edad >= 18) resultado.push(persona)
});
return resultado;
}

console.log(devolverMayores(personas));


//DEVOLVER EL MÁS JOVEN
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

//DEVOLVER EL MÁS MAYOR
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

console.warn("ahora con funciones flecha 🏹");

// DEVOLVER UN ARRAY CON LOS MAYORES DE EDAD
const devolverMayoresArrow = personas => {
    const resultado = [];
    personas.forEach(persona => {if(persona.edad >= 18) resultado.push(persona)});
    return resultado;
};

console.log(devolverMayoresArrow(personas));

//DEVOLVER EL MÁS JOVEN
const masJovenArrow = personas => {
    let joven = personas[0];
    personas.forEach(persona => {
        if (persona.edad < joven.edad) joven = persona;
    });
    return joven;
};

console.log(masJovenArrow(personas));

//DEVOLVER EL MÁS MAYOR
const masMayorArrow = personas => {
    let mayor = personas[0];
    personas.forEach(persona => {
        if(persona.edad > mayor.edad) mayor = persona;
    });
    return mayor;
};

console.log(masMayorArrow(personas));
