const el = require('./elements').Elements;

class HomePageActions {

    visit() {
        cy.visit('https://blogdoagi.com.br/');
    }

    acessaPesquisar() {
        cy.get(el.lupa).click({ force: true })
    }

    buscaPalavraChave(palavraChave) {
        cy.get(el.campoBusca).type(palavraChave);
        cy.get(el.botaoPesquisa).click();
    }

    verificaResultado() {
        cy.get(el.resultadoBusca).should('exist');
        cy.get(el.resultadoBusca).should('be.visible');
      };
      

    verificaResultaVazio() {
        cy.get(el.resultadoVazio).should('exist');
        cy.get(el.resultadoVazio).should('be.visible');
        cy.get(el.msgResultadoVazio).should('contain','Nenhum resultado')
    }
}

export default new HomePageActions();
