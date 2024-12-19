const produtos = [
    {nome:'leite', preco: 6.99, marca: 'Tirol'},
    {nome:'suco', preco:8.99, marca: 'Prats'}
]

const stringJSON = JSON.stringify(produtos)

const arrayJS = JSON.parse(stringJSON)

console.log(arrayJS)