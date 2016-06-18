///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var DialogController = (function () {
        function DialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5', 'svg-6', 'svg-7'];
        }
        DialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        DialogController.prototype.save = function () {
            this.$mdDialog.hide(this.createdUser);
        };
        DialogController.$inject = ['$mdDialog'];
        return DialogController;
    }());
    ContactManagerApp.DialogController = DialogController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=adduser.controller.js.map