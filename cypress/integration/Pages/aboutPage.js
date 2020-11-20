

export class AboutPage
{
    GoTo()
    {
        cy.visit('https://talksport.com/about/')
    }

    IsLoaded()
    {
        cy.title().should('eq', 'About – talkSPORT')
        cy.get('[class="article__headline"]').should('contain', 'About')
    }
}