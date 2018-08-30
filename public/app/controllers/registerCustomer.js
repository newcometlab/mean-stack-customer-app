angular.module("registerCustomer", ["userServices"])

.controller("registerCustomer", function($http, $location, $timeout, User) {

    var app = this;

    this.addCustomer = () => {
        app.loading = true;
        app.errorMsg = false;
        console.log(app.regData);

        User.create(app.regData).then((data) => {
            if (data.data.success) {
                app.successMsg = data.data.message;
                app.loading = false;
                $timeout(() => {
                    $location.path("/home");
                }, 2000);

            } else {
                app.errorMsg = data.data.message;
                app.loading = false;
            }
        })
    };

    this.test = () => {
        User.getUsers().then((data) => {
            console.log(data);
            console.log("FINISHED");
            if (data.data.success) {
                console.log("SUCCESS");
                console.log(data);
            } else {
                console.log("FAILED"+data.data);
            }
        })
    }
});