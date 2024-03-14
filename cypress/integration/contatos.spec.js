it('Deve ser capaz de alterar um contato existente', () => {
  const nome = 'Bruna Costa';
  const novoNome = 'Bruna Teste';
  const novoTelefone = '987654321';
  const novoEmail = 'bruna@teste.com';

  cy.contains(nome).parent().within(() => {
    cy.contains('EDITAR').click();
  });

  cy.get('input[type="text"]').clear().type(novoNome);
  cy.get('input[type="tel"]').clear().type(novoTelefone);
  cy.get('input[type="email"]').clear().type(novoEmail);
  cy.get('.salvar').click();

  cy.wait(1000);

  cy.contains(novoNome).should('exist');
  cy.contains(novoTelefone).should('exist');
  cy.contains(novoEmail).should('exist');
});

it('Deve ser capaz de remover um contato existente', () => {
  const nome = 'Felice Lacerda';

  cy.contains(nome).parent().within(() => {
    cy.contains('DELETAR').click();
  });

  cy.wait(1000);

  cy.contains(nome).should('not.exist');
});