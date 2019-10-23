angular.module('produto.services.ProdutoService', [])
.factory('ProdutoService', function(BASE_URL, $http) {
  
  var factory = {};
  
  factory.listaProdutos = function(){
    return $http.get(`${BASE_URL}produto`);
  };
  
  factory.criaProduto = function($scope){
    var  data =  {
      'nome' : $scope.nome,
      'descricao' : $scope.descricao,
      'quantidade' : $scope.quantidade,
      'codigoBarra' : $scope.codigoBarra,
      'categoria' : $scope.categoria
    }
    return $http.post(`${BASE_URL}produto`,data)
  };
  
  factory.lerProduto = function(id){ 
    return $http.get(`${BASE_URL}produto/${id}`);
  }
  
  factory.atualizaProduto = function($scope){
    var  data =  {
      'nome' : $scope.nome,
      'descricao' : $scope.descricao,
      'quantidade' : $scope.quantidade,
      'codigoBarra' : $scope.codigoBarra,
      'categoria' : $scope.categoria
    }
    return $http.put(`${BASE_URL}produto/${$scope.id}`,data);
  };
  
  factory.deletaProduto = function(id){
    return $http.delete(`${BASE_URL}produto/${id}`);
  };
  
  return factory;
});
