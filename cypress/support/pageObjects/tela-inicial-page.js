const elem = require("../elements/tela-inicial.elements").ELEMENTS;

class telaInicial {
  inputText() {
    cy.get(elem.inputToDo).type("Guilherme");
  }
}

export default new telaInicial();
