describe('Testes E2E do Projeto Carro', () => {
    // conjunto de testes

    beforeEach(() => { // caso de teste

        cy.visit('http://127.0.0.1:5500/'); // comando de teste

    });

    it('Verifica o para-brisa', function() {
        cy.visit('http://127.0.0.1:5500/');
        cy.get('#overlay').should('be.hidden');
        cy.get('map > [data-target="parabrisa"]').click({force: true});
        cy.get('[src="./img/parabrisa.png"]').should('have.class', 'sobreposicao');
        cy.get('[src="./img/parabrisa.png"]').should('have.attr', 'data-target', 'parabrisa');
        cy.get('[src="./img/parabrisa.png"]').should('be.visible');
        cy.get('#parabrisa > .close').click();
        cy.get('map > [data-target="parabrisa"]').click({force: true});
        cy.get('#parabrisa > h3').should('be.visible');
        cy.get('#parabrisa > .close').should('have.text', '✖');
        cy.get('#parabrisa > .close').should('have.class', 'close');
        cy.get('#parabrisa > .close').should('be.visible');
        cy.get('#parabrisa > .caption').should('have.class', 'caption');
        cy.get('#parabrisa > .caption').should('be.visible');
        cy.get('#parabrisa').should('have.id', 'parabrisa');
        cy.get('#parabrisa').should('have.class', 'data');
        cy.get('#parabrisa').should('be.visible');
        cy.get('#overlay').should('have.id', 'overlay');
        cy.get('#overlay').should('be.visible');

    });

    it('Verifica o retrovisor direito', function() {
        
        cy.visit('http://127.0.0.1:5500/');
        cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
        cy.get('#overlay').should('have.id', 'overlay');
        cy.get('#overlay').should('be.visible');
        cy.get('#retrovisor-dir').should('have.id', 'retrovisor-dir');
        cy.get('#retrovisor-dir').should('have.class', 'data');
        cy.get('#retrovisor-dir').should('be.visible');
        cy.get('#retrovisor-dir > h3').should('be.visible');
        cy.get('#retrovisor-dir > .close').should('have.text', '✖');
        cy.get('#retrovisor-dir > .close').should('have.class', 'close');
        cy.get('#retrovisor-dir > .close').should('be.visible');
        cy.get('#retrovisor-dir > .caption').should('have.class', 'caption');
        cy.get('#retrovisor-dir > .caption').should('be.visible');
        cy.get('[src="./img/retrovisor-dir.png"]').should('have.class', 'sobreposicao');
        cy.get('[src="./img/retrovisor-dir.png"]').should('have.attr', 'data-target', 'retrovisor-dir');
        cy.get('[src="./img/retrovisor-dir.png"]').should('be.visible');
        cy.get('#retrovisor-dir > .close').click();
        
    });

    it('Verifica se o overlay tem o tamanho da imagem-base', () => {

        cy.get('#imagemBase').should('have.prop', 'clientHeight').then(clientHeight => {

            cy.get('#overlay').invoke('height').should('equal', clientHeight);
    });
});

    it('Verifica se o overlay está oculto', () => {
            
            cy.get('#overlay').should('have.class', 'oculto').and('not.be.visible');
       
     });

     it('Verifica se a cor do overlay está correta', () => {

        cy.get('#overlay').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');

     });

    it('Verifica se os cards estão ocultos', () => {

            cy.get('.data').each(card => {

                cy.wrap(card).should('not.be.visible');

            });

        });
    it('Verifica se as imagems de destaque estão ocultas', () => {

        cy.get('[data-test="imgParabrisa"]').should('have.class', 'oculto').and('not.be.visible')

        cy.get('[data-test="imgRetrovisorDir"]').should('have.class', 'oculto').and('not.be.visible')
        
        cy.get('[data-test="imgEspelhoRetrovisor"]').should('have.class', 'oculto').and('not.be.visible')

    });
});