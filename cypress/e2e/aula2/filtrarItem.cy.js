import telaInicialPage from "../../support/pageObjects/tela-inicial-page";

describe("Validar os filtros da aplicação após a adição de itens", () => {
  beforeEach(() => {
    cy.visit("/");
    var todoItens = ["maça", "banana", "cenoura"];

    todoItens.forEach(function (item, indice, array) {
      telaInicialPage.inputText(item);
    });
    telaInicialPage.concluirItem();
  });

  it("Filtrar itens ativos", () => {
    telaInicialPage.filtrarItem("Active");
  });

  it.skip("Filtrar itens concluidos", () => {});
});
