angular.module('produto.controllers.ProdutoCtrl', [])
.controller('ProdutoCtrl', function($scope,ProdutoService,$mdDialog,$mdToast) {
  
  //Pega a lista de produtos
  $scope.listaProdutos = function(){
    ProdutoService.listaProdutos().then(function successCallback(response){
      $scope.produtos = response.data;
    }, function errorCallback(response){
      $scope.showToast("Problema ao pegar a lista de produto");
    });
  }
  
  //Mostra modal com o formulario de criação de produtos
  $scope.mostraFormCriarProdutos = function(event){
    $mdDialog.show({
      templateUrl: 'produto/template/create_product.template.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      scope: $scope,
      preserveScope: true,
      fullscreen: true, 
      controller: function($scope, $mdDialog) {
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }
    });
  }
  
  //Evento botão de crição de produto
  $scope.criaProduto = function(){
    
    ProdutoService.criaProduto($scope).then(function successCallback(response){
      $scope.showToast("Produto criado com sucesso");
      $scope.listaProdutos();
      $scope.cancel();
      $scope.limpaFormProduto();
      
    }, function errorCallback(response){
      $scope.showToast("Unable to create record.");
    });
  }
  
  //Limpa formulario de produto
  $scope.limpaFormProduto = function(){
    $scope.id = "";
    $scope.nome = "";
    $scope.descricao = "";
    $scope.quantidade = "";
    $scope.categoria = "";
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
    
    
    $scope.lerProduto = function(id){
      ProdutoService.lerProduto(id).then(function successCallback(response){
        $scope.id = response.data.id;
        $scope.nome = response.data.nome; 
        $scope.descricao = response.data.descricao;
        $scope.price = response.data.price;
        $mdDialog.show({ 
          controller: function($scope, $mdDialog) {
            $scope.cancel = function() {
              $mdDialog.cancel();
            };
          }, 
          templateUrl: 'produto/template/read_one_product.template.html', 
          parent: angular.element(document.body), 
          clickOutsideToClose: true, 
          scope: $scope, 
          preserveScope: true, 
          fullscreen: true }).
          then( function(){},
          function() {
            $scope.limpaFormProduto();
          } ); 
        },function errorCallback(response){ 
          $scope.showToast("Não conseguiu ler o produto especificado");
        }); 
      }
      
      
      $scope.mostraFormularioAtualiza = function(id){
        ProdutoService.lerProduto(id).then(function successCallback(response){     
          $scope.id = response.data.id;
          $scope.nome = response.data.nome;
          $scope.descricao = response.data.descricao;
          $mdDialog.show({
            controller: function($scope, $mdDialog) {
              $scope.cancel = function() {
                $mdDialog.cancel();
              };
            },
            templateUrl: 'produto/template/update_product.template.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true
          }).then(
            function(){},
            function() {
              $scope.limpaFormProduto();
            }
            );
          }, function errorCallback(response){
            $scope.showToast("Não conseguiu ler o produto especificado");
          });
        }
        
        
        //Executa evento de atualização de produto
        $scope.atualizaProduto = function(){
          ProdutoService.atualizaProduto($scope).then(function successCallback(response){
            
            $scope.showToast("Produto atualizado com sucesso");
            $scope.listaProdutos();
            $scope.cancel();
            $scope.limpaFormProduto();
          },
          function errorCallback(response) {
            $scope.showToast("Não foi possivel atualizar o produto.");
          });
        }
        
        $scope.confirmaDelecaoProduto = function(id){
          $scope.id = id;
          var confirm = $mdDialog.confirm()
          .title('Tem certeza?')
          .textContent('Seu produto será deletado')
          .targetEvent(event)
          .ok('Sim')
          .cancel('Não');
          $mdDialog.show(confirm).then(
            function() {
              $scope.deletaProduto();
            },
            function() {}
            );
          }
          
          $scope.deletaProduto = function(){
            ProdutoService.deletaProduto($scope.id).then(function successCallback(response){
              $scope.showToast("Produto deletado com sucesso");
              $scope.listaProdutos();
            }, function errorCallback(response){
              $scope.showToast("Problema ao deletar produto ");
            });
          }
        });
        
        
        