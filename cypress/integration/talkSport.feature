
Feature: The Talk Sport
    As a user
    I should be able to navigate to the main page and to interact with  The world's biggest sports
    radio station button and the entire functionality inside

    Background:
        Given A user navigate to Talk Sport home page

    Scenario: The world's biggest sports radio station button is accessible        
        And Click The worlds biggest sports radio station button
        And Validate that the title is correct

    Scenario: Click About talkSport button through The world's biggest sports radio station button        
        And Click The worlds biggest sports radio station button
        And Click About talkSport button
        And Validate that the About page title is correct

    Scenario: Click The world's biggest sports radio station button and validate all main sections        
        And Click The worlds biggest sports radio station button
        And Validate that all sections are there

    Scenario: Click Arrow button in the main titlebar  to reach the Competition option        
        And Click The Competition button
        And Validate that the Competition page is loaded

    Scenario: Validate that all titles under talkSport section are visible        
        And Click The worlds biggest sports radio station button
        And Validate that all Titles are correct

    Scenario: Validate that the Search functionality works as expected        
        And Click Search button and enter a key word
        Then Validate that the searching word is pressent

    Scenario: Validate that the Shop functionality works as expected        
        And Click Shop button
        And Validate that the Shop page is pressent
        And Press Back To Main Site button
        Then This will take you back to the Home Page

