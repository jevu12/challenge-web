import {And, Then, When} from 'cypress-cucumber-preprocessor/steps';
import {ProfilePage} from '../../pages/browse/ProfilePage';
const profile = new ProfilePage();

And('veo la sección de perfiles', function () {
    cy.fixture('text').then((a) => {
        profile.validateProfile(a.texts.selectProfile);
    });
});

And('selecciono mi perfil de usuario', function () {
    profile.clickProfile();

});

When('hago clic en el boton buscar', function () {
    cy.wait(2000);
    profile.clickTabSearch();
    profile.clickSearch();
});

And('escribo en el campo de busqueda la palabra suspenso', function () {
    cy.fixture('text').then((a) => {
        profile.typeSearch(a.genres.suspense);
    });
});

Then('veo los resultados de la busqueda y selecciono los 3 primeros titulos', function () {
    const titles = [];
    profile.getTitles().each(($el, index, $list) => {
        if (index < 3) {
            titles.push($el.text());
        }
        cy.log(titles.join(', '));
    });

});