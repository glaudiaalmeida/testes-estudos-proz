//1. CAPTURA DOS ELEMENTOS
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const produtosContainer = document.getElementById('produtos-container');
const cadastroProdutoContainer = document.getElementById('cadastro-produto-container');
const feedbackUsuario = document.getElementById('feedback-usuario');
const produtosCadastrados = document.getElementById('produtos-cadastrados');
 
//2. FUNÇÕES
function cadastrarProduto(evento){
    evento.preventDefault()
   
    const produtoJson = JSON.stringify({
        produto: nomeProduto.value,
        valor: valorProduto.value,
        descricao: descricaoProduto.value
    })
    
    fetch('https://httpbin.org/post', {
        method:'POST',
        headers: {
            "Content-Type": "aplication/json"
        },
        body: produtoJson
    })
    
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const post = document.createElement('div')
        console.log(post)
        post.classList.add('cadastro')
        console.log(post)
        post.innerHTML = `
            <h3>${data.produto}</h3>
            <p>${data.valor}</p>
            <p>${data.descricao}</p>
        `
        console.log(post)
        cadastroProdutoContainer.appendChild(post)
        //cadastroProdutoContainer.prepend(post)
        //******NÃO ESTÁ APARECENDO O POST .INNERHTML - AS VARIAVEIS APARECEM UNDEFINNED */
        console.log(post)

        //LIMPAROFORMULARIO
        nomeProduto.value = ''
        valorProduto.value = ''
        descricaoProduto.value = ''

    })
    .catch((err) => {
        console.log(err)
        helperTextPost.innerText = `Não foi possível cadastrar o produto!`
    })
}


//3. EVENTOS
btnEnviar.addEventListener('click', (evento) => cadastrarProduto(evento))

