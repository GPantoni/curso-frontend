/*  DESAFIO 1
1. Utilizando o objeto user, realize os seguintes exercícios:
    a. Desestruture e imprima no console o nome do usuário.
    b. Desestruture e imprima no console a rua.
    c. Desestruture e imprima no console os projetos.
    d. Desestruture e imprima a segunda posição da propriedade projetos.

2. Utilizado o array students realize os seguintes exercícios:
    a. Desestruture e imprima no console o primeiro elemento do array.
    b. Desestruture e imprima no console o terceiro elemento do array.
    c. Desestruture e imprima no console o nome do segundo estudante do array.
*/

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1,
    },
    projetos: ['Projeto 1', 'Projeto 2'],
};

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true },
];

//DESAFIO 1
console.log('DESAFIO 1');

//1.a.
console.log('1.a.');
let { nome } = user;
console.log(nome);

//1.b.
console.log('1.b.');
let {
    endereco: { rua },
} = user;
console.log(rua);

//1.c.
console.log('1.c.');
let { projetos } = user;
console.log(...projetos);

//1.d.
console.log('1.d.');
let {
    projetos: [, project],
} = user;
console.log(project);

//2.a.
console.log('2.a.');
let [first] = students;
console.log(first);

//2.b.
console.log('2.b.');
let [, , third] = students;
console.log(third);

//2.c.
console.log('2.c.');
let [, { name }] = students;
console.log(name);