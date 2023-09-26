


export async function getData() {

    try {
        const dadosUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const pegaDados = await dadosUsers.json()
        return await pegaDados
    }
    catch (error) {
        console.error('erro ao pegar usuarios', error)
    }

}

export async function getPosts() {

    try {
        const dadosPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const pegaDadosJson = await dadosPosts.json()

        return await pegaDadosJson
    }
    catch (error) {
        console.error('erro ao pegar posts', error)
    }
}
