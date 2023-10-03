


export async function renderderizaUsers(render, pegarResultsUsers, main) {

    const obj = Object.entries(pegarResultsUsers)

    obj.map((user, index) => {
        render.innerHTML += `
        <div class="users" key=${index}>
           <button class="acessarPerfil" id=${user[1].id}>
               ${user[1].username}   
           </button>
        </div>
        `
    })

    const botaoAcessar = document.querySelectorAll('.acessarPerfil');

    botaoAcessar.forEach((botao) => inicializarEvento(botao, main, obj))
}


async function renderiza(abas, obj, idDoBotao) {

    let enderecos = Object.entries(obj[idDoBotao][1].address)
    let trabalho = Object.entries(obj[idDoBotao][1].company)

    enderecos.map((user, index) => {

        abas[1].innerHTML += `
                      <li key=${index}>${user}</li>
                   `
    })

    trabalho.map((user, index) => {

        abas[2].innerHTML += `
               <li key=${index}>${user}</li>
            `
    })

}


function inicializarEvento(botao, main, obj) {

    let idDoBotao = botao.id - 1

    botao.addEventListener('click', async () => {

        main.innerHTML += `
            <div class="card-individual" key=${idDoBotao}>
                <div class="nome-user">
                   <input class="fechar-card" type="button">
                   <h1>${obj[idDoBotao][1].name}</h1><h3>${obj[idDoBotao][1].username}</h3>          
                </div>
                <div class="botoes">
                   <input class="bt-card" type="button" value="contato">
                   <input class="bt-card" type="button" value="endereco">
                   <input class="bt-card" type="button" value="trabalho">
                </div>
                 
                <ul class="aba">
                   <li>${obj[idDoBotao][1].email}</li>
                   <li>${obj[idDoBotao][1].website}</li>
                   <li>${obj[idDoBotao][1].phone}</li>
                </ul>
            
                <div class="aba fechado">
                   <ul>   
                      
                   </ul>
                </div>
                <div class="aba fechado">
                   <ul>
                      
                   </ul>
                </div> 

            </div>
            `


        const botoesDocard = document.querySelectorAll('.bt-card');
        const abas = document.querySelectorAll('.aba');

        await renderiza(abas, obj, idDoBotao)

        botoesDocard.forEach((botao, index) => {

            botao.addEventListener('click', () => {

                botoesDocard.forEach(botao => {

                    botao.classList.remove('selecionado')
                })

                abas.forEach(aba => {

                    aba.classList.add('fechado');
                })

                botoesDocard[index].classList.add('selecionado');
                abas[index].classList.remove('fechado');
            })
        })


        const fecharCard = document.querySelector('.fechar-card');

        fecharCard.addEventListener('click', () => {

            const main = document.querySelector('main');
            const cartao = document.querySelector('.card-individual');

            main.removeChild(cartao)

            inicializarEvento(botao, main, obj)
        })

    })
}


export function renderizaPostagens(portal, pegarResultsPosts, pegarResultsComments) {

    const objPosts = Object.entries(pegarResultsPosts)
    const objComments = Object.entries(pegarResultsComments)

    console.log('comentarios', objComments)

    console.log('oque vem?:', objComments[1][1].postId)



    objPosts.map((postData) => {

        portal.innerHTML += `
      <div class="post-card" index=${postData[1].id}>
         <h1 class="titulo-post">${postData[1].title}</h1>
         <p class="corpo-post">
            ${postData[1].body}
         </p>
         <div class="ver-comentarios">
            <input class="comments" type="button" value="comments">
         </div>
         <div class="comments-area">
         </div>
      </div>
     `
        const botaoAcessarComentarios = document.querySelectorAll('.comments');
        const arraySelecionados = [];
        botaoAcessarComentarios.forEach((botao, index) => {

            botao.addEventListener('click', () => {

                objComments.forEach((obj) => {

                    var acessandoComments = obj[1].postId

                    if (acessandoComments === postData[1].id && botaoAcessarComentarios[index]) {

                        arraySelecionados.push(obj)

                        console.log('selecionados', arraySelecionados)



                        const commentsArea = document.querySelectorAll('.comments-area');

                        arraySelecionados.forEach((selecionado, indice) => {
                            commentsArea[index].innerHTML += `<div class="comentario${indice}" id=${indice}>
                            <h1>${selecionado[1].title}</h1>
                            <p>${selecionado[1].body}</p>
                            <p>id do comentario: ${selecionado[1].id}</p>
                            <div class="ver-comentarios">
                                <input class="comments" type="button" value="comments">
                            </div>
                        </div>`;

                        })
                    }
                })
            })
        })
    })

}
