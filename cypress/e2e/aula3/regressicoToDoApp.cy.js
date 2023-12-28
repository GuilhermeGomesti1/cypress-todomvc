import telaInicialPage from "../../support/pageObjects/tela-inicial-page";

describe("Regressivo ToDo App", () => {
  context("Validar a tela inicial", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Validar a area label de input de dados", () => {
      telaInicialPage.validarInput("What needs to be done?");
    });
  });

  context("Validar a adiçao de itens", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Adicionar mais de um item na lista", () => {
      var todoItens = ["maça", "banana", "cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicialPage.inputText(item);
      });

      telaInicialPage.validarContador(3);
    });
  });

  context.skip("Validar a conclusão itens", () => {});

  context.skip("Validar o filtro da app", () => {});

  context.skip("Validar a remoção de itens", () => {});
});
