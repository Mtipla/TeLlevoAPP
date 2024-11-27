describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Crear viaje', () => {
    cy.contains('sesión');
    cy.get('input[name="correo"]').should('be.visible');
    cy.get('input[name="correo"]').type('plazadiego591@gmail.com');
    cy.get('input[name="password"]').type('Dinop841');
    cy.contains('Iniciar sesión Conductor').click();
    cy.url().should('include', '/home');
    cy.contains('Programar viaje').click();
    cy.get('input[name="Destino"').type('las vizcachas');
    cy.contains('Buscar').click();
    cy.get('ion-select').click();
    cy.contains('Las Vizcachas, Puente Alto');
    cy.contains('OK').click();
    cy.contains('Iniciar viaje').click();
    cy.url().should('include', '/pro-d');
    cy.get('input[name="capacidad"]').type('4');
    cy.get('input[name="precio"]').type('5000');
    cy.get('input[name="lugar_encuentro"]').type('Entrada');
    cy.contains('Guardar').click();
    cy.contains('Ver viajes').click();
  });
  it('Eliminar viaje', () => { 
    cy.contains('sesión');
    cy.get('input[name="correo"]').should('be.visible');
    cy.get('input[name="correo"]').type('plazadiego591@gmail.com');
    cy.get('input[name="password"]').type('Dinop841');
    cy.contains('Iniciar sesión Conductor').click();
    cy.url().should('include', '/home');
    cy.url().should('include', '/home');
    cy.contains('Ver viajes').click();
    cy.get('ion-grid').should('be.visible');
    cy.get('ion-grid ion-row').first().should('be.visible')
    cy.get('ion-col').find('ion-button[name="eliminar"]').first().should('be.visible').click();
    cy.contains('Eliminar').click();

  });
});
