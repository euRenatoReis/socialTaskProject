


export async function getData() {

    try {
        const dadosUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const pegaDados = dadosUsers.json()
        return pegaDados
    }
    catch (error) {
        console.error('erro ao pegar usuarios', error)
    }

}

export async function getPosts() {

    try {
        const dadosPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const pegaDadosJson = dadosPosts.json()

        return pegaDadosJson
    }
    catch (error) {
        console.error('erro ao pegar posts', error)
    }
}