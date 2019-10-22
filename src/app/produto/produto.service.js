angular.module('produto.services.ProdutoService', [])
.factory('ProdutoService', function(BASE_URL, $http) {
  
  var factory = {};
  
  factory.readProducts = function(){
    return $http.get(`${BASE_URL}typicode/demo/posts/`);
  };
  
  
  factory.createProduct = function($scope){
    var  data =  {
      'name' : $scope.name,
      'description' : $scope.description,
      'price' : $scope.price,
      'category_id' : 1
    }
    return $http.post(`${BASE_URL}typicode/demo/posts/`,data)
  };

   factory.readOneProduct = function(id){ 
     return $http.get(`${BASE_URL}typicode/demo/posts/${id}`);
   }

   // update product
factory.updateProduct = function($scope){

  return $http({
      method: 'POST',
      data: {
          'id' : $scope.id,
          'name' : $scope.name,
          'description' : $scope.description,
          'price' : $scope.price,
          'category_id' : 1
      },
      url: 'http://localhost/api/product/update.php'
  });
};
// deleteProduct will be here
  return factory;
});
