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

  context("Validar a conclusão itens", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["maça", "banana", "cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicialPage.inputText(item);
      });
    });

    it("Concluir itens na lista de tuDo", () => {
      telaInicialPage.concluirItem();
      telaInicialPage.validarContador(2);
    });
  });

  context("Validar o filtro da app", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["maça", "banana", "cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicialPage.inputText(item);
      });
      telaInicialPage.concluirItem();
    });

    it("Validar a lista de itens ativos", () => {
      telaInicialPage.filtrarItem("Active");
      telaInicialPage.validarSizeToDo(2);
    });

    it("Validar a lista de itens concluidos", () => {
      telaInicialPage.filtrarItem("Completed");
      telaInicialPage.validarSizeToDo(1);
    });
  });

  context("Validar a remoção de itens", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["maça", "banana", "cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicialPage.inputText(item);
      });
    });

    it("deletar um item da lista", () => {
      telaInicialPage.deletarItem();
      telaInicialPage.validarSizeToDo(2);
    });
  });
});
