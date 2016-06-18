///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService1 = (function () {
        function UserService1($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Anisha',
                    avatar: 'svg-1',
                    bio: "My some bio for A"
                },
                {
                    name: 'Jinan',
                    avatar: 'svg-2',
                    bio: "My some bio for B"
                },
                {
                    name: 'Calvin',
                    avatar: 'svg-3',
                    bio: "My some bio for C"
                }
            ];
        }
        UserService1.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService1.$inject = ['$q'];
        return UserService1;
    }());
    ContactManagerApp.UserService1 = UserService1;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=user.service.js.map