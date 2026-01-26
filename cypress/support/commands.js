Cypress.Commands.add("login", (users) =>{
    cy.visit('https://desa.activa-it.net/');
    cy.get('.close-btn-informativo').click();
    cy.contains('Ingreso Usuarios').click();
    cy.get('#loginForm').within(()=>{
        cy.get('[name="user"]').type(users.username);
        cy.get('[name="pass"]').type(users.password);
    });
    cy.get('#btnLogin').click();
    })

Cypress.Commands.add("visitRDL", () =>{
    cy.visit('https://desa.activa-it.net:8019/');
    cy.get('.close-btn-informativo').click();
    cy.get('a[href="/App_Customs/Externas/RadicacionLight/RadicacionLight.aspx"]').first().click({ force: true })
})