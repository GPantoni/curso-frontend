/*
Desafio

1. Com o auxílio da função setTimeout crie três promises, duas que resolvem e uma que rejeita, o que essas promises retornarão será uma string de sua escolha.

2. Construa uma função assíncrona com tratamento de erros que executará todas as três promises criadas no exercício 1 e imprimirá suas respostas.

3. Construa uma função assíncrona com tratamento de erros que executará as duas promises que resolvem criadas no exercício 1 e imprimirá suas respostas, além disso deverá ter um bloco finally que imprime no console "Final da execução".
*/
console.log('DESAFIO');

//1.
console.log('1.');
const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p1 resolvido com sucesso');
        }, 3000);
    });
};
console.log(p1);

const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p2 resolvido com sucesso');
        }, 2000);
    });
};
console.log(p2);

const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('p3 rejeitado');
        }, 1000);
    });
};
console.log(p3);

//2.
async function func1() {
    console.log('2.');
    console.log('Inicio da execução');
    try {
        const resposta = await Promise.all([p1(), p2(), p3()]);
        console.log(resposta);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Final da execução');
    }
}

//3.
async function func2() {
    console.log('3.');
    console.log('Inicio da execução');
    try {
        const resposta = await Promise.all([p1(), p2()]);
        console.log(resposta);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Final da execução');
    }
}

//Execução
const executar = async () => {
    await func1();
    func2();
}

executar()