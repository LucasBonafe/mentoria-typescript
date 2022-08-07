// Como podemos melhorar o esse código usando TS? 

interface pessoa {
    nome: string,
    idade: number,
    profissao: string
};

let pessoa1: pessoa = {nome: "maria", idade: 29, profissao: "atriz"},
    pessoa2: pessoa = {nome: "roberto", idade: 19, profissao: "Padeiro"},
    pessoa3: pessoa = {nome: "laura", idade: 32, profissao: "Atriz"},
    pessoa4: pessoa = {nome: "carlos", idade: 19, profissao: "padeiro"};

console.log(pessoa1, pessoa2, pessoa3, pessoa4);
