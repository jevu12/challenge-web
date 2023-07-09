import {Then, And} from 'cypress-cucumber-preprocessor/steps'
import loginPages from "../../pages/login/loginPage"
import {user} from "../../../configs/user";
const login = new loginPages();


And('lleno los campos del formulario con mis credenciales', function () {
    login.clickInputEmail();
    login.fillEmailInput(user.emailUser);
    login.fillPasswordInput(user.passwordUser);
});
Then('hago click en el boton iniciar sesion', function () {
    cy.wait(5000);
    login.clickLogin();
    cy.wait(1000);
});
