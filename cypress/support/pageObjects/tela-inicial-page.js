const elem = require("../elements/tela-inicial.elements").ELEMENTS;
const concluirItem = require("../elements/tela-inicial.elements").ITENS;
const filtroItem = require("../elements/tela-inicial.elements").FILTROS;
class telaInicial {
  inputText(date) {
    cy.get(elem.inputToDo).type(date).type("{enter}");
  }

  validarInput(texto) {
    cy.get(elem.inputToDo)
      .should("have.attr", "placeholder")
      .and("include", texto);
  }
  validarContador(numero) {
    cy.get(filtroItem.contador).find("strong").should("have.text", numero);
  }

  concluirItem() {
    cy.get(concluirItem.buttonConcluir).first().click();
  }

  filtrarItem(menu) {
    cy.get(filtroItem.filtroToDo).contains(menu).and("be.visible").click();
  }

  deletarItem() {
    cy.get(concluirItem.listaItens)
      .first()
      .find("button")
      .invoke("show")
      .click();
  }
}

export default new telaInicial();
