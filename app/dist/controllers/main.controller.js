///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSideNav, mdToast, $mdDialog, $mdMedia) {
            this.userService = userService;
            this.$mdSideNav = $mdSideNav;
            this.mdToast = mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.users = [];
            this.message = "Hello from my controller";
            this.isOpen = false;
            this.selectedUser = null;
            this.searchText = "";
            this.tabIndex = 0;
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                console.log(self.users);
            });
        }
        MainController.prototype.selectUser = function (user) {
            this.selectedUser = user;
            var sideNav = this.$mdSideNav('left');
            if (sideNav.isOpen) {
                sideNav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.toggleSideNav = function () {
            console.log("Helloo");
            this.$mdSideNav('left').toggle();
        };
        MainController.prototype.removeNote = function () {
            this.mdToast.show(this.mdToast.simple().position("top right").textContent("Hello World"));
        };
        MainController.prototype.openToast = function (msg) {
            this.mdToast.show(this.mdToast.simple().position("top right").textContent(msg));
        };
        MainController.prototype.addUser = function (ev) {
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            console.log(useFullScreen);
            self.$mdDialog.show({
                controller: ContactManagerApp.DialogController,
                templateUrl: './dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                controllerAs: 'ctrl',
                clickOutsideToClose: true
            })
                .then(function (answer) {
                self.users.push(answer);
                self.selectUser(answer);
                self.openToast("Saved User");
            }, function () {
                self.openToast("Not Saved");
            });
        };
        MainController.$inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=main.controller.js.map