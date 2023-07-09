/// <reference types="cypress-xpath" />
export abstract class Page {
    protected readonly elements: Record<string, string>;

    protected constructor(elements: Record<string, string>) {
        this.elements = elements;
    }

    protected click(selector: string) {
        cy.get(selector).click({ force: true });
    }

    protected type(selector: string, text: string) {
        cy.get(selector).click().type(text);
    }

    protected typeAndEnter(selector: string, text: string) {
        cy.get(selector).click().type(`${text}{enter}`);
    }

    protected validateText(selector: string, text: string) {
        cy.get(selector).should('contain', text);
    }

    protected validateUrl(url: string) {
        cy.url().should('eq', url);
    }

    protected getElements(selector: string) {
        return cy.get(selector);
    }

}