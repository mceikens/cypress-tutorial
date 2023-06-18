describe('Testing page home', () => {

    it('first test ', () => {
        cy.visit('http://localhost:8080/cars/list');

        cy.get('h1').should('exist');
        cy.get('h1').contains('List of Cars');
        cy.get('h1').should('have.text','List of Cars');
    });
});