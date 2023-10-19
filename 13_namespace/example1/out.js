var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "prince sharma util";
        };
        return Users;
    }());
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var u1 = new UsersUtils.Users();
console.warn(u1.getName());
