describe('recipe project', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1200, 1200);
    })
    it('details', () => {
        cy.login()
        cy.home()
        cy.get("[data-test='contentHeader']").should("be.visible")
        cy.get("[data-test='contentParag']").should("be.visible")
        cy.get("[data-test='contentImage']").should("be.visible")
    })

})