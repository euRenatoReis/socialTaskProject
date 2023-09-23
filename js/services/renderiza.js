


export async function renderderizaUsers(render, pegarResults, main) {

    const obj = Object.entries(pegarResults)
    console.log(obj)



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

    botaoAcessar.forEach((botao) => {

        let idDoBotao = botao.id

        botao.addEventListener('click', async () => {

            main.innerHTML += `<div class="card-individual">
                <div class="nome-user"><h1>${obj[idDoBotao][1].name}</h1><h3>${obj[idDoBotao][1].username}</h3></div>
                <div class="contato">
                   <p>${obj[idDoBotao][1].email}</p>
                   <p>${obj[idDoBotao][1].website}</p>
                   <p>${obj[idDoBotao][1].phone}</p>
                </div>
                <div class="endereco">
                   <p>${obj[idDoBotao][1].address.city}</p>
                   <p>${obj[idDoBotao][1].address.street}</p>
                   <p>${obj[idDoBotao][1].address.suite}</p>
                   <p>${obj[idDoBotao][1].address.zipcode}</p>
                </div>
                <div class="trabalho">
                   <p>${obj[idDoBotao][1].company.bs}</p>
                   <p>${obj[idDoBotao][1].company.catchPhrase}</p>
                   <p>${obj[idDoBotao][1].company.name}</p>
                <div>
            </div>
         `
        })
    })
}
