const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')
const helperTextPost = document.getElementById('helper-text')


function cadastrarProduto(evento) {
    const resposta = fetch('https://httpbin.org/post')
    console.log(resposta)
    // const tratamentoResposta = resposta.then((res) => {
    //     console.log(res)
    //     return res.json() //JSON>parse(stringJSON) - que converte uma string JSON para um objeto ou array javascript
    // })

    // tratamentoResposta.then((data)  => {
    //     console.log(data)
    // })
}
//     helperTextPost.innerText = 'Cadastrando ...'
//     fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: jsonBody
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         const post = document.createElement('div')
//         post.classList.add('Produto')
//         post.innerHTML = `
//             <h3>${data.id} - ${data.nomeProduto}
//         `

//     })
//}        

// 3. Eventos
btnEnviar.addEventListener('click', (evento) => gerarPost(evento))