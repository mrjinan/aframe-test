///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    class UserService {
        constructor($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'A',
                    avatar: 'svg-1',
                    bio: "My some bio for A"
                },
                {
                    name: 'B',
                    avatar: 'svg-2',
                    bio: "My some bio for B"
                },
                {
                    name: 'C',
                    avatar: 'svg-3',
                    bio: "My some bio for C"
                }
            ];
        }
        loadAllUsers() {
            return this.$q.when(this.users);
        }
    }
    UserService.$inject = ['$q'];
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map