/// <reference types="cypress"/>

import {AboutPage} from '../Pages/aboutPage'
import {TalkSport} from '../Pages/talkSportPage'
import {CompetitionPage} from '../Pages/competitionPage'
import{ ShopPage} from '../Pages/shopPage'

let talkSportHomePage = new TalkSport()
let talkSportAboutPage = new AboutPage()
let talkSportCompetitionPage = new CompetitionPage()
let talkSportShopPage = new ShopPage()



describe('Base Tests in Talk Sport website', () => {      
   
    Given('A user navigate to Talk Sport home page', () =>{
        
        talkSportHomePage.GoTo()
    })
    
    And('Click The worlds biggest sports radio station button', () => {
    
        talkSportHomePage.ContentButton()
    })
    
    And('Validate that the title is correct', () => {

        talkSportHomePage.IsLoaded() 
    })

    //next test
    
    And('Click The worlds biggest sports radio station button', () => {
    
        talkSportHomePage.ContentButton()
    })

    And('Click About talkSport button', () =>{

        talkSportHomePage.AboutButton()
    })


    And('Validate that the About page title is correct', () =>{

        talkSportAboutPage.IsLoaded()
    })

    //next test

    And('Click The worlds biggest sports radio station button', () => {
    
        talkSportHomePage.ContentButton()
    })

    And('Validate that all sections are there', () =>{

        talkSportHomePage.TitlePanelsAreVisible()

    })

    //next test


    And('Click The Competition button', () =>{

        talkSportHomePage.CompetitionButton()
    })

    And('Validate that the Competition page is loaded', () =>{

        talkSportCompetitionPage.IsLoaded()      
            
    })

    //next test

    And('Click The worlds biggest sports radio station button', () =>{

        talkSportHomePage.ContentButton()
    })

    And('Validate that all Titles are correct', () =>{

        talkSportHomePage.TextValidation()     
            
    })

    //next text

    And('Click Search button and enter a key word', () =>{

        talkSportHomePage.SearchButton('radio')
    }) 
    

    Then('Validate that the searching word is pressent', () =>{

        
        talkSportHomePage.SearchWordAssertion()            
            
    })

    //next test

    And('Click Shop button', () =>{

        talkSportHomePage.ShopButton()
    })     

    And('Validate that the Shop page is pressent', () =>{
        
        talkSportShopPage.IsLoaded()           
            
    })

    And('Press Back To Main Site button', () =>{
        
        talkSportShopPage.backToMainSiteButton()           
            
    })

    Then('This will take you back to the Home Page', () =>{

        talkSportHomePage.IsLoaded() 
    })



    
})






