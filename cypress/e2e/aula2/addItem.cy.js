import telaInicialPage from "../../support/pageObjects/tela-inicial-page";

describe("Adicionar item na minha lista de toDo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adicionar um item na lista", () => {
    telaInicialPage.inputText("date1");
  });

  it("Adicionar mais de um item na lista", () => {
    var todoItens = ["maça", "banana", "cenoura"];

    todoItens.forEach(function (item, indice, array) {
      telaInicialPage.inputText(item);
    });
  });
});
