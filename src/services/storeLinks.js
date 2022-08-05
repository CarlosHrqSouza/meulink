//Buscar Links Salvos
export async function getLinksSave(key){
    const myLink = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLink) || [];

    return linksSaves;
}

//Salvar um link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Se já tiver um link salvo com algum ID, não deixar duplicar
    const hasLink = linksStored.some(link => link.id == newLink.id);

    if(hasLink){
        console.log("Esse link já existe na sua lista!")
        return;
    }

    //Adicionar o link na lista.
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("Link salvo com sucesso")
}

//Deletar item da lista
export async function deleteLink(links, id){
    let myLinks = links.filter(item =>{
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso")

    return myLinks;

}