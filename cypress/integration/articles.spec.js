/// <reference types="cypress" />

context('NY Time Science Articles', () => {
    beforeEach(() => {
        cy.intercept('GET', '/svc/topstories/v2/science.json*', { fixture: 'articles.json' })
        cy.visit('http://localhost:3000')
      })

      it('renders full page with no search filter', () => {       
        cy.get('.science-articles-table-body tr').should('have.length', 8)

        cy.get('.science-articles-table-body tr')
          .should('contain', 'Climate Change Is Making Big Problems Bigger');
      });

      it('can search by title', () => {       
        cy.get('.global-search')
          .type('Biden Administration').should('have.value', 'Biden Administration');

        cy.get('.science-articles-table-body tr').should('have.length', 1)

        cy.get('.science-articles-table-body tr')
          .should('contain', 'Biden Administration Approves Nation’s First Major Offshore Wind Farm');
      });

      it('can search by byline', () => {       
        cy.get('.global-search')
          .type('By Jenny Gross').should('have.value', 'By Jenny Gross');

        cy.get('.science-articles-table-body tr').should('have.length', 1)

        cy.get('.science-articles-table-body tr')
          .should('contain', 'Can You Have More Than 150 Friends?');
      });

      it('can search by section', () => {       
        cy.get('.global-search')
          .type('HEALTH').should('have.value', 'HEALTH');

        cy.get('.science-articles-table-body tr').should('have.length', 3)

        cy.get('.science-articles-table-body tr')
          .should('contain', 'C.D.C. Advisers Endorse Pfizer Vaccine for Children Ages 12 to 15');
      });
})