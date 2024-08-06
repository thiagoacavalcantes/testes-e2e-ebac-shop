class ProdutosPage {


        buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
        cy.wait(100)

    }

        addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    visualizarCarrinho(carrinho) {
        cy.get('.woocommerce-message > .button').click()
    }

    concluirCompra(compra) {
        cy.get('.checkout-button').click()
    }

    botaoLogin(login) {
        cy.get('.showlogin').click()
        cy.get('#username').type('thiago.teste001@ebac.com.br')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-button').click()
    }

    
    pagamentoEntrega(pagamento1) {
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
    }

    finalizarCompra(finalizar) {
        cy.get('#place_order').click()
        cy.wait(200)
    }
        

    }


export default new ProdutosPage()