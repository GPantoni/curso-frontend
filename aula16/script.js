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

/*  DESAFIO 2
1. Crie uma função que pode receber qualquer número de parâmetros e imprime eles separadamente no console.
2. Crie uma função que recebe um objeto como parâmetro, desestrutura a propriedade nome desse objeto e imprime no console (realize a desestruturação nos próprios parâmetros).
3. Crie uma função que recebe dois objetos e retorna um novo objeto que  é a combinação desses dois objetos. Não utilize o método Object.assign.
4. Crie uma função que recebe dois arrays e retorna um novo array que é a concatenação desses dois arrays.
*/

//DESAFIO 2
console.log('DESAFIO 2');

//1.
console.log('1.');
const nParameters = (...rest) => {
    console.log(...rest);
};

console.log(nParameters);
console.log("Exemple: nParameters(6, '6')");
nParameters(6, '6');

//2.
let obj1 = {
    nome: 'Glauco',
    idade: 29,
};

console.log('2.');
const catchName = ({ nome }) => {
    console.log(nome);
};

console.log(catchName);
console.log('Exemple: catchName(obj1)');
catchName(obj1);

//3.
let obj2 = {
    idade: 30,
    profissao: 'Dev',
};

console.log('3.');
const fusao = (trunks, goten) => {
    return { ...trunks, ...goten };
};

console.log(fusao);
console.log('Exemple: fusao(obj1, obj2)');
console.log(fusao(obj1, obj2));

//4.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['um', 'dois', 'três', 'quatro', 'cinco'];

console.log('4.');
const fusao2 = (goku, vegeta) => {
    return [...goku, ...vegeta];
};

console.log(fusao2);
console.log('Exemple: fusao2(arr1, arr2)');
console.log(fusao2(arr1, arr2));