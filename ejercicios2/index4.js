function parImpar(numero) {
    numero % 2 === 0 ? console.log(numero, "es par") : console.log(numero, "es impar");
}

parImpar(3);
parImpar(6);

const parImparArrow = numero => numero % 2 === 0 ? console.log(numero,"es par") : console.log(numero, "es impar");

parImparArrow(7);
