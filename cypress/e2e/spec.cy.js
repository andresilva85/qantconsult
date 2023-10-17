import HomePageActions from '../support/pages/searchPage'

describe('Testes na Página do Blog AGI', () => {
  // Antes de cada teste, visite a página do blog e a ferramenta de pesquisa
  beforeEach(() => {
    HomePageActions.visit();
    HomePageActions.acessaPesquisar();
  })

  it('Cenário 1: Pesquisar por uma palavra-chave válida', () => {
    HomePageActions.buscaPalavraChave('agibank')
    HomePageActions.verificaResultado();
  })

  it('Cenário 2: Pesquisar por uma palavra-chave inexistente', () => {
    HomePageActions.buscaPalavraChave('palavrainvalida12345')
    HomePageActions.verificaResultaVazio();
    
  })

  it('Cenário 3: Pesquisar sem digitar palavra', () => {
    HomePageActions.buscaPalavraChave(' ')
    HomePageActions.verificaResultado();
    
  })

})