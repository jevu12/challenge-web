import {And} from 'cypress-cucumber-preprocessor/steps'
import loginPages from "../../pages/login/loginPage"
import {user} from "../../../configs/user";
const login = new loginPages();


And('se muestra el formulario de inicio de sesion', function () {
    login.clickInputEmail();
    login.fillEmailInput(user.emailUser);
    login.fillPasswordInput(user.passwordUser);
});
And('hace click en el boton iniciar sesion', function () {
    cy.wait(5000);
    login.clickLogin();
});