angular.module('produto.services.ProdutoService', [])
.factory('ProdutoService', function(BASE_URL, $http) {
  
  var factory = {};
  
  factory.listaProdutos = function(){
    return $http.get(`${BASE_URL}typicode/demo/posts/`);
  };
  
  factory.criaProduto = function($scope){
    var  data =  {
      'name' : $scope.name,
      'description' : $scope.description,
      'price' : $scope.price,
      'category_id' : 1
    }
    return $http.post(`${BASE_URL}typicode/demo/posts/`,data)
  };
  
  factory.lerProduto = function(id){ 
    return $http.get(`${BASE_URL}typicode/demo/posts/${id}`);
  }
  
  factory.atualizaProduto = function($scope){
    var  data =  {
      'id' : $scope.id,
      'name' : $scope.name,
      'description' : $scope.description,
      'price' : $scope.price,
      'category_id' : 1
    }
    return $http.put(`${BASE_URL}typicode/demo/posts/`,data);
  };
  
  factory.deletaProduto = function(id){
    
    var  data =  {
      'id' : id
    }
    return $http.delete(`${BASE_URL}typicode/demo/posts/`,data);
  };
  
  return factory;
});
