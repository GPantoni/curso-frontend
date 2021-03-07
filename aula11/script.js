const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1,
    },
    projetos: ['Projeto 1', 'Projeto 2'],
};

console.log(user.nome); //1.a.
console.log(user.endereco.rua); //1.b.
console.log(user.projetos[1]); //1.c.

console.log(user['nome']); //2.a.
console.log(user['endereco']['rua']); //2.b.
console.log(user['projetos'][1]); //2.c.

let endereco = 'endereco';
let numero = 'numero';

console.log(user[endereco][numero]); //2.d.


const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true },
];

//1.
students.forEach((elem) => {
    console.log(elem.name);
});

//2.
students.forEach((elem) => {
    if (elem.age > 20) {
        console.log(elem.name, elem.age);
    }
});

//3.
let novoArray = [];
students.forEach((elem) => {
    if (elem.scholarship) {
        novoArray.push(elem);
    }
});
console.log(novoArray);