// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
    // const resposta = fetch('https://random-data-api.com/api/v2/users')
    // console.log(resposta)

    // const tratamentoResposta = resposta.then((res) => {
    //     console.log(res)
    //     return res.json() //JSON>parse(stringJSON) - que converte uma string JSON para um objeto ou array javascript
    // })

    // tratamentoResposta.then((data)  => {
    //     console.log(data)
    // })
    helperTextUsuario.innerText = 'Carregando...'
    fetch('https://random-data-api.com/api/v2/users')
        .then((res) => res.json())
        .then((data) => { // data foi recebida pela API
            const usuario = document.createElement('div')
            usuario.innerHTML = `
                <img src="${data.avatar}" alt="avatar do usuário"/>
                <span><strong>Username: </strong>${data.username}</span>
            `
            usuario.classList.add('usuario')
            usuariosContainer.appendChild(usuario)
            helperTextUsuario.innerText = ''
        })
        .catch((error) => {
            helperTextUsuario.innerText = 'Não foi possível gerar um usuário'
            console.log(error)
        })
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost= document.getElementById('btn-post')
const postsContainer = document.getElementById('posts-container')
const helperTextPost = document.getElementById('helper-text-post')

// 2. Funções
function gerarPost(evento){
    evento.preventDefault()

    const jsonBody = JSON.stringify({
        titulo: postTitle.value,
        mensagem: postBody.value
    })


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')

            post.innerHTML = `
            <h3>${data.id} - ${data.titulo}</h3>
            <p>${data.mensagem}</p>
            `
        //postsContainer.appendChild(post)
        postsContainer.prepend(post) // insere os posts em ordem de postagem
        
        //limpar o formulário
        postTitle.value = ''
        postBody.value = ''
        //alert('Postagem criada com sucesso!')
        })
    .catch((err) => {
        console.log(err)
        helperTextPost.innerText = `Não foi possível gerar a postagem - :(`
    })
}
// 3. Eventos
btnPost.addEventListener('click', (evento) => gerarPost(evento))