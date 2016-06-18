///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var User = (function () {
        function User(name, avatar, bio) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
        }
        return User;
    }());
    ContactManagerApp.User = User;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=model.js.map