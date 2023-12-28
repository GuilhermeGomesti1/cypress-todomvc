import telaInicialPage from "../../support/pageObjects/tela-inicial-page";

describe("Deletar itens", () => {
  beforeEach(() => {
    cy.visit("/");
    var todoItens = ["maça", "banana", "cenoura"];

    todoItens.forEach(function (item, indice, array) {
      telaInicialPage.inputText(item);
    });
  });

  it("deletar um item da lista", () => {
    telaInicialPage.deletarItem();
  });
});
