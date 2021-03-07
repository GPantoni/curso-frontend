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