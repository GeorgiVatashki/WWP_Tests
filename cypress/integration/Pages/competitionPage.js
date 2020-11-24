
export class CompetitionPage
{
    GoTo()
    {
        cy.visit('https://talksport.com/competitions/')
    }

    IsLoaded()
    {
        cy.title().should('include', 'Competitions')
        cy.get('[class="swiper-wrapper sub-nav__list"]').find('a').should('contain','All Competitions')      
    }
}


