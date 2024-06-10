/* eslint-disable no-undef */
describe('Hrnet application', () => {
  beforeEach(() => cy.visit('http://localhost:5173'));

  it('should display the homepage', { defaultCommandTimeout: 500 }, () => {
    cy.contains('h1', 'Create Employee').should('be.visible');
  });

  it('should render an error when fields are empty', () => {
    cy.get('[data-testid="submit-btn"]').click();
    cy.get('.text-red-500')
      .should('exist')
      .and('contain', 'First name must be at least 3 characters long');
  });

  it('should send data and display modal then close the modal', () => {
    // Fill in the form fields
    cy.fixture('user').then((user) => {
      fillForm(user);
    });

    submitFormAndCheckModal();
    closeModal();
  });

  it('should check if employee previously added is in the table', () => {
    cy.fixture('user').then((user) => {
      fillForm(user);
    });

    submitFormAndCheckModal();
    closeModal();
    checkEmployeePageAndTable();
  });
});

// Helper functions
// Fill in the form fields
function fillForm(user) {
  cy.get('input[name="firstName"]').type(user.firstName);
  cy.get('input[name="lastName"]').type(user.lastName);
  cy.get('input[name="dateOfBirth"]').type(user.dateOfBirth);
  cy.get('input[name="startDate"]').type(user.startDate);
  cy.get('input[name="street"]').type(user.street);
  cy.get('input[name="city"]').type(user.city);
  cy.get('select[name="state"]').select(user.state);
  cy.get('input[name="zipCode"]').type(user.zipCode);
  cy.get('select[name="department"]').select(user.department);
}

// Submit the form and check if the modal is displayed
function submitFormAndCheckModal() {
  cy.get('[data-testid="submit-btn"]').click();
  cy.get('div[role="dialog"][aria-modal="true"]').should('be.visible');
  cy.get('div[role="dialog"][aria-modal="true"]').contains('Employee Created');
}

// Close the modal
function closeModal() {
  cy.get('button[aria-label="Close modal"]').click();
  cy.get('div[role="dialog"][aria-modal="true"]').should('not.exist');
}

// Check the employee page and table
function checkEmployeePageAndTable() {
  cy.get('.bg-lime-700').contains('View Current Employees').click();
  cy.url().should('include', '/employee');
  cy.get('h1').contains('Current Employees').should('be.visible');
  cy.get('.MuiDataGrid-root ').should('be.visible');
  cy.fixture('user').then((user) => {
    cy.contains(user.firstName);
    cy.contains(user.lastName);
  });
}
