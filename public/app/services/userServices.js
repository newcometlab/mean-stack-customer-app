angular.module("userServices", [])

.factory("User", ($http) => {
    console.log("HIT USER SERVICES CONFIGURATION FILE");
    userFactory = {};

    userFactory.create = (regData) => {
        return $http.post("/api/users", regData);
    };

    return userFactory;
});