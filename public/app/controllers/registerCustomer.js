angular.module("registerCustomer", [])

.controller("registerCustomer", function($http) {

    console.log("HIT CONTROLLER 1");
    this.addCustomer = (regData) => {
        console.log(this.regData);
        $http.post("/api/users", this.regData);
    };
});