import {Given, When} from 'cypress-cucumber-preprocessor/steps'
import homePage from '../../pages/home/homePage'
const Home = new homePage();

Given('que ingreso a la pagina de netflix', function () {
    cy.viewport('macbook-15');
    cy.visit('/co');
    cy.wait(2000);
});

When('hago clic en el botón Iniciar sesión en la página principal', function () {
    Home.clickLoginHome();
});