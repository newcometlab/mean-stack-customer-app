angular.module("registerCustomer", [])

.controller("registerCustomer", function($http) {

    console.log("HIT CONTROLLER 1");
    this.addCustomer = function(regData) {
        console.log(this.regData);
        $http.post("/api/users", this.regData);
        console.log("POST COMPLETE");
    };
});