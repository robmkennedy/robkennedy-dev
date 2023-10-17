describe('Home Page', () => {

    it('loads when visiting root path', () => {
        cy.visit('/');
        cy.checkHeader('summary', 'Summary');
        cy.checkPageTitle('Summary');
    });
    
})