angular.module("userServices", [])

.factory("User", ($http) => {
    console.log("HIT USER SERVICES CONFIGURATION FILE");

    let userFactory = {};

    userFactory.create = (regData) => {
        return $http.post("/api/users", regData);
    };

    userFactory.getUsers = () => {
        return $http.get("/api/users");
    };

    return userFactory;
});