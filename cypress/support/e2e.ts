import './commands';

Cypress.on('uncaught:exception', (err, runnable, promise) => {
});

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
        }
    }
}
