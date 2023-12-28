import telaInicialPage from "../../support/pageObjects/tela-inicial-page";

describe("Concluir itens na lista de tuDo", () => {
  beforeEach(() => {
    cy.visit("/");
    var todoItens = ["maça", "banana", "cenoura"];

    todoItens.forEach(function (item, indice, array) {
      telaInicialPage.inputText(item);
    });
  });

  it("Concluir itens na lista de tuDo", () => {
    telaInicialPage.concluirItem();
  });
});
