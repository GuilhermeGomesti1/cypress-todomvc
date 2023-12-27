import telaInicialPage from "../support/pageObjects/tela-inicial-page";
describe("Visitar página todomvc", () => {
  it("abrir o site", () => {
    cy.visit("https://todomvc.com/examples/vanillajs/#/");
    telaInicialPage.inputText();
  });
});
