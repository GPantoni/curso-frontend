const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end',
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end',
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer',
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario',
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end',
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end',
    },
];

//DESAFIO 1

//1.
const result = colaboradores.map((colaborador) => {
    return colaborador.name;
});
console.log(result);

//2.
const result2 = colaboradores.filter((colaborador) => {
    return colaborador.cargo == 'front-end';
});
console.log(result2);

//3.
const result3 = colaboradores.find((colaborador) => {
    return colaborador.idade > 23;
});
console.log(result3);

//4.
const result4 = colaboradores.every((colaborador) => {
    return colaborador.idade > 18;
});
console.log(result4);

//5.
const result5 = colaboradores.some((colaborador) => {
    return colaborador.cargo == 'estagiario';
});
console.log(result5);