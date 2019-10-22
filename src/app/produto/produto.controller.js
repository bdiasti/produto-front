angular.module('produto.controllers.ProdutoCtrl', [])
.controller('ProdutoCtrl', function($scope,ProdutoService,$mdDialog,$mdToast) {
  
  //Pega a lista de produtos
  $scope.readProducts = function(){
    // use products factory
    ProdutoService.readProducts().then(function successCallback(response){
      $scope.produtos = response.data;
    }, function errorCallback(response){
      $scope.showToast("Problema ao pegar as informações");
    });
  }
  
  
  //Mostra modal com o formulario de produto
  $scope.showCreateProductForm = function(event){
    $mdDialog.show({
      templateUrl: 'produto/create_product.template.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      scope: $scope,
      preserveScope: true,
      fullscreen: true, // Only for -xs, -sm breakpoints.
      controller: function($scope, $mdDialog) {
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }
    });
  }
  
  // create new product
  $scope.createProduct = function(){
    ProdutoService.createProduct($scope).then(function successCallback(response){
      console.log("Criando produto")
      // tell the user new product was created
      $scope.showToast("Funcionou");
      // refresh the list
      $scope.readProducts();
      // close dialog
      $scope.cancel();
      // remove form values
      $scope.clearProductForm();
    }, function errorCallback(response){
      $scope.showToast("Unable to create record.");
    });
  }
  
  $scope.clearProductForm = function(){
    $scope.id = "";
    $scope.name = "";
    $scope.description = "";
    $scope.price = "";
  }
  
  
  // show toast message
  $scope.showToast = function(message){
    $mdToast.show(
      $mdToast.simple()
      .textContent(message)
      .hideDelay(3000)
      .position("top right")
      );
    }
    
    
    $scope.readOneProduct = function(id){
      
      // get product to be edited
      ProdutoService.readOneProduct(id).then(function successCallback(response){
        
        // put the values in form
        $scope.id = response.data.id;
        $scope.name = response.data.name; 
        $scope.description = response.data.description;
        $scope.price = response.data.price;
         $mdDialog.show({ 
           controller: DialogController, 
           templateUrl: './app/produto/read_one_product.template.html', 
           parent: angular.element(document.body), 
           clickOutsideToClose: true, 
           scope: $scope, 
           preserveScope: true, 
           fullscreen: true }).
           then( function(){},
        // user clicked 'Cancel'
        function() {
          // clear modal content
          $scope.clearProductForm();
        } ); }, function errorCallback(response){ $scope.showToast("Unable to retrieve record."); }); }


        $scope.showUpdateProductForm = function(id){

          // get product to be edited
          productsFactory.readOneProduct(id).then(function successCallback(response){
      
              // put the values in form
              $scope.id = response.data.id;
      $scope.name = response.data.name;
      $scope.description = response.data.description;
      $scope.price = response.data.price;
      $mdDialog.show({
                  controller: DialogController,
                  templateUrl: './app/products/update_product.template.html',
                  parent: angular.element(document.body),
                  targetEvent: event,
                  clickOutsideToClose: true,
                  scope: $scope,
                  preserveScope: true,
                  fullscreen: true
              }).then(
                  function(){},
      
                  // user clicked 'Cancel'
                  function() {
                      // clear modal content
                      $scope.clearProductForm();
      }
              );
      }, function errorCallback(response){
              $scope.showToast("Unable to retrieve record.");
      });
      }


      // update product record / save changes
$scope.updateProduct = function(){

  productsFactory.updateProduct($scope).then(function successCallback(response){

      // tell the user product record was updated
      $scope.showToast(response.data.message);
// refresh the product list
      $scope.readProducts();
// close dialog
      $scope.cancel();
// clear modal content
      $scope.clearProductForm();
},
  function errorCallback(response) {
      $scope.showToast("Unable to update record.");
});
}

        
});
      
      
      