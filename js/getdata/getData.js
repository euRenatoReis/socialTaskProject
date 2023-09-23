


export async function getData(){

    try {
        const dados = await fetch('https://jsonplaceholder.typicode.com/users')
        const pegaDados = dados.json()
        return pegaDados
     }
     catch (error) {
         console.error(error)
     }

}
