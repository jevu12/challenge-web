
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

}