
angular.module('sidenav.services.SideNav', [])
  .factory('SideNav', function() {

    var menuItems = [
      {
        name: 'Produto',
        icon: '',
        route: 'produto'
      }
    ];

    var service = {
      getMenuItems: menuItems
    };
    return service;

  });
