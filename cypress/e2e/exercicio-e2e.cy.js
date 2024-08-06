/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('produtos')
  });

  afterEach(() => {
    cy.screenshot()
});

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    let qtd = 3
        produtosPage.buscarProduto('Abominable Hoodie')                   
        produtosPage.addProdutoCarrinho('XS', 'Red', qtd)           
        produtosPage.buscarProduto('Aero Daily Fitness Tee')                 
        produtosPage.addProdutoCarrinho('M', 'Brown', qtd)              
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('S', 'Green', qtd)    
        produtosPage.buscarProduto('Atlas Fitness Tank')          
        produtosPage.addProdutoCarrinho('L', 'Blue', qtd)
        produtosPage.visualizarCarrinho()
        produtosPage.concluirCompra()
        produtosPage.botaoLogin()
        produtosPage.pagamentoEntrega()
        produtosPage.finalizarCompra()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')  
      
               
  });


})