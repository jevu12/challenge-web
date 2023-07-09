import {Page} from "../Page";
export class ProfilePage extends Page {
    constructor() {
        const elements = {
            tabSearch: '.searchTab',
            ButtonSearch: '#searchInput',
            textProfile: 'h1.profile-gate-label',
            buttonProfile: 'li.profile a[data-uia="action-select-profile+primary"]',
            sliderGalery: '#row-0 > .ptrack-container > .rowContent > .slider',
        }
        super(elements);
    }
    public validateProfile(text: string) {
        this.validateText(this.elements.textProfile, text);
    }
    public clickProfile() {
        this.click(this.elements.buttonProfile);
    }
    public clickSearch() {
        this.click(this.elements.ButtonSearch)
    }
    public clickTabSearch() {
        this.click(this.elements.tabSearch);
    }

    public typeSearch(text: string) {
        this.type(this.elements.ButtonSearch, text);
    }
    public getTitles() {
        return this.getElements(this.elements.sliderGalery);
    }

}