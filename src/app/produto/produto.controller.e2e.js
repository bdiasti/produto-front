describe('teste página', function () {

  beforeEach(function() {
    browser.get('#/produto');
  });

  it('O titulo da página deve estar correto', function () {
   expect(browser.getTitle()).toEqual('Página de produto');
  });
});


describe('teste inclusão de produtos', function () {

  beforeEach(function() {
    browser.get('#/produto');
  });

  it('O titulo da página deve estar correto', function () {
   expect(browser.getTitle()).toEqual('Página de produto');
  });
});


describe('teste exclusão de produtos', function () {

  beforeEach(function() {
    browser.get('#/produto');
  });

  it('O titulo da página deve estar correto', function () {
   expect(browser.getTitle()).toEqual('Página de produto');
  });
});

describe('teste atualização de produtos', function () {

  beforeEach(function() {
    browser.get('#/produto');
  });

  it('O titulo da página deve estar correto', function () {
   expect(browser.getTitle()).toEqual('Página de produto');
  });
});

describe('teste consulta de produtos', function () {

  beforeEach(function() {
    browser.get('#/produto');
  });

  it('O titulo da página deve estar correto', function () {
   expect(browser.getTitle()).toEqual('Página de produto');
  });
});