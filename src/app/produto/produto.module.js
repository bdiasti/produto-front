angular.module('app.produto', [
  'ui.router',
  'produto.controllers.ProdutoCtrl',
  'produto.services.ProdutoService'
])

.config(function config($stateProvider) {
  $stateProvider.state('produto', {
    url: '/produto',
    templateUrl: 'produto/produto.view.html'
  });
});
