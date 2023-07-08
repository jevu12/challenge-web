
import {Page}  from '../Page'
export default class loginPage extends Page {
    constructor() {
        const elements = {
            inputEmail: '#id_userLoginId',
            inputPassword: '#id_password',
            buttonLogin: 'button[type="submit"]',
        };
        super(elements);
    }

    public fillEmailInput(email: string) {
        this.type(this.elements.inputEmail, email);
    }

    public fillPasswordInput(password: string) {
        this.type(this.elements.inputPassword, password);
    }

    public clickInputEmail() {
        this.click(this.elements.inputEmail);
    }

    public clickLogin() {
        this.click(this.elements.buttonLogin);
    }
}