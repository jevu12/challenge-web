import {Page} from "../Page";
export default class homePage extends Page {
    constructor() {
        const elements = {
            buttonLoginHome: 'a[data-uia="header-login-link"]',
        }
        super(elements);
    }

    public clickLoginHome() {
        this.click(this.elements.buttonLoginHome);
    }

}