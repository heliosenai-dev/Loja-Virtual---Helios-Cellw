const produtos = [
  {
    id_produto: 1,
    descricao_produto: "Arroz Tipo 1 5kg",
    caminho_da_imagem: "../imagens/arroz_branco.jpg",
    valor_unitario: 29.90,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 2,
    descricao_produto: "Feijão Preto 1kg",
    caminho_da_imagem: "../imagens/feijao_preto.jpg",
    valor_unitario: 8.49,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 3,
    descricao_produto: "Macarrão Espaguete 500g",
    caminho_da_imagem: "../imagens/macarrao-espaguete-500g.jpg",
    valor_unitario: 5.49,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 4,
    descricao_produto: "Óleo de Soja 900ml",
    caminho_da_imagem: "../imagens/oleo-soja-900ml.jpg",
    valor_unitario: 7.99,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 5,
    descricao_produto: "Açúcar Cristal 5kg",
    caminho_da_imagem: "../imagens/acucar-5kg.jpg",
    valor_unitario: 21.90,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 6,
    descricao_produto: "Leite Integral 1L",
    caminho_da_imagem: "../imagens/leite-integral-1l.jpg",
    valor_unitario: 5.79,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 7,
    descricao_produto: "Queijo Mussarela 500g",
    caminho_da_imagem: "../imagens/queijo_meia_cura.jpg",
    valor_unitario: 24.90,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 8,
    descricao_produto: "Manteiga com Sal 200g",
    caminho_da_imagem: "../imagens/manteiga.jpg",
    valor_unitario: 11.90,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 9,
    descricao_produto: "Iogurte Natural 170g",
    caminho_da_imagem: "../imagens/iogurte-natural-170g.jpg",
    valor_unitario: 3.99,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 10,
    descricao_produto: "Refrigerante Cola 2L",
    caminho_da_imagem: "../imagens/refrigerante-cola-2l.jpg",
    valor_unitario: 9.99,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 11,
    descricao_produto: "Água Mineral 1,5L",
    caminho_da_imagem: "../imagens/agua-mineral-1-5l.jpg",
    valor_unitario: 3.29,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 12,
    descricao_produto: "Suco de Uva 1L",
    caminho_da_imagem: "../imagens/suco-uva-1l.jpg",
    valor_unitario: 8.99,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 13,
    descricao_produto: "Café Torrado e Moído 500g",
    caminho_da_imagem: "../imagens/cafe-500g.jpg",
    valor_unitario: 18.90,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 14,
    descricao_produto: "Detergente Líquido 500ml",
    caminho_da_imagem: "../imagens/detergente-500ml.jpg",
    valor_unitario: 2.99,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 15,
    descricao_produto: "Sabão em Pó 1kg",
    caminho_da_imagem: "../imagens/sabao-po-1kg.jpg",
    valor_unitario: 14.90,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 16,
    descricao_produto: "Água Sanitária 2L",
    caminho_da_imagem: "../imagens/agua-sanitaria-2l.jpg",
    valor_unitario: 6.49,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 17,
    descricao_produto: "Esponja Multiuso",
    caminho_da_imagem: "../imagens/esponja-multiuso.jpg",
    valor_unitario: 2.49,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 18,
    descricao_produto: "Sabonete 90g",
    caminho_da_imagem: "../imagens/sabonete-90g.jpg",
    valor_unitario: 2.79,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 19,
    descricao_produto: "Shampoo 350ml",
    caminho_da_imagem: "../imagens/shampoo-350ml.jpg",
    valor_unitario: 16.90,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 20,
    descricao_produto: "Creme Dental 90g",
    caminho_da_imagem: "../imagens/creme-dental-90g.jpg",
    valor_unitario: 5.99,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 21,
    descricao_produto: "Papel Higiênico 12 Rolos",
    caminho_da_imagem: "../imagens/papel-higienico-12-rolos.jpg",
    valor_unitario: 22.90,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 22,
    descricao_produto: "Chocolate ao Leite 90g",
    caminho_da_imagem: "../imagens/chocolate-90g.jpg",
    valor_unitario: 6.99,
    id_secao: 6,
    nome_secao: "Bomboniere"
  },
  {
    id_produto: 23,
    descricao_produto: "Biscoito Recheado 140g",
    caminho_da_imagem: "../imagens/biscoito-recheado-140g.jpg",
    valor_unitario: 3.99,
    id_secao: 6,
    nome_secao: "Bomboniere"
  },
  {
    id_produto: 24,
    descricao_produto: "Amendoim Torrado 200g",
    caminho_da_imagem: "../imagens/amendoim-200g.jpg",
    valor_unitario: 7.49,
    id_secao: 6,
    nome_secao: "Bomboniere"
  },
  {
    id_produto: 25,
    descricao_produto: "Cesto Sortido",
    caminho_da_imagem: "../imagens/cesto01.jpg",
    valor_unitario: 4.99,
    id_secao: 6,
    nome_secao: "Bomboniere"
  }
];

export{produtos}