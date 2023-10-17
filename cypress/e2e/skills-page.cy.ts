describe('Skills Page', () => {
    it('loads when Skills link in header is selected', () => {
        cy.visit('/');
        cy.clickHeader('skills');

        cy.checkHeader('skills', 'Skills');
        cy.checkPageTitle('Skills');
    });

    it('shows list of design skills when Design tab is selected.', () => {

        cy.visit('/');
        cy.clickHeader('skills');

        cy.getBySel('skills-design-link').click();
        cy.getBySel('skills-content').find('li').should('have.length.greaterThan', 0);
    });

    it('shows list of dev skills when Development tab is selected.', () => {

        cy.visit('/');
        cy.clickHeader('skills');

        cy.getBySel('skills-dev-link').click();
        cy.getBySel('skills-content').find('li').should('have.length.greaterThan', 0);
    });

    it('shows list of general skills when General tab is selected.', () => {

        cy.visit('/');
        cy.clickHeader('skills');

        cy.getBySel('skills-general-link').click();
        cy.getBySel('skills-content').find('li').should('have.length.greaterThan', 0);
    });
})