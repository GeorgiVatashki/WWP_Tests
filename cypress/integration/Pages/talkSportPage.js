

export class TalkSport
{
    GoTo()
    {  
        var talkSportUrl = 'https://talksport.com'
        cy.setCookie('euconsent-v2', 'testCookieValue')
        cy.setCookie('consentUUID', 'testCookieValue')       
        cy.visit(talkSportUrl)        
    }

    IsLoaded()
    {        
        cy.url().should('include','https://talksport.com/')
        cy.title().should('contain', 'biggest sports radio station | talkSPORT')
    }

    ContentButton()
    {
        cy.get('[class="sun-newsuk__button open-newsuk"]').click()
    }

    TitlePanelsAreVisible()
    {
        cy.get('[class="panel__title panel__title_follow_sun"]').should('contain', 'FOLLOW talkSPORT')
        cy.get('[class="panel__title panel__title_service_sun"]').should('contain', 'talkSPORT')
        cy.get('[class="panel__title"]').should('contain', 'News Corp')
        cy.get('[class="panel__title"]').should('contain', 'Services')
    }
    
    SearchButton(word)
    {
        var initialSearchButton = cy.contains('Search ').click()
        initialSearchButton.type(word)
        cy.get('[value="Search"]').click()               
    }

    SearhWordAssertion(searchingWord)
    {
        cy.url().should('include', searchingWord)
    }    

    CompetitionButton()
    {        
        cy.contains('Competitions').click()
    }

    AboutButton()
    {
        cy.contains('a','About talkSPORT').click()
    }

    TextValidation()
    {
        cy.get('#menu-talksport').then (function FirstForm(talkSportSection) {            
            const about = talkSportSection.find('[id="menu-item-374042"]').text()
            expect(about).to.equal('About talkSPORT')  
            //this is in Cypress style          
            //cy.wrap(talkSportSection).find('[id="menu-item-374042"]').should('contain','About talkSPORT')
            const howToListen = talkSportSection.find('[id="menu-item-374043"]').text()
            expect(howToListen).to.equal('How to listen')
            const listenAgain = talkSportSection.find('[id="menu-item-374044"]').text()
            expect(listenAgain).to.equal('Listen again')
            const liveCommentaries = talkSportSection.find('[id="menu-item-374045"]').text()
            expect(liveCommentaries).to.equal('Live commentaries')
            const downloadTheApp = talkSportSection.find('[id="menu-item-374047"]').text()
            expect(downloadTheApp).to.equal('Download the talkSPORT app NOW – the best way to listen live')
            const podcasts = talkSportSection.find('[id="menu-item-374048"]').text()
            expect(podcasts).to.equal('talkSPORT podcasts')
            const predictor = talkSportSection.find('[id="menu-item-379397"]').text()
            expect(predictor).to.equal('talkSPORT Predictor')
            const shedule = talkSportSection.find('[id="menu-item-374050"]').text()
            expect(shedule).to.equal('talkSPORT schedule')  
        })
    }    

    ShopButton()
    {
        cy.contains('Shop').click()
    }
}