import { listItens, removeItem } from "./carrinho.js";
import { produtos } from "./produtos.js";

//MONTANDO A TELA CARRINHO
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((itemCarrinho, i) => {
        const produto = produtos.find((produto) => {
            return produto.id_produto == itemCarrinho.id_produto;
        });

        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')
        sectionItem.innerHTML = `<img src='${produto.caminho_da_imagem}' alt=${produto.descricao_produto} class='img-item'/> 
        <p class='descricao'>${produto.descricao_produto}</p> 
        <p class='valor-unitario'>${produto.valor_unitario}</p> 
        <input type="number" name='quant${i}' id='quant${i}' class="input-item" value=${itemCarrinho.quantidade}> 
        <p class="tot-item">${produto.valor_unitario * itemCarrinho.quantidade}</p>`

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src','../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'Remover')
        imgRemover.setAttribute('class', 'img-remover')

        imgRemover.addEventListener('click',()=>{
            if(confirm(`Deseja remover ${itemCarrinho.descricao_produto} da sua lista? `)){
                removerItemCarrinho(i)
            }
            
        })
        
        sectionItem.appendChild(imgRemover)
        
        sectionItensCarrinho.appendChild(sectionItem)
    });
}

const removerItemCarrinho = (pos)=>{
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()