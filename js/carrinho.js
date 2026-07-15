
//localStorage.removeItem("itensSessao");
//localStorage.clear()

//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const itensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []

//CRIANDO ARROW ITEM
const item =(objProduto) => {
    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1
    }
    return item


}



//FUNÇÃO PARA ADCIONAR O ITEM NO ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {

    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    //const itensSelecionados = JSON.parse(sessionStorage.getItem('itensSessao')) || []

    return itensSelecionados
}

//REMOVER ELEMENTO
const removeItem = (pos)=>{
    itensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))

}


export { addItem, listItens, removeItem }
