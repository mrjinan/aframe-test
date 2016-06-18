///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons'])
        .service('userService', ContactManagerApp.UserService1)
        .controller('mainController', ContactManagerApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
        $mdIconProvider.defaultIconSet('./assets/svg/avatars.svg', 128);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map