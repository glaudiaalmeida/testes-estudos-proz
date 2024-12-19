console.log("Trabalhando com JSON!")

const objetoJS = {
    nome: 'Luis',
    idade: 28,
    estrangeiro: true
}


console.log(objetoJS)
console.log(typeof(objetoJS))

//Falsa string JSON
const falsaStringJSON = {
    "nome": "Luis",
    "idade": 28,
    "estrangeiro": true
}

console.log(falsaStringJSON)
console.log(typeof(falsaStringJSON))

//String JSON - Forma correta de gerar uma string JSON
const stringJSON = JSON.stringify(objetoJS)
console.log(stringJSON)
console.log(typeof(stringJSON))
console.log(stringJSON.length) //porque agora não é mais um objeto - agora é uma string

//caminho inverso utilizamos o metodo parse()
//converter uma stringJSON para objeto
const parseConvertStringify = JSON.parse(stringJSON)
console.log(parseConvertStringify)
console.log(typeof(parseConvertStringify))
//aqui eu posso acessar dados pois estou com um objeto
console.log(parseConvertStringify.nome)

const produtos = [
    {
        id: 1,
        nome: 'ar condicionado',
        marca: 'gree',
        categoria: 'A',
        valor: 2880.00,
        quantidadeEstoque: 10
    },
    {
        id: 2,
        nome: 'geladeira',
        marca: 'eletrolux',
        categoria: 'D',
        valor: 5800.00,
        quantidadeEstoque: 4
    },
    {
        id: 3,
        nome: 'smart TV',
        marca: 'samsung',
        categoria: 'A',
        valor: 8200.00,
        quantidadeEstoque: 2
    }
]

const stringsJSON = JSON.stringify(produtos)
console.log(stringsJSON)

fetch('https://reqres.in/api/users', {})