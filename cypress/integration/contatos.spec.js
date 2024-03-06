describe('Testes de funcionalidades da aplicação de agenda de contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve ser capaz de adicionar um novo contato', () => {
      const nome = 'Kurt Teste';
      const telefone = '123456789';
      const email = 'kurt@teste.com';
  
      cy.get('[data-cy=nome]').type(nome);
      cy.get('[data-cy=telefone]').type(telefone);
      cy.get('[data-cy=email]').type(email);
      cy.contains('ADICIONAR').click();
  
      cy.contains(nome).should('exist');
      cy.contains(telefone).should('exist');
      cy.contains(email).should('exist');
    });
  
    it('Deve ser capaz de alterar um contato existente', () => {
      const nome = 'Bruna Costa';
      const novoNome = 'Bruna Teste';
      const novoTelefone = '987654321';
      const novoEmail = 'bruna@teste.com';
  
      cy.contains(nome).parent().within(() => {
        cy.contains('EDITAR').click();
      });
  
      cy.get('[data-cy=nome]').clear().type(novoNome);
      cy.get('[data-cy=telefone]').clear().type(novoTelefone);
      cy.get('[data-cy=email]').clear().type(novoEmail);
      cy.contains('SALVAR').click();
  
      cy.contains(novoNome).should('exist');
      cy.contains(novoTelefone).should('exist');
      cy.contains(novoEmail).should('exist');
    });
  
    it('Deve ser capaz de remover um contato existente', () => {
      const nome = 'Felice Lacerda';
  
      cy.contains(nome).parent().within(() => {
        cy.contains('DELETAR').click();
      });
  
      cy.contains(nome).should('not.exist');
    });
  });
  