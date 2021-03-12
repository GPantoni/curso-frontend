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
console.log("DESAFIO 1")
//1.
const result = colaboradores.map((colaborador) => {
    return colaborador.name;
});
console.log("1.")
console.log(result);

//2.
const result2 = colaboradores.filter((colaborador) => {
    return colaborador.cargo == 'front-end';
});
console.log("2.")
console.log(result2);

//3.
const result3 = colaboradores.find((colaborador) => {
    return colaborador.idade > 23;
});
console.log("3.")
console.log(result3);

//4.
const result4 = colaboradores.every((colaborador) => {
    return colaborador.idade > 18;
});
console.log("4.")
console.log(result4);

//5.
const result5 = colaboradores.some((colaborador) => {
    return colaborador.cargo == 'estagiario';
});
console.log("5.")
console.log(result5);


//DESAFIO 2
console.log("DESAFIO 2")
//1.a.
const result6 = colaboradores.reduce((acc, colaborador) => {
    return acc + colaborador.idade;
}, 0);
console.log("1.a.")
console.log(result6);

//1.b.
const result7 = colaboradores.reduce(
    (acc, colaborador) => {
        if (colaborador.cargo == 'front-end') {
            return {
                front_end: acc.front_end + 1,
                back_end: acc.back_end,
                designer: acc.designer,
                estagiario: acc.estagiario,
            };
        } else if (colaborador.cargo == 'back-end') {
            return {
                front_end: acc.front_end,
                back_end: acc.back_end + 1,
                designer: acc.designer,
                estagiario: acc.estagiario,
            };
        } else if (colaborador.cargo == 'designer') {
            return {
                front_end: acc.front_end,
                back_end: acc.back_end,
                designer: acc.designer + 1,
                estagiario: acc.estagiario,
            };
        } else {
            return {
                front_end: acc.front_end,
                back_end: acc.back_end,
                designer: acc.designer,
                estagiario: acc.estagiario + 1,
            };
        }
    },
    { front_end: 0, back_end: 0, designer: 0, estagiario: 0 }
);
console.log("1.b.")
console.log(result7);

// Solução eficiente feita pelo Erico:
// 
// const result7 = colaboradores.reduce(
//     (acc, colaborador) =>
//       Object.assign(acc, {
//         [colaborador.cargo]: acc[colaborador.cargo]
//           ? acc[colaborador.cargo] + 1
//           : 1,
//       }),
//     {}
//   );
//   console.log(result7);

//2.a.
const result8 = colaboradores.slice().sort((a, b) => {
    return a.idade - b.idade;
});
console.log("2.a.")
console.log(result8);

//2.b.
const result9 = colaboradores.slice().sort((a, b) => {
    return b.idade - a.idade;
});
console.log("2.b.")
console.log(result9);

// Ordem dos cargos
let ordem = {
    estagiario: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4,
};

//2.c.
const result10 = colaboradores.slice().sort((a, b) => {
    return ordem[a.cargo] - ordem[b.cargo];
});
console.log("2.c.")
console.log(result10)

//2.d.
const result11 = [...colaboradores].sort((a, b) => {
    return a['idade'] - b['idade'] || ordem[a.cargo] - ordem[b.cargo];
});
console.log("2.d.")
console.log(result11)