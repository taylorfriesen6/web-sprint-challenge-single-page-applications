describe('Form', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/pizza');
  })
  it('can receive input in name field', () => {
    cy.get('input[name=name]').type('Taylor').should('have.value', 'Taylor');
  })
  it('can select multiple toppings', () => {
    cy.get('input[name=pepperoni]').check();
    cy.get('input[name=peppers]').check();

    cy.get('input[name=pepperoni]').should('be.checked');
    cy.get('input[name=peppers]').should('be.checked');
    cy.get('input[name=mushrooms]').should('not.be.checked');
    cy.get('input[name=pineapple]').should('not.be.checked');
  })
  it('can submit the form', () => {
    const submitButton = cy.get('input[type=submit]');
    submitButton.should('be.disabled');
    cy.get('input[name=name]').type('Taylor');
    submitButton.should('not.be.disabled');
    submitButton.click();
  })
})