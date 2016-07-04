///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController() {
            this.users = [];
            this.message = "Hello from my controller";
            this.isOpen = false;
            this.selectedUser = null;
            this.searchText = "";
            this.tabIndex = 0;
            console.log("I am here");
        }
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=main.controller.js.map