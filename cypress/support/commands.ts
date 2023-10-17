/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

export {};

declare global {
  namespace Cypress {
    interface Chainable {
        getBySel(selector: string, ...args): Chainable
        checkHeader(activePageRef: string, activePageLabel: string): Chainable<void>
        clickHeader(activePageRef: string): Chainable<void>
        checkPageTitle(pageTitle: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add('checkHeader', (activePageRef, activePageLabel) => {
    cy.url().should('include', activePageRef);

    cy.get('header').find('.navbar-brand').should('have.text', 'Rob Kennedy');

    cy.get('header').find('a').should('have.length', 6);

    cy.get('header').find(`a[href="/${activePageRef}"]`)
    .should('have.class', 'active')
    .should('have.text', activePageLabel);
});

Cypress.Commands.add('clickHeader', (activePageRef) => {
    cy.get('header').find(`a[href="/${activePageRef}"]`).click();
    cy.url().should('include', `/${activePageRef}`);
});

Cypress.Commands.add('checkPageTitle', (pageTitle) => {
    cy.get('.rk-page').find('h1').should('have.text', pageTitle);
});