describe('ToDoCtrl ', function () {

  var controller;

  beforeEach(module('app.produto'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller) {
    controller = $controller('produto.controllers.ProdutoCtrl', {});
  }));

  it('should set the correct about page message', function () {
    expect(controller.toDoItems.length).toBeGreaterThan(0);
  });

});
