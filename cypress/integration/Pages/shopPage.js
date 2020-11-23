
export class ShopPage
{
    GoTo()
    {
        cy.visit('https://shop.talksport.com/')
    }

    IsLoaded()
    {
        cy.url().should('eq','https://shop.talksport.com/')
    }

    backToMainSiteButton()
    {
        cy.get('.lnk-back').click()
    }
}